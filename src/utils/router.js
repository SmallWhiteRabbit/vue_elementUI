import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component:Index,
    meta: { title: 'ElementUI',hidden:false},
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/elementUI/table.vue'),
        meta: { title: 'table',hidden:false }
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/elementUI/menu.vue'),
        meta: { title: 'menu',hidden:false }
      },
    ]
  },
  {
    path: '/html',
    component:Index,
    meta: { title: 'HTML',hidden:false},
    children: [
      {
        path: '/iframe',
        name: 'iframe',
        component: () => import('../views/HTML/iframe.vue'),
        meta: { title: 'iframe',hidden:false }
      },
    ]
  }]
})
export default router