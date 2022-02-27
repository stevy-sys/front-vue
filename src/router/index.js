import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Authentification from '../views/Authentification.vue'
import Chat from '../views/Chat.vue'
import Home from '../views/Home.vue'
// import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Authentification,
    meta:{
      isAuth:false,
    }
  },
  //  {
  //   path: '/register',
  //   name: 'register',
  //   component: Register,
  //   meta:{
  //     isAuth:false,
  //   }
  // },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView,
    meta:{
      isAuth:true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      isAuth:true
    }
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat,
    meta:{
      isAuth:true
    }
  },
  {
    path: '*',
    name: 'login2',
    component: Authentification,
    meta:{
      isAuth:false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem('auth')
  if (to.meta.isAuth) {
    if (!token) {
     next('/')
    }
  }
  
  if ((to.path == '/' || to.path == '/register' ) && token) {
    next('/Home')
  }

  next()
})

export default router
