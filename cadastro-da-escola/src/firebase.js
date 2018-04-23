import firebase from 'firebase'

let app = firebase.initializeApp({
  apiKey: 'AIzaSyA_vU1K13d8EMpahiRPkYguhA3YOeCZcDc',
  authDomain: 'cadastro-da-escola.firebaseapp.com',
  databaseURL: 'https://cadastro-da-escola.firebaseio.com',
  projectId: 'cadastro-da-escola',
  storageBucket: 'cadastro-da-escola.appspot.com',
  messagingSenderId: '873838200049'
})

export const db = app.database()
export const schoolRegistration = db.ref('inscription')
export const firebaseApp = app
