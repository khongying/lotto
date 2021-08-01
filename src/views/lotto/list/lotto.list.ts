import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";
import "firebase/firestore";
import { LottoName } from "@/store/lotto/lotto.type";
import LottoDetailComponents from "@/views/lotto/detail/lotto.detail.vue";

@Component({
  components: {
    LottoDetail: LottoDetailComponents
  }
})
export default class LottoListComponents extends Vue {
  public listLotto = [] as LottoName[];
  public installment = "";

  async mounted() {
    try {
      await this.$loading.loading(true);
      await this.getListLotto();
      await this.$loading.loading(false);
      return null;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async getListLotto() {
    try {
      firebase
        .firestore()
        .collection("lotto")
        .onSnapshot(res => {
          this.listLotto = [];
          res.docs.forEach(async e => {
            await this.listLotto.push({ name: e.id });
          });
          console.log(this.listLotto);
        });
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async showDetail(installment: string) {
    try {
      this.installment = installment;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async deleteInstallment(installment: string) {
    try {
      firebase
        .firestore()
        .collection("lotto")
        .doc(installment)
        .delete()
        .then(res => {
          console.log(res);
          this.$toasts.success("ลบสำเร็จ");
        })
        .catch(e => {
          console.log(e);
          this.$toasts.success("ลบไม่สำเร็จ");
        });
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }
}
