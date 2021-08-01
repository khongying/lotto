import { ActionContext, ActionTree } from "vuex";
import { LoadingInitState } from "@/store/loading/loading.types";
import { RootState } from "@/interface/main.interface";

export const LoadingAction: ActionTree<LoadingInitState, RootState> = {
  async _Loading(
    { commit }: ActionContext<LoadingInitState, RootState>,
    payload: boolean
  ): Promise<void> {
    try {
      if (payload) {
        commit("Loading", true);
      } else {
        commit("Loading", false);
      }
    } catch (e) {
      console.error("DEBUG: _login ", e);
    }
  }
};
