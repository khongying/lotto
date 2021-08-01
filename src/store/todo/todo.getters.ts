import { GetterTree } from "vuex";
import { RootState } from "@/interface/main.interface";
import { TodoInitState } from "./todo.types";

export const TodoGetters: GetterTree<TodoInitState, RootState> = {
  ["EDIT_TODO"]: (state: TodoInitState) => {
    return state.todo;
  }
};
