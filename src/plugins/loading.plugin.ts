import Vue from "vue";
import { Store } from "vuex";
import { RootState } from "@/interface/main.interface";
import { LoadingInitState } from "@/store/loading/loading.types";
export class LoadingPlugin extends Vue {
  public namespace = "loading";
  public state: LoadingInitState;
  constructor(public $store: Store<RootState>) {
    super();
    this.state = $store.getters["loading/LOADING"];
    return this;
  }
  loading = (payload: boolean) =>
    this.$store.dispatch(`loading/${"_Loading"}`, payload).then();
}
