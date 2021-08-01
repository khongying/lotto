import { MutationTree } from "vuex";
import { TodoInitState, Todo } from "./todo.types";

export const TodoMutations: MutationTree<TodoInitState> = {
  ["GET_ALL_TODO"](state: TodoInitState, payload: Todo[]) {
    state.todos = payload;
  },
  ["GET_TODO"](state: TodoInitState, payload: Todo) {
    state.todo = payload;
  }
};
