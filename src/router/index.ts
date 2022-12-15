import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/account'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/account'
      },
      {
        path: 'account',
        component: () => import('@/views/TabAccount.vue')
      },
      {
        path: 'communities',
        component: () => import('@/views/TabCommunities.vue')
      },
      {
        path: 'votes',
        component: () => import('@/views/TabVotes.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
