import Vue from "vue";
import { Store } from "vuex";
import { TodoInitState } from "@/store/todo/todo.types";

export class TodoPlugin extends Vue {
  public namespace = "todo";
  state: TodoInitState;
  constructor(public $store: Store<any>) {
    super();
    this.state = $store.state.todo;
    return this;
  }
  getTodosAll = async () =>
    await this.$store.dispatch(`${this.namespace}/${"_getTodosAll"}`);
}
