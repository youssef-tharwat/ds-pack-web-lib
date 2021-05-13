import Vue from "vue";
import App from "./App.vue";
import download from "./utils/download";

Vue.config.productionTip = false;

download();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
