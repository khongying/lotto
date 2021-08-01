export class AppResponseData {
  public logToken!: string;
  public version?: string;
  public appCode!: number;
  public appDetail?: string;
}

export interface ResponseMeta {
  code: number;
  type: string;
  message: string;
}

export interface ResponseMessage<T> {
  apiVersion: string;
  meta: ResponseMeta;
  data: T;
  total?: number;
}
