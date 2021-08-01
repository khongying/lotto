import { Module } from "vuex";
import { RootState } from "@/interface/main.interface";
import { UsersInitState, User } from "./users.types";
import { UsersAction } from "./users.actions";
import { UsersMutations } from "./users.mutations";
import { UsersGetters } from "./users.getters";

const namespaced = true;

export const usersInitState: UsersInitState = {
  users: [] as User[],
  user: {} as User,
  totalUsers: 0
};

export const usersState: Module<UsersInitState, RootState> = {
  namespaced,
  state: usersInitState,
  actions: UsersAction,
  mutations: UsersMutations,
  getters: UsersGetters
};
