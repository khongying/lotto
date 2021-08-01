export interface User {
  createdBy: null;
  modifiedBy: null;
  deletedBy: null;
  id: string;
  createdAt: null;
  modifiedAt: null;
  deletedAt: null;
  documentStatus: string;
  firstName: string;
  username: string;
  email: string;
  lastName: string;
  phone: string;
  roles: string;
  address: string;
}

export class BaseLogin {
  public rememberMe!: boolean;
}

export class LoginFromLine extends BaseLogin {
  public lineToken!: string;
}

export class LoginForm extends BaseLogin {
  public email!: string;
  public password!: string;
}

export interface LoginInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token?: string;
  tokenExpire: number;
  rememberMe: boolean;
  documentStatus: string;
  memberType: string;
  profile: string;
  memberStatus: string;
  branchId: string;
}

export interface LoginInfoAdmin {
  id: string;
  email: string;
  token?: string;
  tokenExpire: number;
  rememberMe: boolean;
  role: UserSystemRole;
}

export interface AuthRole {
  createdBy: string;
  modifiedBy: string;
  deletedBy: string;
  roles: string;
}

export interface AuthResponse {
  data: AuthLogin[];
}

export interface AuthLogin {
  id: string;
  email: string;
  token: string;
}

export enum Layout {
  authorization = "authorization",
  unauthorized = "unauthorized",
  empty = "empty"
}

export interface AuthInitState {
  auth: AuthLogin;
  watch: string;
  loginAlready: boolean;
  layout: Layout;
}

export interface Weak {
  weakPassword: boolean;
}

export interface NewPassword {
  password: string;
  token: string;
}

export interface ChangePassword {
  password: string;
  oldPassword: string;
}

export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export enum UserSystemRole {
  Admin = "Admin",
  Chief = "Chief",
  Normal = "Normal"
}
