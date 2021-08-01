import { Component, Vue } from "vue-property-decorator";
import SidebarLayout from "@/layout/default/sidebar.layout.vue";
import NavbarLayout from "@/layout/default/navbar.layout.vue";

@Component({
  components: {
    SidebarLayout,
    NavbarLayout
  }
})
export default class DefaultLayout extends Vue {
  public isActive = false;

  async mounted() {
    await this.$loading.loading(true);
    await this.$loading.loading(false);
  }

  async onToggled() {
    this.isActive = !this.isActive;
    // some code to filter users
  }

  async LogOut() {
    await this.$auth.logout();
    await this.$router.push("/login");
  }
}
