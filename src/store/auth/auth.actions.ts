import { ActionContext, ActionTree } from "vuex";
import { BaseResponse, RootState } from "@/interface/main.interface";
import { httpAuthService } from "@/service/axios.service";
import { AxiosResponse } from "axios";
import {
  AuthInitState,
  AuthLogin,
  Layout,
  LoginForm
} from "@/interface/auth.interface";
import { AuthEnum } from "@/store/auth/auth.enum";

export const AuthAction: ActionTree<AuthInitState, RootState> = {
  async _LoginMember(
    { commit }: ActionContext<AuthInitState, RootState>,
    payload: LoginForm
  ): Promise<void> {
    try {
      const res = (await httpAuthService.post(
        "/auth/login/email",
        payload
      )) as AxiosResponse<BaseResponse<AuthLogin[]>>;
      const loginInfo: AuthLogin[] = res.data.data;
      if (loginInfo[0]) {
        localStorage.setItem(AuthEnum.Auth, JSON.stringify(loginInfo[0]));
        commit(`${"MAIN_LOGIN"}`, loginInfo);
        commit(`${"MAIN_LOGIN_ALREADY"}`, true);
        commit(`${"MAIN_LAYOUT"}`, Layout.authorization);
      } else {
        commit(`${"MAIN_LOGIN_FAIL"}`, "fail");
        commit(`${"MAIN_LOGIN_ALREADY"}`, false);
        commit(`${"MAIN_LAYOUT"}`, Layout.unauthorized);
      }
    } catch {
      commit(`${"MAIN_LOGIN_FAIL"}`, "fail");
      commit(`${"MAIN_LOGIN_ALREADY"}`, false);
      commit(`${"MAIN_LAYOUT"}`, Layout.unauthorized);
      throw new Error("login fail");
    }
  },
  async _ForgotPassword(
    req: ActionContext<AuthInitState, RootState>,
    payload: string
  ): Promise<void> {
    try {
      await httpAuthService.post("/auth/forgot-password", { email: payload });
    } catch {
      throw new Error("forgot password fail");
    }
  }
};
