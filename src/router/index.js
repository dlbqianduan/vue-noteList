import Vue from 'vue'
import Router from 'vue-router'
import DefaultBank from '@/DefaultBank/DefaultBank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultBank',
      component: DefaultBank
    }
  ]
})
