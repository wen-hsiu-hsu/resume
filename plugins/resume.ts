import type { ResumeState } from "@/types/state"
import type { Icon, Resume } from "@/types/resume"

export default defineNuxtPlugin(async (nuxtApp) => {
    const iconState = useState<Icon>("icon", () => ({}))

    const resumeState = useState<ResumeState>("resume", () => ({
        en: null,
        zh_tw: null,
    }))

    const { data, error } = await useAsyncData(
        "resume",
        async () => {
            const [en, zh_tw, icon] = await Promise.all([
                $fetch<Resume>("/api/resume-data/resume_en.json"),
                $fetch<Resume>("/api/resume-data/resume_zh_TW.json"),
                $fetch<Icon>("/api/resume-data/icon.json"),
            ])
            return { en, zh_tw, icon }
        },
        {
            getCachedData: (key) => {
                const data = nuxtApp.isHydrating
                    ? nuxtApp.payload.data[key]
                    : nuxtApp.static.data[key]

                if (!data) {
                    return
                }

                return data
            },
        },
    )

    if (data.value) {
        resumeState.value.en = data.value.en
        resumeState.value.zh_tw = data.value.zh_tw
        iconState.value = data.value.icon
    } else {
        console.error("Failed to fetch resume data.", error)
    }
})
