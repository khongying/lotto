import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/interface/main.interface";
import { authState } from "@/store/auth/auth.index";
import { loadingState } from "@/store/loading/loading.index";
import { usersState } from "@/store/users/users.index";
import { todoState } from "@/store/todo/todo.index";
Vue.use(Vuex);
const options: StoreOptions<RootState> = {
  state: {
    loading: false
  },
  mutations: {},
  actions: {},
  modules: {
    auth: authState,
    loading: loadingState,
    users: usersState,
    todo: todoState
  }
};
export default new Vuex.Store(options);
