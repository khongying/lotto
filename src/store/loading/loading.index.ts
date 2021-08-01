import { LoadingInitState } from "./loading.types";
import { LoadingAction } from "./loading.actions";
import { LoadingMutations } from "./loading.mutations";
import { Module } from "vuex";
import { RootState } from "@/interface/main.interface";
import { LoadingGetters } from "@/store/loading/loading.getters";

const namespaced = true;

export const loadingInitState: LoadingInitState = {
  loading: false,
  namespace: "loading"
};

export const loadingState: Module<LoadingInitState, RootState> = {
  namespaced,
  state: loadingInitState,
  actions: LoadingAction,
  mutations: LoadingMutations,
  getters: LoadingGetters
};
