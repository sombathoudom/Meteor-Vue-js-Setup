import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from '../imports/ui/components/About.vue'

const routes = [
  {
    path: "/about",
    name: "About",
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router