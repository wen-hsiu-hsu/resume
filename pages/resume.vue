<template>
    <div class="max-w-[1024px] container mx-auto pb-10 pt-4 px-4 print:p-0">
        <div class="mb-16 print:hidden">
            <div class="border-b border-neutral-200 pb-2">
                <div class="flex items-center gap-8 w-full relative">
                    <NuxtLink
                        class="flex items-center gap-2"
                        :to="$localePath('/')"
                    >
                        <Icon name="mdi:arrow-left" mode="svg" />
                        <span>{{ $t("homePage") }}</span>
                    </NuxtLink>
                    <h1
                        class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] font-bold m-0"
                    >
                        {{ $t("resume.title") }}
                    </h1>
                    <ul class="flex gap-2 ml-auto list-none">
                        <li
                            v-for="localeItem in locales.filter(
                                ({ code }) => code !== locale,
                            )"
                            :key="localeItem.code"
                        >
                            <NuxtLink
                                :class="[
                                    'py-1 px-1 inline-flex items-center gap-1 w-full',
                                ]"
                                :to="$switchLocalePath(localeItem.code)"
                            >
                                {{ localeItem.name }}
                                <Icon
                                    name="mdi:arrow-top-right"
                                    class="size-3"
                                    mode="svg"
                                />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-6 flex justify-end">
                <a
                    class="flex gap-1 items-center hover:underline"
                    :href="`/resume-${locale}.pdf`"
                    target="_blank"
                >
                    <span>{{ $t("resume.viewPdf") }}</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        class="size-3"
                        mode="svg"
                    />
                </a>
            </div>
        </div>
        <div
            class="flex flex-col md:flex-row print:flex-row gap-12"
            :class="[locale === 'en' && 'print:text-3.5']"
            v-if="resume"
        >
            <div class="md:w-[200px] print:w-[200px] space-y-8 shrink-0">
                <div class="space-y-2">
                    <!-- <img
                        src="/avatar.jpg"
                        :alt="`${nameTw} ${nameEn}`"
                        class="max-w-30 rounded"
                    /> -->
                    <div class="space-y-0">
                        <h2 class="font-bold text-5">
                            {{ resume.basics.name }}
                        </h2>
                        <p
                            :class="[
                                locale === 'zh_tw' && 'tracking-wider',
                                'italic',
                            ]"
                        >
                            {{ resume.basics.label }}
                        </p>
                    </div>
                    <p class="text-3 flex items-center gap-1">
                        <Icon name="mdi:location" class="text-3" mode="svg" />
                        {{ resume.basics.location.city }},
                        {{ resume.basics.location.countryCode }}
                    </p>
                    <ul class="text-3 space-y-1 list-none">
                        <li class="flex gap-2 items-center">
                            <a
                                href="mailto:resume.basics.email"
                                class="flex items-center gap-2 hover:underline"
                            >
                                <span class="flex items-center">
                                    <Icon
                                        name="mdi:email"
                                        class="text-3"
                                        mode="svg"
                                    />
                                </span>
                                <span class="text-blue-800">{{
                                    resume.basics.email
                                }}</span>
                            </a>
                        </li>
                        <li
                            v-for="profile in resume.basics.profiles.filter(
                                (item) => !item.hidden,
                            )"
                            :key="profile.network"
                        >
                            <a
                                :href="profile.url"
                                class="flex items-center gap-2 hover:underline"
                                target="_blank"
                            >
                                <Icon
                                    :name="`simple-icons:${profile.network}`"
                                    mode="svg"
                                />
                                <span class="text-blue-800">{{
                                    profile.username
                                }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="space-y-8">
                    <li
                        v-for="section in sideSections"
                        :key="section.key"
                        class="space-y-2"
                    >
                        <h2
                            :class="[
                                'font-bold border-b border-neutral-200 pb-0',
                                locale === 'zh_tw' && 'tracking-wider',
                            ]"
                        >
                            {{ section.title }}
                        </h2>

                        <template v-if="section.key === 'stack'">
                            <ul class="space-y-3 list-none">
                                <li
                                    v-for="item in resume.skills"
                                    :key="item.name"
                                    class="text-neutral-500 space-y-1"
                                >
                                    <h3 class="font-bold text-3.5">
                                        {{ item.name }}
                                    </h3>
                                    <ul
                                        class="flex gap-2 flex-wrap list-none text-3"
                                    >
                                        <li
                                            v-for="(
                                                keyword, keywordIndex
                                            ) in item.keywords"
                                            class="flex items-center gap-1"
                                        >
                                            <!-- <span
                                                v-if="keywordIndex !== 0"
                                                class="text-2.5"
                                                >/</span
                                            > -->
                                            <div
                                                v-if="
                                                    iconState &&
                                                    iconState[keyword]
                                                "
                                                class="size-4 flex items-center justify-center"
                                            >
                                                <Icon
                                                    :name="iconState[keyword]"
                                                    class="size-4"
                                                    mode="svg"
                                                />
                                            </div>
                                            <span>{{ keyword }}</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </template>

                        <template v-if="section.key === 'education'">
                            <ul class="list-none">
                                <li v-for="item in resume.education">
                                    <p class="text-3 italic text-neutral-500">
                                        {{ item.startDate }} ~
                                        {{ item.endDate }}
                                    </p>
                                    <h3 class="font-bold text-3.5">
                                        {{ item.institution }}
                                    </h3>
                                    <div
                                        class="flex flex-wrap gap-x-2 text-3 font-italic"
                                    >
                                        <p class="text-nowrap">
                                            {{ item.area }}
                                        </p>
                                        <p class="text-nowrap">
                                            {{ item.studyType }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </template>

                        <template v-if="section.key === 'languages'">
                            <ul class="list-none space-y-1">
                                <li
                                    v-for="item in resume.languages"
                                    class="flex flex-col flex-wrap text-3.5"
                                >
                                    <h3 class="font-bold">
                                        {{ item.language }}
                                    </h3>
                                    <p class="text-3 font-italic text-nowrap">
                                        {{ item.fluency }}
                                    </p>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </div>
            <div class="grow">
                <div class="space-y-6">
                    <div
                        :class="[
                            'space-y-2',
                            locale === 'zh_tw' && 'tracking-wider',
                        ]"
                        v-for="section in sections"
                        :key="section.key"
                    >
                        <h2
                            :class="[
                                'text-5 font-bold border-b border-neutral-200 pb-0 print:break-after-avoid',
                                locale === 'zh_tw' && 'tracking-wider',
                            ]"
                        >
                            {{ section.title }}
                        </h2>
                        <template v-if="section.key === 'about'">
                            <p>
                                {{ resume.basics.summary }}
                            </p>
                        </template>

                        <template v-if="section.key === 'work'">
                            <ul class="space-y-4 list-none">
                                <li
                                    v-for="work in resume.work.slice(0, 3)"
                                    class="space-y-2 print:break-inside-avoid"
                                >
                                    <div>
                                        <p
                                            class="text-3 italic text-neutral-500"
                                        >
                                            {{ work.startDate }} ~
                                            {{ work.endDate }}
                                        </p>
                                        <div
                                            class="flex gap-x-4 flex-col md:flex-row print:flex-row"
                                        >
                                            <h3 class="font-bold">
                                                {{ work.name }}
                                            </h3>
                                            <p
                                                class="text-3.5 text-neutral-500"
                                            >
                                                {{ work.position }}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{{ work.summary }}</p>
                                    <ul
                                        class="list-disc ml-3 pl-4 text-neutral-500 list-disc"
                                    >
                                        <li v-for="item in work.highlights">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </template>

                        <template v-if="section.key === 'projects'">
                            <ul class="space-y-4">
                                <li
                                    v-for="project in resume.projects"
                                    class="space-y-1 print:break-inside-avoid"
                                >
                                    <h3 class="font-bold">
                                        {{ project.name }}
                                    </h3>
                                    <p>{{ project.description }}</p>
                                    <ul
                                        class="flex gap-2 text-3 text-neutral-500 flex-wrap list-none"
                                    >
                                        <li
                                            v-for="item in project.highlights"
                                            :key="item"
                                        >
                                            #{{ item }}
                                        </li>
                                    </ul>
                                    <a
                                        :href="project.url"
                                        target="_blank"
                                        class="text-blue-700 text-3 block hover:underline"
                                        >{{ project.url }}</a
                                    >
                                </li>
                            </ul>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ResumeState } from "@/types/state"
import type { Icon } from "@/types/resume"
definePageMeta({
    layout: "print",
})

const { locale, t, locales } = useI18n()

useHead({
    title: t("resume.title"),
    meta: [
        {
            name: "description",
            content: t("resume.description"),
        },
    ],
})

defineOgImage("Resume", {
    title: t("resume.title"),
    description: t("resume.description"),
})

const resumeState = useState<ResumeState>("resume")

const nameTw = computed(() => resumeState.value?.zh_tw?.basics?.name)
const nameEn = computed(() => resumeState.value?.en?.basics?.name)

const resume = computed(() => resumeState.value?.[locale.value] ?? null)

const iconState = useState<Icon>("icon", () => ({}))

const sections = computed(() => {
    return [
        {
            key: "about",
            title: t("about-me"),
        },
        {
            key: "work",
            title: t("work-experience"),
        },
        {
            key: "projects",
            title: t("projects"),
        },
    ]
})

const sideSections = computed(() => {
    return [
        {
            key: "stack",
            title: t("tech-stack"),
        },
        {
            key: "education",
            title: t("education"),
        },
        {
            key: "languages",
            title: t("languages"),
        },
    ]
})
</script>
