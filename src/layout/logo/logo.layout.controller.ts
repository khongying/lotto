import { Component, Vue } from "vue-property-decorator";

@Component
export default class LogoLayoutController extends Vue {
  public routeName = "";
  mounted() {
    this.routeName = this.$route.name as string;
    return null;
  }
}
