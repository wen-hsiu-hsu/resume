<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-5 gap-4">
            <ClientOnly>
                <div class="hidden lg:block opacity-0" ref="indicator">
                    <HomeIndicator
                        :content-container="elContainer"
                        :sections="sectionsForIndicator"
                    />
                </div>
            </ClientOnly>
            <div
                class="col-start-1 col-end-6 lg:col-start-2 lg:col-end-5"
                ref="container"
            >
                <div ref="sectionLanding">
                    <HomeLanding @on-animate-end="onLandingAnimateEnd" />
                </div>
                <div class="pt-20 md:pt-0" ref="sectionWork">
                    <HomeWork class="py-10" />
                </div>
                <div class="pt-20" ref="sectionProject">
                    <HomeProject class="py-10" />
                </div>
                <div class="pt-20" ref="sectionSkills">
                    <HomeSkills class="py-10" />
                </div>
                <div class="pt-20" ref="sectionEducation">
                    <HomeEducation class="py-10" />
                </div>
                <div class="pt-20" ref="sectionLanguage">
                    <HomeLanguage class="py-10" />
                </div>
                <div class="pt-20" ref="sectionInterest">
                    <HomeInterest class="py-10" />
                </div>
            </div>
        </div>
    </div>
    <HomeMotto />
</template>

<script setup lang="ts">
import type { ResumeState } from "@/types/state"
import { animate } from "animejs"

const { locale } = useI18n()
const { t } = useI18n()

const resumeState = useState<ResumeState>("resume")

const currentSummary = computed(
    () => resumeState.value?.[locale.value]?.basics?.summary ?? "",
)

useHead({
    title: t("homePage"),
    meta: [{ name: "description", content: currentSummary }],
})

defineOgImage("Resume", {
    title: t("home.ogTitle"),
    description: currentSummary,
})

const elContainer = useTemplateRef("container")

const elSectionLanding = useTemplateRef("sectionLanding")
const elSectionWork = useTemplateRef("sectionWork")
const elSectionProject = useTemplateRef("sectionProject")
const elSectionSkills = useTemplateRef("sectionSkills")
const elSectionEducation = useTemplateRef("sectionEducation")
const elSectionLanguage = useTemplateRef("sectionLanguage")
const elSectionInterest = useTemplateRef("sectionInterest")

const sectionsForIndicator = computed(() => {
    return [
        {
            ref: elSectionLanding,
            text: t("about-me"),
        },
        {
            ref: elSectionWork,
            text: t("work-experience"),
        },
        {
            ref: elSectionProject,
            text: t("projects"),
        },
        {
            ref: elSectionSkills,
            text: t("tech-stack"),
        },
        {
            ref: elSectionEducation,
            text: t("education"),
        },
        {
            ref: elSectionLanguage,
            text: t("languages"),
        },
        {
            ref: elSectionInterest,
            text: t("interests"),
        },
    ]
})

const indicator = useTemplateRef("indicator")
function onLandingAnimateEnd() {
    if (!indicator.value) return
    animate(indicator.value, {
        opacity: 1,
        duration: 300,
        ease: "out(3)",
    })
}
</script>
