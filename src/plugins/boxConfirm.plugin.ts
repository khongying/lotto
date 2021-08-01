import Vue from "vue";

export class BoxConfirmPlugin extends Vue {
  confirm(title: string) {
    try {
      return this.$bvModal.msgBoxConfirm(`${title}`, {
        title: "กรุณายืนยันการลบ",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "ตกลง",
        cancelTitle: "ยกเลิก",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      });
    } catch {
      return false;
    }
  }
  msgConfirm({ title, msg }: { title: string; msg: string }) {
    try {
      return this.$bvModal.msgBoxConfirm(`${msg}`, {
        title: title,
        size: "large",
        okVariant: "success",
        okTitle: "ตกลง",
        cancelTitle: "ยกเลิก",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      });
    } catch {
      return false;
    }
  }
}
