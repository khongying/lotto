import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase/app";
import "firebase/firestore";
import { DataThree, DataTwo, Lotto } from "@/store/lotto/lotto.type";

@Component({
  components: {}
})
export default class LottoDetailComponents extends Vue {
  @Prop({ default: () => "" as string })
  public installment!: string;

  public lotto = {} as Lotto;
  public ready = false;
  public totalPriceTwo = 0;
  public totalPriceThree = 0;

  async mounted() {
    try {
      await this.$loading.loading(true);
      await this.getLottoDetail();
      await this.$loading.loading(false);
      return null;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async getLottoDetail() {
    try {
      firebase
        .firestore()
        .collection("lotto")
        .doc(this.installment)
        .onSnapshot(res => {
          this.lotto = res.data() as Lotto;
          this.calculateTotalPriceThree();
          this.calculateTotalPriceTwo();
        });
      this.ready = true;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async addDataTwo() {
    try {
      this.lotto.dataTwo.push({} as DataTwo);
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async addDataThree() {
    try {
      this.lotto.dataThree.push({} as DataThree);
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async calculateTwo(index: number) {
    try {
      this.ready = false;
      console.log(this.lotto.dataTwo[index]);
      if (this.lotto.dataTwo[index].top) {
        if (this.lotto.dataTwo[index].lower) {
          this.lotto.dataTwo[index].totalPrice =
            Number(this.lotto.dataTwo[index].top) +
            Number(this.lotto.dataTwo[index].lower);
        } else {
          this.lotto.dataTwo[index].totalPrice = Number(
            this.lotto.dataTwo[index].top
          );
        }
      }
      this.calculateTotalPriceTwo();
      this.ready = true;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  calculateTotalPriceTwo() {
    this.totalPriceTwo = 0;
    for (let i = 0; i < this.lotto.dataTwo.length; i++) {
      this.totalPriceTwo += Number(this.lotto.dataTwo[i].totalPrice);
    }
  }

  async calculateThree(index: number) {
    try {
      this.ready = false;
      console.log(this.lotto.dataThree[index]);
      if (this.lotto.dataThree[index].favorite) {
        if (this.lotto.dataThree[index].todd) {
          this.lotto.dataThree[index].totalPrice =
            Number(this.lotto.dataThree[index].favorite) +
            Number(this.lotto.dataThree[index].todd);
          if (this.lotto.dataThree[index].lower) {
            this.lotto.dataThree[index].totalPrice =
              Number(this.lotto.dataThree[index].todd) +
              Number(this.lotto.dataThree[index].lower) +
              Number(this.lotto.dataThree[index].todd);
          }
        } else {
          this.lotto.dataThree[index].totalPrice = Number(
            this.lotto.dataThree[index].favorite
          );
        }
      }
      this.calculateTotalPriceThree();
      this.ready = true;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  calculateTotalPriceThree() {
    this.totalPriceThree = 0;
    for (let i = 0; i < this.lotto.dataThree.length; i++) {
      this.totalPriceThree += Number(this.lotto.dataThree[i].totalPrice);
    }
  }

  async saveData() {
    try {
      await this.$loading.loading(true);
      firebase
        .firestore()
        .collection("lotto")
        .doc(this.installment)
        .update(this.lotto)
        .then(res => {
          console.log(res);
          this.$loading.loading(false);
          this.$toasts.success("บันทึกข้อมูลสำเร็จ");
          this.$emit("fetchLotto", true);
        })
        .catch(e => {
          console.log(e);
          this.$loading.loading(false);
          this.$toasts.danger("บันทึกข้อมูลไม่สำเร็จ");
        });
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  deleteThree(index: number) {
    try {
      this.ready = false;
      this.lotto.dataThree.splice(index, 1);
      this.calculateTotalPriceThree();
      this.ready = true;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  deleteTwo(index: number) {
    try {
      this.ready = false;
      this.lotto.dataTwo.splice(index, 1);
      this.calculateTotalPriceTwo();
      this.ready = true;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }
}
