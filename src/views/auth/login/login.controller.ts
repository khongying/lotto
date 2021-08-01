import { Component, Prop, Vue } from "vue-property-decorator";
import { FormValidate } from "@/service/validate.service";
import { LoginForm } from "@/interface/auth.interface";
import { BModal } from "bootstrap-vue";

@Component
export default class LoginController extends Vue {
  @Prop() private msg!: string;

  public form = {
    email: "",
    password: "",
    rememberMe: false
  } as LoginForm;

  public show = true;
  mounted() {
    return null;
  }

  async onSubmit() {
    try {
      const forms = document.getElementsByClassName("formValidate");
      await this.$loading.loading(true);
      if (!FormValidate.validate(forms)) {
        this.$toasts.danger("กรุณาตรวจสอบข้อมูล");
        await this.$loading.loading(false);
        return;
      } else {
        await this.$auth.login(this.form);
        this.$toasts.success("เข้าสู่ระบบเรียบร้อย");
        await this.$router.push("/");
        await this.$loading.loading(false);
      }
    } catch {
      this.$toasts.warning("เข้าสู่ระบบไม่สำเร็จ");
      await this.$loading.loading(false);
    }
  }
  onReset() {
    return null;
  }
  async forgotPassword() {
    try {
      await this.$loading.loading(true);
      await this.$auth.forgotPassword(this.form.email);
      this.$toasts.success("ส่งข้อมูลเข้าไปที่อีเมล์เรียบร้อย");
      let model = this.$refs["forgot-password-modal"] as BModal;
      model.hide();
      await this.$loading.loading(false);
    } catch (e) {
      console.error("DEBUG: forgotPassword mounted ", e.message);
      await this.$loading.loading(false);
    }
  }
}
