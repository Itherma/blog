// 插件配置
module.exports = [
  // 本地插件
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#3f51b5', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  "vuepress-plugin-baidu-autopush", // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    "thirdparty-search",
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: "在MDN中搜索",
          frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
          behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: "在Runoob中搜索",
          frontUrl: "https://www.runoob.com/?s=",
        },
        {
          title: "在Vue API中搜索",
          frontUrl: "https://cn.vuejs.org/v2/api/#",
        },
        {
          title: "在Bing中搜索",
          frontUrl: "https://cn.bing.com/search?q=",
        },
        {
          title: "通过百度搜索本站的",
          frontUrl: "https://www.baidu.com/s?wd=site%3Axugaoyi.com%20",
        },
      ],
    },
  ],

  [
    "one-click-copy",
    {
      // 代码块复制按钮
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // String or Array
      copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    "vuepress-plugin-zooming", // 放大图片
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  [
    "vuepress-plugin-comment", // 评论
    {
      choosen: "gitalk",
      options: {
        clientID: "c103f5860d7069cc83de",
        clientSecret: "d9182be5ce63f6874e620a659dcbbe0b8dc8f239",
        repo: "blog-gitalk-comment", // GitHub 仓库
        owner: "sunnyxujian", // GitHub仓库所有者
        admin: ["sunnyxujian"], // 对仓库有写权限的人
        // distractionFreeMode: true, // 类似Facebook评论框的全屏遮罩效果.
        pagerDirection: "last", // 'first'正序 | 'last'倒序
        id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
        title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
        labels: ["Gitalk", "Comment"], // GitHub issue 的标签
        body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
      },
    },
  ],
  [
    "@vuepress/last-updated", // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require("dayjs"); // https://day.js.org/
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      },
    },
  ],
  ["demo-container"],
  // [
  //   'vuepress-plugin-helper-live2d', {
  //     live2d: {
  //       // 是否启用(关闭请设置为false)(default: true)
  //       enable: true,
  //       // 模型名称(default: hibiki)>>>取值请参考： miku shizuku epsilon2_1 chitose haru/01 haru/02 z16 tororo hijiki
  //       // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
  //       model: 'hibiki',
  //       display: {
  //         // position: "right", // 显示位置：left/right(default: 'right')
  //         width: 162, // 模型的长度(default: 135)
  //         height: 360, // 模型的高度(default: 300)
  //         hOffset: 30, //  水平偏移(default: 65)
  //         vOffset: -20, //  垂直偏移(default: 0)
  //       },
  //       mobile: {
  //         show: false // 是否在移动设备上显示(default: false)
  //       },
  //       react: {
  //         opacity: 0.8 // 模型透明度(default: 0.8)
  //       }
  //     }
  //   }
  // ]
  //动态彩条
  [
    "ribbon-animation",
    {
      size: 90, // 默认数据
      opacity: 0.3, //  透明度
      zIndex: -1, //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 100,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 5,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: 0,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true,
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true, // 滑动彩带
    },
  ],
];
