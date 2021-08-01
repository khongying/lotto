import { Module } from "vuex";
import { RootState } from "@/interface/main.interface";
import { TodoInitState, Todo } from "./todo.types";
import { TodoAction } from "./todo.actions";
import { TodoMutations } from "./todo.mutations";
import { TodoGetters } from "./todo.getters";

const namespaced = true;

export const todoInitState: TodoInitState = {
  todos: [] as Todo[],
  todo: {} as Todo,
  totalTodos: 0
};

export const todoState: Module<TodoInitState, RootState> = {
  namespaced,
  state: todoInitState,
  actions: TodoAction,
  mutations: TodoMutations,
  getters: TodoGetters
};
