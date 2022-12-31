
export enum TYPES_PRODUCTS {
  VEGETABLES = "vegetables",
  CEREALS = "cereals",
  DRINKS = "drinks",
}

export type TYPE_PRODUCT = TYPES_PRODUCTS[keyof TYPES_PRODUCTS];

