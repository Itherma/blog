/*
 * @Description: 配置文件
 * @Author: xujian
 * @Date: 2021-06-21 16:55:41
 */

const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Douglas's blog",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  base: '/blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  repo: 'Itherma/blog', // Github仓库地址 https://github.com/Itherma/blog.git
  docsDir: 'docs', // .md文件放在了docs目录下
  editLinks: true, // 启用编辑链接
  editLinkText: '在github上编辑',

}
