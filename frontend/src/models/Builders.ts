import { Cereals, Drinks, Vegetables } from "./entities"
import { ProductBuilder } from "./interfaces"

export class VegetableBuilder implements ProductBuilder<Vegetables>{
  public product : Vegetables
  constructor(){
    this.product = new Vegetables()  
  }
  setName(name: string) {
    this.product.name = name
    return this
  }
  setId(id:string) {
    this.product.id = id
    return this
  }
  setImage(image:string) {
    this.product.image = image
    return this
  }
  build(): Vegetables {
    return this.product
  }
}

export class CerealsBuilder implements ProductBuilder<Cereals>{
  public product : Cereals
  constructor(){
    this.product = new Cereals()  
  }
  setName(name: string) {
    this.product.name = name
    return this
  }
  setId(id:string) {
    this.product.id = id
    return this
  }
  setImage(image:string) {
    this.product.image = image
    return this
  }
  build(): Cereals {
    return this.product
  }
}

export class DrinksBuilder implements ProductBuilder<Drinks>{
  public product : Drinks
  constructor(){
    this.product = new Drinks()  
  }
  setName(name: string) {
    this.product.name = name
    return this
  }
  setId(id:string) {
    this.product.id = id
    return this
  }
  setImage(image:string) {
    this.product.image = image
    return this
  }
  build(): Drinks {
    return this.product
  }
}