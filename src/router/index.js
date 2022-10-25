import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewClient from '../views/ViewClient.vue'
import ViewRoom from '../views/ViewRoom.vue'
import CreateClient from '../views/CreateClient.vue'
import EditClient from '../views/EditClient.vue'

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
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditClient,
    props: {default: true, sidebar: false}
  },
 

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
