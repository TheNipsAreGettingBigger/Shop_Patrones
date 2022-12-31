import { CerealsBuilder, DrinksBuilder, VegetableBuilder } from "./Builders"
import { TYPES_PRODUCTS, TYPE_PRODUCT } from "./config"
import { Product, ProductBuilder } from "./interfaces"

export class ProductBuilderFactory {
  static createProductBuilder(type:TYPE_PRODUCT):ProductBuilder<Product>{
    switch(type){
      case TYPES_PRODUCTS.VEGETABLES : return new VegetableBuilder()
      case TYPES_PRODUCTS.CEREALS: return new CerealsBuilder()
      case TYPES_PRODUCTS.DRINKS: return new DrinksBuilder()
      default : return new VegetableBuilder()
    }
  }
}
