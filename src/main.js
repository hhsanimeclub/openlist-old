import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPlay,
  faBookOpen,
  faUserTie,
  faStar,
  faUserAstronaut,
  faThumbsUp,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPlay,
  faBookOpen,
  faUserTie,
  faStar,
  faUserAstronaut,
  faThumbsUp,
  faChevronRight
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
