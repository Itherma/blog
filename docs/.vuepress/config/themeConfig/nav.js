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
        items: [{ text: "JavaScript", link: "/pages/javaScript/" }],
      },
      {
        text: "CSS",
        items: [{ text: "CSS", link: "/pages/javaScript/" }],
      },
      {
        text: "HTML和浏览器",
        items: [{ text: "HTML和浏览器", link: "/pages/javaScript/" }],
      },
    ],
  },
  {
    text: "框架",
    link: "/framework/",
    items: [
      { text: "Vue", link: "/pages/Vue/" },
      { text: "Vue3", link: "/pages/Vue3/" },
      { text: "React", link: "/pages/React/" },
    ],
  },
  {
    text: "工程化",
    link: "/engineering/",
    items: [
      { text: "技术文档", link: "/pages/techDocs/" },
      { text: "GitHub技巧", link: "/pages/githubUseage/" },
      { text: "Nodejs", link: "/pages/nodejs/" },
    ],
  },
  {
    text: "前端进阶",
    link: "/advanced/",
    items: [
      { text: "技术文档", link: "/pages/techDocs/" },
      { text: "GitHub技巧", link: "/pages/githubUseage/" },
      { text: "Nodejs", link: "/pages/nodejs/" },
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
