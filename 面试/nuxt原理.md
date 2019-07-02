1. 为什么使用nuxt.js?
vue单页面应用渲染是从服务器获取所需js，在客户端将其解析生成html挂载到id为app的DOM元素上，这样会存在两个问题。
① 由于资源请求量大，造成网站首屏加载缓慢，不利于用户体验。
② 由于页面内容通过js插入，由于内容性网站来说，搜索引擎无法抓取网站内容，不利于SEO。

2. Nuxt.js介绍？
Nuxt是一个基于Vue.js的通用应用框架，预设了利用Vue.js开发服务器渲染的应用所需要的各种配置。可以将html在服务端渲染，合成完整的html文件再输出到浏览器。

3. Nuxt与Vue的区别？
① 路由：nuxt按照pages文件夹的目录结构自动生成路由；vue需在src/router/index.js手动配置路由
② 入口页面：nuxt页面入口为layouts/default.vue;vue页面入口为src/App.vue
③ webpack配置：nuxt内置webpack，允许根据服务端需求，在nuxt.config.js中的bulid属性自定义构建webpack的配置，覆盖默认配置；vue关于webpack的配置存放在bulid文件夹下

<!-- 
参考链接：https://www.jianshu.com/p/b0626ba924c9 -->