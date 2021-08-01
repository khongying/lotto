import { Component, Vue } from "vue-property-decorator";
import { AuthInitState } from "@/interface/auth.interface";
import LoadingVue from "@/components/loading/LoadingPage.vue";
import { LoadingInitState } from "@/store/loading/loading.types";

@Component({
  components: {
    Loading: LoadingVue
  }
})
export default class AppController extends Vue {
  public auth = {} as AuthInitState;
  public loading = {} as LoadingInitState;

  mounted() {
    this.auth = this.$auth.state;
    this.loading = this.$loading.state;
    return null;
  }
}
