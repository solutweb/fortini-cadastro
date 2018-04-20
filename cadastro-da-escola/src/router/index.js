import Vue from 'vue'
import Router from 'vue-router'
import RegisterForm from '@/components/RegisterForm'
import LoginForm from '@/components/Login'
import ViewForm from '@/components/ViewForm'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/cadastro'
    },
    {
      path: '/admin',
      name: 'ViewForm',
      component: ViewForm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginForm
    },
    {
      path: '/cadastro',
      name: 'RegisterForm',
      component: RegisterForm
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next({
      path: 'login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
