import { ActionContext, ActionTree } from "vuex";
import { RootState } from "@/interface/main.interface";
import { HttpService } from "@/service/axios.service";
import { UsersInitState } from "./users.types";

export const UsersAction: ActionTree<UsersInitState, RootState> = {
  async _getUsersAll({
    commit
  }: ActionContext<UsersInitState, RootState>): Promise<void> {
    try {
      let res = await HttpService.instance().get("/users");
      commit("GET_ALL_USERS", res.data);
    } catch {
      throw new Error("forgot password fail");
    }
  }

  // async _GetUsers(
  //   { commit }: ActionContext<LoadingInitState, RootState>,
  //   payload: boolean
  // ): Promise<void> {
  //   try {
  //     if (payload) {
  //       commit("Loading", true);
  //     } else {
  //       commit("Loading", false);
  //     }
  //   } catch (e) {
  //     console.error("DEBUG: _login ", e);
  //   }
  // }
};
