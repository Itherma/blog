// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', // 目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/javaScript/' },
          { text: 'Vue', link: '/pages/vue/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》笔记', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          { text: '《TypeScript 从零实现 axios》', ink: '/note/typescript-axios/', },
          { text: '《Git》学习笔记', link: '/note/git/' },
          { text: 'TypeScript笔记', link: '/pages/typeScript/' },
          { text: 'JS设计模式总结笔记', link: '/pages/codeDesign/' },
          { text: '《渲染器原理》', link: '/note/render/' },
        ],
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/html/' },
      { text: 'CSS', link: '/pages/style/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/techDocs/' },
      { text: 'GitHub技巧', link: '/pages/githubUseage/' },
      { text: 'Nodejs', link: '/pages/nodejs/' },
    ],
  },
  // {
  //   text: '更多',
  //   link: '/more/',
  //   items: [
  //     { text: '学习', link: '/pages/learningMethod/' },
  //     { text: '面试', link: '/pages/interview/' },
  //     { text: '心情杂货', link: '/pages/feelings/' },
  //     { text: '实用技巧', link: '/pages/practicalSkills/' },
  //     // { text: '友情链接', link: '/friends/' },
  //   ],
  // },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/techSite/',
    items: [
      { text: '网站', link: '/pages/techSite/' },
      { text: '资源', link: '/pages/usefulSite/' },
      { text: 'Vue资源', link: '/pages/vueSource/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
