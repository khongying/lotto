import { AuthMutations } from "@/store/auth/auth.mutations";
import { AuthenGetters } from "@/store/auth/auth.getters";
import { AuthInitState, AuthLogin, Layout } from "@/interface/auth.interface";
import { Module } from "vuex";
import { RootState } from "@/interface/main.interface";
import { AuthAction } from "@/store/auth/auth.actions";

const namespaced = true;

export const authInitState: AuthInitState = {
  auth: {} as AuthLogin,
  watch: "watch",
  loginAlready: false,
  layout: Layout.unauthorized
};

export const authState: Module<AuthInitState, RootState> = {
  namespaced,
  state: authInitState,
  actions: AuthAction,
  mutations: AuthMutations,
  getters: AuthenGetters
};
