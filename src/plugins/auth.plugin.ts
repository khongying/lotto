import Vue from "vue";
import { RootState } from "@/interface/main.interface";
import { AuthInitState, Layout, LoginForm } from "@/interface/auth.interface";
import { Store } from "vuex";
import { AuthEnum } from "@/store/auth/auth.enum";

export class AuthPlugin extends Vue {
  public namespace = "auth";
  public state: AuthInitState;

  constructor(public $store: Store<RootState>) {
    super();
    this.state = $store.getters["auth/AUTH"];
    return this;
  }

  login = async (payload: LoginForm) =>
    this.$store.dispatch(`${this.namespace}/${"_LoginMember"}`, payload);
  forgotPassword = async (payload: string) =>
    this.$store.dispatch(`${this.namespace}/${"_ForgotPassword"}`, payload);
  logout = async () => {
    localStorage.removeItem(AuthEnum.Auth);
    this.$store.commit(`${this.namespace}/${"MAIN_LOGIN_ALREADY"}`, false);
    this.$store.commit(
      `${this.namespace}/${"MAIN_LAYOUT"}`,
      Layout.unauthorized
    );
  };
}
