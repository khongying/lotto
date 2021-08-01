import { MutationTree } from "vuex";
import { AuthInitState, AuthLogin, Layout } from "@/interface/auth.interface";

export const AuthMutations: MutationTree<AuthInitState> = {
  ["MAIN_LOGIN"](state: AuthInitState, payload: AuthLogin) {
    state.auth = payload;
  },
  ["MAIN_LOGIN_FAIL"](state: AuthInitState, payload: string) {
    state.watch = payload;
  },
  ["MAIN_LOGIN_ALREADY"](state: AuthInitState) {
    state.loginAlready = true;
  },
  ["MAIN_LAYOUT"](state: AuthInitState, payload: Layout) {
    state.layout = payload;
  }
};
