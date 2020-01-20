import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Button,
  Steps,
  Step
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/index.scss';
import {
  BootstrapVue,
  IconsPlugin,
  CarouselPlugin
} from 'bootstrap-vue';

Vue.component(Button.name, Button);
Vue.component(Steps.name, Steps);
Vue.component(Step.name, Step);
Vue.use(BootstrapVue);
Vue.use(CarouselPlugin);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");