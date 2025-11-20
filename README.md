# 許文修 | Wen-Hsiu Hsu - 個人網站

> 一個現代化的個人介紹與履歷展示網站

🌐 **線上網站**: [https://resume.hsiu.soy](https://resume.hsiu.soy)

## 📖 專案簡介

這是我的個人網站，展示我的工作經歷、技能、專案和興趣。網站採用現代化的前端技術架構，提供流暢的使用者體驗和完整的 SEO 優化。

## ✨ 功能特色

-   🎨 **響應式設計** - 完美支援桌面、平板和手機裝置
-   🌍 **雙語支援** - 提供繁體中文和英文兩種語言
-   🎬 **動態動畫** - 使用 Anime.js 實現流暢的滾動動畫效果
-   📄 **PDF 下載** - 支援將履歷匯出為 PDF 格式
-   🔍 **SEO 優化** - 完整的 SEO 設定，包含 sitemap、schema.org 和 og-image
-   📊 **資料動態載入** - 從 GitHub Gist 動態讀取履歷資料
-   📈 **Google Analytics** - 整合流量分析功能
-   🎯 **導航指示器** - 側邊欄顯示當前瀏覽章節

## 🛠️ 技術棧

### 核心框架

-   **[Nuxt 3](https://nuxt.com/)** - Vue.js 的全端框架
-   **[Vue 3](https://vuejs.org/)** - 漸進式 JavaScript 框架
-   **[TypeScript](https://www.typescriptlang.org/)** - JavaScript 的超集，提供型別安全

### UI 與樣式

-   **[UnoCSS](https://unocss.dev/)** - 即時的原子化 CSS 引擎（使用 Tailwind 預設）
-   **[Radix Vue](https://www.radix-vue.com/)** - 無樣式的可訪問性 UI 組件
-   **[Nuxt Icon](https://nuxt.com/modules/icon)** - 圖標系統

### 動畫與互動

-   **[Anime.js](https://animejs.com/)** - 輕量級的 JavaScript 動畫庫
-   **[Splide](https://splidejs.com/)** - 輕量且靈活的輪播元件
-   **[VueUse](https://vueuse.org/)** - Vue Composition API 工具集

### 國際化與 SEO

-   **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** - Nuxt 的國際化模組
-   **[nuxt-schema-org](https://nuxtseo.com/schema-org/getting-started/introduction)** - Schema.org 結構化資料
-   **[nuxt-og-image](https://nuxtseo.com/og-image/getting-started/introduction)** - 動態 Open Graph 圖片
-   **[@nuxtjs/sitemap](https://nuxtseo.com/sitemap/getting-started/introduction)** - 自動產生 sitemap

### 其他工具

-   **[nuxt-gtag](https://nuxt.com/modules/gtag)** - Google Analytics 整合
-   **[html-to-image](https://www.npmjs.com/package/html-to-image)** & **[jspdf](https://www.npmjs.com/package/jspdf)** - PDF 匯出功能
-   **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** - 程式碼規範與格式化

## 🚀 快速開始

### 環境需求

-   Node.js 18.x 或以上版本
-   npm、pnpm、yarn 或 bun 其中一個套件管理工具

### 安裝

克隆專案並安裝依賴：

```bash
# 克隆專案
git clone https://github.com/wen-hsiu-hsu/resume.git
cd resume

# 安裝依賴（選擇其中一個）
npm install
# 或
pnpm install
# 或
yarn install
# 或
bun install
```

### 開發

啟動開發伺服器（預設為 `http://localhost:3000`）：

```bash
npm run dev
# 或
pnpm dev
# 或
yarn dev
# 或
bun run dev
```

### 建置

建置專案以供生產環境使用：

```bash
npm run build
# 或
pnpm build
# 或
yarn build
# 或
bun run build
```

### 預覽

在本地預覽生產環境建置：

```bash
npm run preview
# 或
pnpm preview
# 或
yarn preview
# 或
bun run preview
```

## 📁 專案結構

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

## ⚙️ 配置說明

### 履歷資料來源

履歷資料儲存在 GitHub Gist 中，透過 API 動態讀取。你可以在 `nuxt.config.ts` 中修改 Gist ID：

```typescript
runtimeConfig: {
    public: {
        resume: {
            gistId: "your-gist-id-here",
        },
    },
},
```

### 雙語設定

網站支援中英文雙語，語系檔案位於 `i18n/locales/` 目錄下：

-   `zh_tw.json` - 繁體中文
-   `en.json` - 英文

### Google Analytics

如需修改 Google Analytics 追蹤 ID，請編輯 `nuxt.config.ts`：

```typescript
gtag: {
    id: "your-ga-id-here",
},
```

## 🎨 開發規範

### 程式碼風格

本專案使用 ESLint 和 Prettier 確保程式碼品質和一致性：

-   **ESLint**: 程式碼檢查和規範
-   **Prettier**: 程式碼格式化

Prettier 設定詳見 `.prettierrc.yaml`。

## 📮 聯絡方式

-   **Email**: kevin.hsu.hws@gmail.com
-   **GitHub**: [@wen-hsiu-hsu](https://github.com/wen-hsiu-hsu)
-   **Threads**: [@hsiu.soy](https://www.threads.net/@hsiu.soy)
-   **Website**: [https://resume.hsiu.soy](https://resume.hsiu.soy)

## 📄 授權

此專案為個人網站專案，如有任何問題或建議，歡迎透過上述聯絡方式與我聯繫。

---

⭐ 如果你喜歡這個專案，歡迎給個星星！
