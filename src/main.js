import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import Vuelidate from 'vuelidate';
import './assets/scss/index.scss';
import VueAuthenticate from 'vue-authenticate';
import FBSignInButton from 'vue-facebook-signin-button';
import GAuth from 'vue-google-oauth2';
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:9000', // Your API domain

  providers: {
    facebook: {
      clientId: '392844361649439',
      redirectUri: 'http://localhost:8080' // Your client app URL
    }
  }
})
const gauthOption = {
  clientId: '170710916047-43pvrsisq2ht0401tv619irf6vsgqs81.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'select_account',
  // fetch_basic_profile: false
}
Vue.use(FBSignInButton)
Vue.use(GAuth, gauthOption)
Vue.config.productionTip = false
Vue.use(Vuelidate)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')