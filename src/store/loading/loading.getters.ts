import { GetterTree } from "vuex";
import { RootState } from "@/interface/main.interface";
import { LoadingInitState } from "@/store/loading/loading.types";

export const LoadingGetters: GetterTree<LoadingInitState, RootState> = {
  ["LOADING"]: (state: LoadingInitState) => {
    return state;
  }
};
