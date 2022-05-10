// nav
module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端基础", // 目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    link: "/basic/",
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: "JavaScript",
        link: "/pages/0f6a0ac99b6",
        // link: "/basic/javascript/",
      },
      {
        text: "CSS",
        link: "/pages/c8f128/",
        // link: "/basic/css/",
      },
      {
        text: "HTML和浏览器",
        link: "/pages/html",
        // link: "/basic/html/",
      },
    ],
  },
  {
    text: "框架",
    link: "/framework/",
    items: [
      { text: "Vue", link: "/pages/vue/" },
      { text: "Vue3", link: "/pages/vue3/" },
      { text: "React", link: "/pages/react/" },
    ],
  },
  {
    text: "工程化",
    link: "/engineering/",
    items: [
      { text: "基础知识", link: "/pages/modules/" },
      { text: "webpack", link: "/pages/webpack/" },
    ],
  },
  {
    text: "前端进阶",
    link: "/advanced/",
    items: [
      { text: "Nodejs", link: "/pages/nodejs/" },
      { text: "网络", link: "/pages/net/" },
      { text: "TypeScript", link: "/pages/typescript/" },
      { text: "架构设计", link: "/pages/codedesign/" },
      { text: "性能优化", link: "/pages/optimize/" },
      { text: "数据结构和算法", link: "/pages/algorithms/" },
    ],
  },
  {
    text: "学习笔记",
    link: "/notes/",
    items: [
      { text: "JavaScript教程 笔记", link: "/notes/javascript/" },
      { text: "ES6 教程 笔记", link: "/notes/es6/" },
      { text: "TypeScript 从零实现 axios", link: "/notes/typescript-axios/" },
      { text: "Git学习 笔记", link: "/notes/git/" },
      { text: "渲染器原理", link: "/notes/render/" },
      { text: "TypeScript 笔记", link: "/notes/typeScript/" },
    ],
  },
  {
    text: "其他技术",
    link: "/technology/",
    items: [
      { text: "技术文档", link: "/pages/techDocs/" },
      { text: "GitHub技巧", link: "/pages/githubUseage/" },
      { text: "Nodejs", link: "/pages/nodejs/" },
    ],
  },
  {
    text: "收藏",
    link: "/pages/techSite/",
    items: [
      { text: "网站", link: "/pages/techSite/" },
      { text: "资源", link: "/pages/usefulSite/" },
      { text: "Vue资源", link: "/pages/vueSource/" },
    ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  { text: "关于", link: "/about/" },
];
