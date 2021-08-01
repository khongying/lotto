<template>
  <DefaultLayout>
    <b-container class="line-space-y">
      <b-row>
        <b-col md="2" offset-md="10">
          <b-button variant="primary" style="margin-left: 35%" @click="$refs['modal-add-lotto'].show()"
            >เพิ่มงวด</b-button
          >
        </b-col>
      </b-row>
      <b-row style="margin-top: 20px;">
        <LottoList/>
      </b-row>
    </b-container>
    <b-modal
      ref="modal-add-lotto"
      size="md"
      title="เพิ่มงวด"
      hide-footer
      :no-close-on-backdrop="true"
    >
      <b-row>
        <b-col md="12">
          <b-form-group label="ชื่องวด">
            <b-form-input
              required
              v-model="installmentName"
              type="text"
              placeholder="ชื่องวด"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-button @click="$refs['modal-add-lotto'].hide(); addInstallment();" variant="success"
            >บันทึกข้อมูล</b-button
          >
        </b-col>
      </b-row>
    </b-modal>
  </DefaultLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthInitState } from "@/interface/auth.interface";
import firebase from "firebase/app";
import "firebase/firestore";
import LottoListComponents from "@/views/lotto/list/lotto.list.vue";

@Component({
  components: {
    LottoList: LottoListComponents
  }
})
export default class Home extends Vue {
  public auth = {} as AuthInitState;
  public installmentName = "";

  async mounted() {
    try {
      await this.$loading.loading(true);
      // await this.$toasts.danger("assdddd", "dddd");
      // await this.$users.getUsers();
      // console.log(this.$users.state.users);
      await this.$loading.loading(false);
      return null;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }

  async addInstallment() {
    try {
      if (this.installmentName) {
        await this.$loading.loading(true);
        await firebase
          .firestore()
          .collection("lotto")
          .doc(this.installmentName)
          .set({
            dataTwo: [],
            dataThree: []
          });
        this.installmentName = "";
        await this.$loading.loading(false);
        this.$toasts.success("เพิ่มข้อมูลสำเร็จ");
      } else {
        this.$toasts.warning("กรอกข้อมูล");
      }
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }
}
</script>
