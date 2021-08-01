import { ActionContext, ActionTree } from "vuex";
import { RootState } from "@/interface/main.interface";
import { HttpService } from "@/service/axios.service";
import { TodoInitState } from "./todo.types";

export const TodoAction: ActionTree<TodoInitState, RootState> = {
  async _getTodosAll({
    commit
  }: ActionContext<TodoInitState, RootState>): Promise<void> {
    try {
      let res = await HttpService.instance().get("/todos");
      commit("GET_ALL_TODO", res.data);
    } catch {
      throw new Error("error _getTodosAll");
    }
  }
};
