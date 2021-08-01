import { UsersInitState } from "@/store/users/users.types";
import Vue from "vue";
import { Store } from "vuex";

export class UsersPlugin extends Vue {
  public namespace = "users";
  state: UsersInitState;
  constructor(public $store: Store<any>) {
    super();
    this.state = $store.state.users;
    return this;
  }
  getUsers = async () =>
    await this.$store.dispatch(`${this.namespace}/${"_getUsersAll"}`);
}
