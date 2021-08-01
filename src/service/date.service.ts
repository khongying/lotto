import moment from "moment";

export class FormDate {
  public static Date(date: Date | string): string {
    if (date) {
      return moment(date).format("DD/MM/YYYY");
    } else {
      return "-";
    }
  }
  public defaultDate(date: Date | string): string {
    if (date) {
      return moment(date).format("DD/MM/YYYY");
    } else {
      return "-";
    }
  }

  public static Calendar(date: Date | string): string {
    if (date) {
      return moment(date).format("YYYY-MM-DD");
    } else {
      return "-";
    }
  }
  public static CalendarEnd(date: Date | string): string {
    if (date) {
      return moment(date)
        .add(1, "day")
        .format("YYYY-MM-DD");
    } else {
      return "-";
    }
  }
}
