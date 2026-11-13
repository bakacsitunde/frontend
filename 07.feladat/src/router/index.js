import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Books from '../views/BookView.vue'
import Details from '../views/BookDetailsView.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/books', component: Books },
    { path: '/books/:id', component: Details },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})
