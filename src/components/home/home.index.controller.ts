import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class HomeIndexComponents extends Vue {
  @Prop({ default: () => "" as string })
  public textData!: string;

  public test = "";

  async mounted() {
    try {
      await this.$loading.loading(true);
      this.test = this.textData;
      this.test = "99999999999";
      console.log("ลูก", this.textData);
      this.$emit("myEvent", this.test);
      await this.$loading.loading(false);
    } catch (e) {
      console.error("DEBUG:  mounted ", e.message);
      await this.$loading.loading(false);
    }
  }
}
