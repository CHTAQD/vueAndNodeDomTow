import Vue from 'vue'
import Router from 'vue-router'

import In from '@/components/index'

import List from '@/components/list'

import My from '@/components/my'

import Home from '@/components/home'

import Xqing from '@/components/xiangqing'
import { request } from 'http';
// import Head from '@/components/Head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:In ,//懒加载1() => import('@/components/index')
      // redirect:'/Home',
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: { requiresAuth: true },//是否缓存 定义路由元信息
          children: [

          ]
        },
        {
          path: '/list',
          name: 'list',
          component:()=>import('@/components/list'),//懒加载
          meta: { requiresAuth: true },

        },
        {
          path: '/Cat',
          name: 'Cat',
          component:()=>import('@/components/Car'),//懒加载
          meta: { requiresAuth: true },

        },
        {
          path: '/My',
          name: 'my',
          component: My,
          ios: "iconfont icon-gouwuche"

        },
        {
          path: '/Xqing/:id',
          name: 'Xqing',
          component: Xqing,
        },
        {
          path: '/dome',
          name: 'domeVuex',
          component:()=>import('@/components/vuexdome'),//懒加载
          meta: { requiresAuth: true },

        },
        // {
        //   path:'/*',
        //   redirect:'/' 如果输入不是路由就默认重定向到根‘/’
        // }


      ]
    },

  ]
})
