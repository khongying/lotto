import { Vue, Component } from "vue-property-decorator";
import { Todo } from "@/store/todo/todo.types";
import HomeIndexComponents from "@/components/home/home.index.vue";

@Component({
  components: {
    Home: HomeIndexComponents
  }
})
export default class TodoIndexComponent extends Vue {
  public listTodo = [] as Todo[];
  public text = "AAAAA";
  async mounted() {
    try {
      console.log("Todo!!!!!!!!");
      await this.$todo.getTodosAll();
      this.listTodo = this.$todo.state.todos;

      // this.listTodo.forEach(x => {
      //   console.log(x.title);
      // });
      // console.log(this.$todo.state.todos);
    } catch (e) {
      console.log(e.message);
    }
  }

  async getData(test: string) {
    console.log("พ่อ");
    console.log(test);
  }
}
