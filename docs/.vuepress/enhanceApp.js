import vue from 'vue/dist/vue.esm.browser'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import Avuex from '../../avuex/index'
// import '../../avuex/css/index.css' // => 缺少一些方法  fetch  scss的变量宏等等

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  console.log(Vue,options,router,siteData);
  // Vue.use(ElementUI)
  // Vue.use(Avuex)
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
}
