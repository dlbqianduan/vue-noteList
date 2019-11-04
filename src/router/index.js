import Vue from 'vue'
import Router from 'vue-router'
import DefaultBank from '@/DefaultBank/DefaultBank'
import Note from '@/components/Note'
import Login from '@/components/Login'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DefaultBank',
      component: DefaultBank,
      redirect: '/note',
      children: [{
        path: '/note',
        name: 'Note',
        component: Note
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
          login: true
        }
      }]
    }
  ]
})
