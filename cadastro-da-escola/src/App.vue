<template>
  <div id="app">
    <header-form></header-form>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyA_vU1K13d8EMpahiRPkYguhA3YOeCZcDc',
  authDomain: 'cadastro-da-escola.firebaseapp.com',
  databaseURL: 'https://cadastro-da-escola.firebaseio.com',
  projectId: 'cadastro-da-escola',
  storageBucket: 'cadastro-da-escola.appspot.com',
  messagingSenderId: '873838200049'
}

let app = firebase.initializeApp(config)
let db = app.database()

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
