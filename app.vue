<template>
    <div class="text-neutral-600">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import "@unocss/reset/sanitize/sanitize.css"
import "@unocss/reset/sanitize/assets.css"
import "assets/index.css"

import type { ResumeState } from "@/types/state"
const resumeState = useState<ResumeState>("resume")

const { locale, locales } = useI18n()

const currentBasics = computed(
    () => (resumeState.value?.[locale.value]?.basics ?? "") as string,
)

useSeoMeta({
    ogTitle: "許文修 | Hsu Wen-Hsiu",
    ogDescription: currentBasics,
})

defineOgImage("Resume", {
    siteName: "許文修 | Hsu Wen-Hsiu | 個人網站",
    theme: "#222",
})
</script>
