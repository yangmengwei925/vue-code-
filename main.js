import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import store from "./store/index";
import "mint-ui/lib/style.css";
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.use(iView);

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
