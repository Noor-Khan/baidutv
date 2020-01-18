import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/scss/index.scss'
import {
  BootstrapVue,
  IconsPlugin,
  CarouselPlugin
} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CarouselPlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");