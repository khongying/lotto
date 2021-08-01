import { GetterTree } from "vuex";
import { RootState } from "@/interface/main.interface";
import { UsersInitState } from "./users.types";

export const UsersGetters: GetterTree<UsersInitState, RootState> = {
  ["EDIT_USER"]: (state: UsersInitState) => {
    return state.user;
  }
};
