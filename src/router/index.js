import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewClient from '../views/ViewClient.vue'
import ViewRoom from '../views/ViewRoom.vue'
import CreateClient from '../views/CreateClient.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/client',
    name: 'client',
    component: ViewClient
  },
  {
    path: '/rooms',
    name: 'room',
    component: ViewRoom
  },
  {
    path: '/new_client',
    name: 'createclient',
    component: CreateClient
  },
 

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
