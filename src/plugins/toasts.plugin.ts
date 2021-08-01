import Vue from "vue";
import { BvToastOptions } from "bootstrap-vue/src/components/toast";

export interface ToastsMsg extends BvToastOptions {
  variant: "default" | "secondary" | "danger" | "warning" | "success" | "info";
}

export class ToastsPlugin extends Vue {
  danger(msg: string, title?: string) {
    // you can do this
    // console.log("DEBUG: this  ", this.$toasts.default("default"));

    if (!title) {
      title = "ไม่สำเร็จ";
    }
    this.default(msg, { variant: "danger", title } as ToastsMsg);
  }

  success(msg: string, title?: string) {
    // you can do this
    // console.log("DEBUG: this  ", this.$toasts.default("default"));

    if (!title) {
      title = "สำเร็จ";
    }
    this.default(msg, { variant: "success", title } as ToastsMsg);
  }

  warning(msg: string, title?: string) {
    // you can do this
    // console.log("DEBUG: this  ", this.$toasts.default("default"));

    if (!title) {
      title = "คำเตือน";
    }
    this.default(msg, { variant: "warning", title } as ToastsMsg);
  }

  default(msg: string, options: ToastsMsg) {
    if (options) options.autoHideDelay = 2000;
    this.$bvToast.toast(msg, options);
  }
}
