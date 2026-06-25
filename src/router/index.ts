import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Newsletter from '@/views/Newsletter.vue'
import Directors from '@/views/Directors.vue'
import Activities from '@/views/Activities.vue'
import Videos from '@/views/Videos.vue'
import Apply from '@/views/Apply.vue'
import ActivityDetail from '@/views/ActivityDetail.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: Newsletter
  },
  {
    path: '/directors',
    name: 'Directors',
    component: Directors
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/activities/:date',
    name: 'ActivityDetail',
    component: ActivityDetail
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
