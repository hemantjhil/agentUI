import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyASX-3VlqCSClXRevZuNb-ebEV-_WsjH3Q",
    authDomain: "crmproject-98ed2.firebaseapp.com",
    databaseURL: "https://crmproject-98ed2.firebaseio.com",
    projectId: "crmproject-98ed2",
    storageBucket: "crmproject-98ed2.appspot.com",
    messagingSenderId: "1042682746483",
    appId: "1:1042682746483:web:d55703e65dd8c46ef2bc06",
    measurementId: "G-X85CCNT5P4"
})
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
