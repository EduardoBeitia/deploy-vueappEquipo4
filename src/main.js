import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyCF-8aySQFHVdRbpAYdjQ56QSedRTS3Iqg",
    authDomain: "vue-auth-e3cb3.firebaseapp.com",
    projectId: "vue-auth-e3cb3",
    storageBucket: "vue-auth-e3cb3.appspot.com",
    messagingSenderId: "1040453350635",
    appId: "1:1040453350635:web:787e6874a4b4c807203aae"
  };

firebase.initializeApp(firebaseConfig); */

createApp(App).use(router).mount('#app')
