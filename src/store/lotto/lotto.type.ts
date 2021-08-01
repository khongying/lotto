export interface LottoName {
  name: string;
}

export interface Lotto {
  dataThree: DataThree[];
  dataTwo: DataTwo[];
}

export interface DataThree {
  number: number;
  favorite: number;
  todd: number;
  lower: number;
  totalPrice: number;
}

export interface DataTwo {
  number: number;
  top: number;
  lower: number;
  totalPrice: number;
}
