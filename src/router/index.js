import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () =>
    import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LogIn.vue"),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUp.vue"),
  },
 
  {
    path: '/products',
    name: 'Products',
    component: () =>
      import(/* webpackChunkName: "produucts" */ "../views/Products.vue"),
  },
  ,
 
  {
    path: '/updateprofile',
    name: 'Updateprofile',
    component: () =>
      import(/* webpackChunkName: "produucts" */ "../views/Updateprofile.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
