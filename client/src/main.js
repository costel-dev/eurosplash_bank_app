import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from "axios";

//Vuex store
import store from "./store";

Vue.config.productionTip = false

Vue.use(vuetify)

// Setup axios to be available globally through Vue
Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8081/api'
})

// Vue instance
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
