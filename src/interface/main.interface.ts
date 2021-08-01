export interface RootState {
  loading: boolean;
}

export enum BaseStatus {
  Active = "active",
  Inactive = "inactive",
  Delete = "delete"
}

export interface BaseResponse<T> {
  apiVersion: string;
  meta: Meta;
  data: T;
  total: number;
}

export interface Meta {
  code: number;
  type: string;
  message: string;
}

export interface BaseDocument {
  id?: string;
  createdAt?: Date;
  created?: BaseAdmin;
  modifiedAt?: Date;
  modified?: BaseAdmin;
  deletedAt?: Date;
  deletedBy?: string;
  documentStatus?: boolean;
}

export interface BaseAdmin {
  id: string;
  firstName: string;
}

export interface BaseFilter extends BaseDocument {
  order: "ASC" | "DESC";
  sort: string;
  search: string;
  limit?: string;
  page?: string;
}

export function InitPagination(): BaseFilter {
  return {
    order: "DESC",
    sort: "",
    search: "",
    limit: "25",
    page: "1"
  };
}
