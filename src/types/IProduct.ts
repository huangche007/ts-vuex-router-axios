export type IProducts<T> = {
  [index: number]: T;
};

export type IProduct = {
  id: number;
  colorVariant: string;
  content: string;
  imageUrl: string;
  name: string;
  typeVariant: string;
  subCategoryId: number;
  rate: number;
  price: number;
};
