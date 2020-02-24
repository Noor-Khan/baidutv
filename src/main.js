import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import Vuelidate from 'vuelidate';
import './assets/scss/index.scss';
import GAuth from 'vue-google-oauth2';
const gauthOption = {
  clientId: '170710916047-43pvrsisq2ht0401tv619irf6vsgqs81.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'select_account',
}
Vue.use(GAuth, gauthOption)
Vue.config.productionTip = false
Vue.use(Vuelidate)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')