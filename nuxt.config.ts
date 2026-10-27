import { definePerson } from "nuxt-schema-org/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    app: {
        head: {
            titleTemplate: "%s | 許文修 | Wen-Hsiu Hsu",
            meta: [
                {
                    name: "google-site-verification",
                    content: "b7jPwXcxv5GfnaGK-ps33xfUDwysUMPjpuXPF4gILDM",
                },
            ],
            link: [
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
    },

    fonts: {
        families: [{ name: "Noto Serif TC", weights: [400], global: true }],
    },

    site: {
        url: "https://resume.hsiu.soy",
        name: "許文修 | Wen-Hsiu Hsu",
    },

    schemaOrg: {
        identity: definePerson({
            name: "許文修 | Wen-Hsiu Hsu",
            image: "/avatar.jpg",
            jobTitle: "前端工程師 | Frontend Engineer",
            email: "kevin.hsu.hws@gmail.com",
            description:
                "我是一名專注於前端技術的工程師，擅長使用 Vue.js 和 Tailwind CSS 開發高效能的響應式網站。具備設計背景，對美感與用戶體驗有深入理解，能在開發與設計間有效協作。曾參與企業平台、電商網站與後台管理系統的開發，具備 API 串接、程式碼重構及效能優化的實作經驗。熱愛學習新技術並積極參與開源社群，期望持續挑戰自我並創造更具價值的產品。",
            url: "resume.hsiu.soy",
            sameAs: [
                "https://www.threads.net/@hsiu.soy",
                "https://github.com/wen-hsiu-hsu",
            ],
        }),
    },

    runtimeConfig: {
        public: {
            resume: {
                gistId: "b5a572372312fe91f0f36721e9d15007",
            },
        },
    },

    i18n: {
        defaultLocale: "zh_tw",
        locales: [
            { code: "en", name: "English", file: "en.json" },
            { code: "zh_tw", name: "中文", file: "zh_tw.json" },
        ],
    },

    routeRules: {
        "/api/github/**": { proxy: "https://api.github.com/**", swr: 60 * 10 },
    },

    gtag: {
        id: "G-X0H1DGJMM1",
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/scripts",
        "@unocss/nuxt",
        "@nuxtjs/i18n",
        "radix-vue/nuxt",
        "nuxt-gtag",
        "@nuxtjs/sitemap",
        "nuxt-schema-org",
        "nuxt-og-image",
    ],
})
