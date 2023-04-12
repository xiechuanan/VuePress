module.exports = {
  themeConfig: {
    logo: "/assets/img/login.jpg",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "后端开发",
        ariaLabel: "后端",
        items: [
          { text: "PHP", link: "/后端/PHP/" },
          { text: "JAVA", link: "/后端/JAVA/" },
        ],
      },
      { text: "前端开发", link: "/前端/" },
      { text: "移动端开发", link: "/移动端/" },
      { text: "数据结构与算法", link: "/数据结构与算法/" },
      { text: "GitHub", link: "https://github.com/xiechuanan/VuePress" },
    ],

    sidebar: {
      "/后端/JAVA/": ['','基础'],

      // fallback
      "/": ["about"],
    },
  },
};
