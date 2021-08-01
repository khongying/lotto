import { BaseAdmin } from "@/interface/main.interface";

export class AdminService {
  public static Who(data: BaseAdmin): string {
    if (data !== null) {
      return data.firstName;
    } else {
      return "-";
    }
  }
}
