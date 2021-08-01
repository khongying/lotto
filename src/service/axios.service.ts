import http, { AxiosStatic, AxiosError, AxiosInstance } from "axios";
import { LoginInfoAdmin } from "@/interface/auth.interface";
import { AuthEnum } from "@/store/auth/auth.enum";
import { ResponseMessage } from "@/interface/http.interface";

const httpStatic: AxiosStatic = http;
const headers = {
  Authorization: process.env.AUTH_TOKEN,
  "Content-Type": "application/json"
} as any;
const httpAuthService = httpStatic.create({
  baseURL: `${process.env.VUE_APP_API_AUTH}`,
  headers
});

export { httpAuthService };

export class HttpService {
  public static instance(baseUrl?: string): AxiosInstance {
    return http.create({
      baseURL: baseUrl ? baseUrl : process.env.VUE_APP_API_URL,
      responseType: "json",
      headers: {
        Authorization: HttpService.getToken()
      }
    });
  }
  public static getToken() {
    try {
      const loginInfo: LoginInfoAdmin = JSON.parse(
        localStorage.getItem(AuthEnum.Auth) as string
      ) as LoginInfoAdmin;
      if (loginInfo) {
        return loginInfo.token;
      } else {
        return undefined;
      }
    } catch {
      return undefined;
    }
  }

  public static handleErrorAuthorization<T>(
    res: AxiosError<ResponseMessage<T>>
  ) {
    try {
      let { response } = res;
      let unauthorized = response?.status === 401;
      let data = response?.data;
      unauthorized = data?.meta.code === 50002 || unauthorized;
      if (unauthorized) {
        localStorage.removeItem(AuthEnum.Auth);
        window.location.href = "/";
      }
    } catch {
      throw new Error("Unauthorized");
    }
  }

  public static setQueryStringByJson<T>(queryParam: T): string {
    let param = "";
    if (queryParam) {
      param =
        "?" +
        Object.entries(queryParam)
          .map(key => {
            return (
              encodeURIComponent(key[0]) +
              "=" +
              encodeURIComponent(String(key[1])) +
              "&"
            );
          })
          .join("");
    }
    return param;
  }

  public static async Authorization(): Promise<boolean> {
    try {
      return !!(await HttpService.getToken());
    } catch {
      return false;
    }
  }
}
