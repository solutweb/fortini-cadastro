import Vue from 'vue'
import Router from 'vue-router'
import RegisterForm from '@/components/RegisterForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RegisterForm',
      component: RegisterForm
    }
  ]
})
