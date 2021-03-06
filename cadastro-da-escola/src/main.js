// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Header from '@/components/shared/header/Header'

Vue.config.productionTip = false
Vue.use(VueFire)

Vue.component('header-form', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

require('../node_modules/bulma/bulma.sass')
