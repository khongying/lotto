import { MutationTree } from "vuex";
import { UsersInitState, User } from "./users.types";

export const UsersMutations: MutationTree<UsersInitState> = {
  ["GET_ALL_USERS"](state: UsersInitState, payload: User[]) {
    state.users = payload;
  },
  ["GET_USER"](state: UsersInitState, payload: User) {
    state.user = payload;
  }
};
