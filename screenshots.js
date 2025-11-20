module.exports = {
    imageBaseUrl: "./static/images/websiteScreenshots",
    imageDetails: {
        imageBasePath: "./static/images",
        folderName: "websiteScreenshots",
        imageFileExtension: ".png",
    },
    pages: [
        {
            nickname: "blog",
            url: "https://hsiu.soy",
            title: "部落格 - 前端路上",
            description: "紀錄與程式、前端相關的筆記，及生活故事的簡單紀錄。",
        },
        {
            nickname: "jsDungeon",
            url: "https://wen-hsiu-hsu.github.io/hex_jsDungeon/",
            title: "作品集散地 - JS地下城",
            description:
                "集合幾個 JavaScript 的小專案，未來將整合所有程式相關作品。",
        },
        {
            nickname: "maskMap",
            url: "https://wen-hsiu-hsu.github.io/maskmap/",
            title: "口罩地圖",
            description:
                "因應 2020 年新冠肺炎&剛學 JS，所以寫了這個網站當作練習。",
        },
        {
            nickname: "reactTailwind-SignUpForm",
            url: "https://react-tailwind-sign-up-form.vercel.app/",
            title: "React x Tailwind - Sign up form",
            description:
                "My first web application developed with React.js. Submitting on Fronted Mentor.",
            links: [
                {
                    name: "Fronted Mentor",
                    url: "https://www.frontendmentor.io/solutions/react-x-tailwind-sign-up-form-jMzVVUSKr",
                },
                {
                    name: "Source code",
                    url: "https://github.com/wen-hsiu-hsu/react-tailwind-sign-up-form",
                },
            ],
        },
    ],
}
