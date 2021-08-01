import { Component, Vue } from "vue-property-decorator";

@Component
export default class SidebarLayout extends Vue {
  mounted() {
    return null;
  }

  getFullName() {
    this.$toasts.success("done");
    return "nung pothi";
  }
}
