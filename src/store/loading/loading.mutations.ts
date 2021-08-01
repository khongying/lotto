import { MutationTree } from "vuex";
import { LoadingInitState } from "@/store/loading/loading.types";

export const LoadingMutations: MutationTree<LoadingInitState> = {
  ["Loading"](state: LoadingInitState, payload: boolean) {
    state.loading = payload;
  }
};
