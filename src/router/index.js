import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opt',
    component: () => import('../views/Login.vue')

  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'opt',
        component: () => import('../views/children/MarketingAgent.vue')

      },
      {
        path: '/home',
        name: 'opt',
        component: () => import('../views/children/MarketingAgent.vue')

      },
      {
        path: '/marketingagent',
        component: () => import('../views/children/MarketingAgent.vue')

      },
      {
        path: '/history',
        component: () => import('../views/children/history.vue')

      },
      {
        path:'/ticketdetails',
        component:() => import('../views/children/ticketdetails.vue')
      }
      
    
    ]
  },
  
  
]

const router = new VueRouter({
  routes,
  hashbang: false,
  mode: 'history'
})

export default router
