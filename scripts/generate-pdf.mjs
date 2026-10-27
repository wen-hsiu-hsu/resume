// 用 headless Chrome 把履歷頁印成 PDF，輸出到 public/
// resume-{locale}-full.pdf 是完整版，resume-{locale}.pdf 只留第 1 頁供投遞
// 需要先有正在執行的網站（預設 http://localhost:3000）
import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { PDFDocument } from "pdf-lib"

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const chromePath =
    process.env.CHROME_PATH ??
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

const pages = [
    { locale: "zh_tw", path: "/resume" },
    { locale: "en", path: "/en/resume" },
]

for (const { locale, path } of pages) {
    const output = resolve(`public/resume-${locale}-full.pdf`)
    // Chrome 的 log 很多，收進 pipe；失敗時會附在拋出的錯誤裡
    execFileSync(
        chromePath,
        [
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--no-pdf-header-footer",
            "--virtual-time-budget=15000",
            `--print-to-pdf=${output}`,
            `${baseUrl}${path}`,
        ],
        { stdio: "pipe" },
    )
    const full = await PDFDocument.load(readFileSync(output))
    const single = await PDFDocument.create()
    const [firstPage] = await single.copyPages(full, [0])
    single.addPage(firstPage)
    writeFileSync(
        resolve(`public/resume-${locale}.pdf`),
        await single.save(),
    )
    console.log(`${baseUrl}${path} -> ${output}`)
}
