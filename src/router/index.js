import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 登录页面
import Login from '../components/Login.vue'
import Test from '../components/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{
		path:'/login',
		component: Login
	}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('token')
  // if (to.path === '/login') return next();
  // if (!token) {
  //   return next('/login')
  // }
  next()
})

export default router
