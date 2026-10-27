# 開發說明

## 技術棧

-   **框架**：[Nuxt 3](https://nuxt.com/)、[Vue 3](https://vuejs.org/)、[TypeScript](https://www.typescriptlang.org/)
-   **UI 與樣式**：[UnoCSS](https://unocss.dev/)（`preset-wind4`）、[Radix Vue](https://www.radix-vue.com/)、[Nuxt Icon](https://nuxt.com/modules/icon)
-   **動畫與互動**：[Anime.js](https://animejs.com/)、[Splide](https://splidejs.com/)（輪播）、[VueUse](https://vueuse.org/)
-   **國際化與 SEO**：[@nuxtjs/i18n](https://i18n.nuxtjs.org/)、[nuxt-schema-org](https://nuxtseo.com/schema-org/getting-started/introduction)、[nuxt-og-image](https://nuxtseo.com/og-image/getting-started/introduction)、[@nuxtjs/sitemap](https://nuxtseo.com/sitemap/getting-started/introduction)
-   **其他**：[nuxt-gtag](https://nuxt.com/modules/gtag)（Google Analytics）、[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 開發指令

需要 Node.js 18 以上。

```bash
git clone https://github.com/wen-hsiu-hsu/resume.git
cd resume
npm install

npm run dev       # 開發伺服器，http://localhost:3000
npm run build     # 正式環境建置
npm run preview   # 本地預覽建置結果
npm run generate  # 產生靜態網站
```

## 履歷 PDF

`public/resume-{locale}-full.pdf` 是用 headless Chrome 把 `/resume`、`/en/resume` 印出來的完整版（可雙面列印），`public/resume-{locale}.pdf` 只取其第 1 頁，供網站下載與投遞；版面由頁面上的 `print:` 樣式和 `assets/index.css` 的 `@page` 決定。

GitHub Actions（`.github/workflows/resume-pdf.yml`）每天檢查一次 Gist 版本，跟 `.github/resume-pdf-gist-version` 不同就重新 build、產生 PDF 並 commit，push 之後由 Vercel 部署。手動觸發 workflow 會跳過版本檢查、直接重產。

本機重產：

```bash
npm run build
node .output/server/index.mjs   # 另開一個終端機
npm run pdf                      # 可用 BASE_URL、CHROME_PATH 覆寫預設值
```

## 專案結構

```
resume/
├── assets/              # 全域樣式檔案
├── components/          # Vue 組件
│   ├── base/           # 基礎共用組件
│   └── home/           # 首頁專用組件
├── composables/         # Vue Composition API 可複用邏輯
├── i18n/               # 國際化語系檔案
│   └── locales/        # 語系 JSON 檔案
├── layouts/            # 頁面佈局
├── pages/              # 頁面路由
│   ├── index.vue       # 首頁
│   └── resume.vue      # 履歷頁
├── plugins/            # Nuxt 插件
├── public/             # 靜態資源
├── server/             # 伺服器端程式碼
├── types/              # TypeScript 類型定義
├── app.vue             # 根組件
├── nuxt.config.ts      # Nuxt 配置檔
├── uno.config.ts       # UnoCSS 配置檔
└── package.json        # 專案依賴
```

## 設定

### 履歷資料來源

履歷資料放在 GitHub Gist，執行時透過 API 讀取。Gist ID 在 `nuxt.config.ts`：

```typescript
runtimeConfig: {
    public: {
        resume: {
            gistId: "your-gist-id-here",
        },
    },
},
```

### 語系

語系檔在 `i18n/locales/`：

-   `zh_tw.json`：繁體中文
-   `en.json`：英文

### Google Analytics

追蹤 ID 在 `nuxt.config.ts`：

```typescript
gtag: {
    id: "your-ga-id-here",
},
```

## 程式碼風格

用 ESLint 檢查、Prettier 格式化，Prettier 設定見 `.prettierrc.yaml`。
