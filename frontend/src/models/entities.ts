import { Product } from "./interfaces"


export class Vegetables implements Product {
  public id !: string
  public name !: string
  public image !: string
  public render(){
    return `<tr>
    <td>${this.id}</td>
    <td><img src="${this.image}" alt=""></td>
    <td>${this.name}</td>
  </tr>`
  }
}

export class Cereals implements Product {
  public id !: string
  public name !: string
  public image !: string
  public render(){
    return `<tr>
    <td>${this.id}</td>
    <td><img src="${this.image}" alt=""></td>
    <td>${this.name}</td>
  </tr>`
  }
}

export class Drinks implements Product {
  public id !: string
  public name !: string
  public image !: string
  public render(){
    return `<tr>
    <td>${this.id}</td>
    <td><img src="${this.image}" alt=""></td>
    <td>${this.name}</td>
  </tr>`
  }
}