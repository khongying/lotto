export class FormValidate {
  public static validate(form: any): boolean {
    let valid = false;
    Array.prototype.filter.call(form, f => {
      valid = f.checkValidity();
      f.classList.add("was-validated");
    });
    return valid;
  }
}
