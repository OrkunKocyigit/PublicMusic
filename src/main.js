import Vue from "vue";
import App from "./App.vue";
import {
  LayoutPlugin,
  CardPlugin,
  ButtonPlugin,
  EmbedPlugin,
} from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(LayoutPlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin);
Vue.use(EmbedPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
