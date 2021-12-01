import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import globalFn from "@/function"; // 自定义全局方法
// 按需引入 ElementUI
// import element from './element'

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'; // 自定义主题(使用官网在线主题编辑器生成)


Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(globalFn)

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Meta`;
  // const token = localStorage.token
  next()
  // if (!token && to.path !== '/login' && to.path !== '/promote') {
  //     next('/login');
  //     localStorage.clear();
  // } else if (to.meta.permission) {
  //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //     // role === 'admin' ? next() : next('/403');
  // } else {
  //     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
  //     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
  //         Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用谷歌浏览器查看', '浏览器不兼容通知', {
  //             confirmButtonText: '确定'
  //         });
  //     } else {
  //         next();
  //     }
  // }
});

const i18n = new VueI18n({
  locale: 'en_US',
  messages: {
    'zh_CN': require('./assets/lang/cn.js'),
    'en_US': require('./assets/lang/en.js'),
    'zh_HK': require('./assets/lang/hk.js'),
    'ja_JP': require('./assets/lang/jp.js'),
    'ko_KR': require('./assets/lang/ko.js'),
    'de_DE': require('./assets/lang/de.js'),
    'fr_FR': require('./assets/lang/fr.js'),
    'it_IT': require('./assets/lang/it.js'),
    'es_ES': require('./assets/lang/es.js'),
  },
  silentTranslationWarn: true
});

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
