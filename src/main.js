// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from '@/mock'
Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  const needLogin = to.matched.some(route => route.meta && route.meta.login)
  if (needLogin) {
    const islogin = document.cookie.includes('login=true')
    if (islogin) {
      next()
      return
    }
    next('/login')
    return
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Mock,
  store,
  components: { App },
  template: '<App/>'
})
