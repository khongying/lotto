import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/style/main.scss";
import "vue-select/dist/vue-select.css";
import firebase from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { ToastsPlugin } from "@/plugins/toasts.plugin";
import { AuthPlugin } from "@/plugins/auth.plugin";
import { LoadingPlugin } from "@/plugins/loading.plugin";
import { UsersPlugin } from "@/plugins/users.plugin";
import {
  faSignOutAlt,
  faBars,
  faHome,
  faEdit,
  faFolderOpen,
  faListUl,
  faHistory,
  faCog,
  faTrash,
  faTrashAlt,
  faPlus,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import LogoLayoutController from "@/layout/logo/logo.layout.vue";
import { BoxConfirmPlugin } from "@/plugins/boxConfirm.plugin";
import DefaultLayout from "./layout/default/default.layout.vue";
import { TodoPlugin } from "@/plugins/todo.plugin";

const config = {
  apiKey: "AIzaSyCTmecrRxkb-MfDn0Aa7RXfNuZlgHr3SFY",
  authDomain: "lotto-hero.firebaseapp.com",
  databaseURL:
    "https://lotto-hero-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lotto-hero",
  storageBucket: "lotto-hero.appspot.com",
  messagingSenderId: "580011272571",
  appId: "1:580011272571:web:966466043143c0824775de",
  measurementId: "G-B685HD4J6K"
};
firebase.initializeApp(config);

library.add(
  faSignOutAlt,
  faBars,
  faHome,
  faEdit,
  faFolderOpen,
  faListUl,
  faHistory,
  faCog,
  faTrash,
  faTrashAlt,
  faPlus,
  faTimesCircle
);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("DefaultLayout", DefaultLayout);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("LogoLayout", LogoLayoutController);
declare module "vue/types/vue" {
  interface Vue {
    $toasts: ToastsPlugin;
    $auth: AuthPlugin;
    $loading: LoadingPlugin;
    $boxConfirm: BoxConfirmPlugin;
    $users: UsersPlugin;
    $todo: TodoPlugin;
  }
}
(async () => {
  Vue.prototype.$toasts = new ToastsPlugin();
  Vue.prototype.$auth = new AuthPlugin(store);
  Vue.prototype.$loading = new LoadingPlugin(store);
  Vue.prototype.$boxConfirm = new BoxConfirmPlugin();
  Vue.prototype.$users = new UsersPlugin(store);
  Vue.prototype.$todo = new TodoPlugin(store);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
})();
