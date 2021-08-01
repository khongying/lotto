import { GetterTree } from "vuex";
import { AuthInitState } from "@/interface/auth.interface";
import { RootState } from "@/interface/main.interface";
import { AuthEnum } from "@/store/auth/auth.enum";

export const AuthenGetters: GetterTree<AuthInitState, RootState> = {
  ["AUTH_GET_AUTHORIZATION"]: () => {
    return JSON.parse(localStorage.getItem(AuthEnum.Auth) as string);
  },
  ["AUTH"]: (state: AuthInitState) => {
    return state;
  }
};
