import { ProductBuilderFactory } from './Factories';
import { IObservable, IObserver, Product } from "./interfaces";

export class SearchBox implements IObservable<Product,HTMLElement> {
  state:Product[] = [
    ProductBuilderFactory
      .createProductBuilder("vegetables")
      .setId("1")
      .setImage("https://raw.githubusercontent.com/TheNipsAreGettingBigger/Images/main/vegetables.png")
      .setName("tomate")
      .build()
  ];
  getState() {
    return this.state
  }
  setState(value: Product): void {
    this.state.push(value)
    this.notifyObservers()
  }
  #subscribers:IObserver<HTMLElement,Product>[] = []
  addObserver(o: IObserver<HTMLElement,Product>): void {
    this.#subscribers.push(o)
  }
  notifyObservers(): void {
    this.#subscribers.forEach(subscriber=>subscriber.update())
  }
}

export class TableObserver implements IObserver<HTMLElement,Product> {
  #observer:any = null
  observable:IObservable<Product,HTMLElement>
  constructor(observable:IObservable<Product,HTMLElement>,id:string){
    this.observable = observable
    this.#observer = document.getElementById(id)
  }
  update(): void {
    this.#observer.innerHTML = this.observable.getState().map((product)=>product.render()).join("")
  }
}

export class LogObserver implements IObserver<HTMLElement,Product>{
  observable:IObservable<Product,HTMLElement>
  constructor(observable:IObservable<Product,HTMLElement>){
    this.observable = observable
  }
  update(): void {
    console.log("El ultimo producto añadido es ",this.observable.getState().at(-1))
  }
}

export class ShoppingCartIcon implements IObserver<HTMLElement,Product> {
  observable:IObservable<Product,HTMLElement>
  #observer:any = null
  constructor(observable:IObservable<Product,HTMLElement>,id:string){
    this.observable = observable
    this.#observer = document.getElementById(id)
  }
  update(): void {
    this.#observer.innerHTML = this.observable.getState().length
    const icon = this.#observer.parentNode
    icon.classList.add("notification-icon")
    icon.addEventListener("animationend",()=>{
      icon.classList.remove("notification-icon")
    })
  }
}

export class Notificacion implements IObserver<HTMLElement,Product>{
  observable:IObservable<Product,HTMLElement>
  #observer:any = null
  constructor(observable:IObservable<Product,HTMLElement>,id:string){
    this.observable = observable
    this.#observer = document.getElementById(id)
  }
  update(): void {
    
    this.#observer.classList.add("alert--up")
    this.#observer.addEventListener("transitionend",()=>{
      setTimeout(()=>{
        this.#observer.classList.remove("alert--up")
      },1500)
    })
  }
}


export class ServidorObservable implements IObservable<string,HTMLElement> {
  // mensajes del servidor
  state: string[] = [];

  getState() {
    return this.state
  }
  setState(value: string): void {
    this.state = []
    this.state.push(value)
    this.notifyObservers()
  }
  #subscribers:IObserver<HTMLElement,string>[] = []
  addObserver(o: IObserver<HTMLElement,string>): void {
    this.#subscribers.push(o)
  }
  notifyObservers(): void {
    this.#subscribers.forEach(subscriber=>subscriber.update())
  }
}

export class AuthenticationAlert implements IObserver<HTMLElement,string> {

  observable:IObservable<string,HTMLElement>
  #observer:any = null
  constructor(observable:IObservable<string,HTMLElement>,id:string){
    this.observable = observable
    this.#observer = document.getElementById(id)
  }
  update(): void {
    this.#observer.innerHTML = `
      <li>${this.observable.getState().at(-1)}</li>
    `
    this.#observer.classList.add("auth-alert--show")
    this.#observer.addEventListener("transitionend",()=>{
      setTimeout(()=>{
        this.#observer.classList.remove("auth-alert--show")
      },1500)
    })
  }

}