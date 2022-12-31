import { ProductBuilderFactory } from './models/Factories';
import { LogObserver, Notificacion } from './models/Observers';
// import './style.css'

let index = 1

import { SearchBox, ShoppingCartIcon, TableObserver } from "./models/Observers"

// observable
const searchBoxObservable$ = new SearchBox()

// observers
const tableObserver = new TableObserver(searchBoxObservable$,"content")
const shoppingCartIcon = new ShoppingCartIcon(searchBoxObservable$,"counter")
const notificacion = new Notificacion(searchBoxObservable$,"alert")
const logObserver = new LogObserver(searchBoxObservable$)


searchBoxObservable$.addObserver(tableObserver)
searchBoxObservable$.addObserver(shoppingCartIcon)
searchBoxObservable$.addObserver(notificacion)
searchBoxObservable$.addObserver(logObserver)

let type = "vegetables"

document.querySelector(".select")?.addEventListener("change",event=>{
  event.preventDefault()
  const target = event.target as any 
  const value = target.value
  type = value
})


function addProductHandler(){
  const productElement = document.querySelector("#input") as HTMLInputElement
  const builder = ProductBuilderFactory.createProductBuilder(type)
  const product = builder.setId(++index+"").setImage(`https://raw.githubusercontent.com/TheNipsAreGettingBigger/Images/main/${type}.png`).setName(productElement.value).build()
  
  searchBoxObservable$.setState(product)
  productElement.value = ""
}

document.getElementById("add-product")?.addEventListener("click",addProductHandler)
document.getElementById("input")?.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addProductHandler()
  }
});

document.querySelector(".logout")?.addEventListener('click',event=>{
  event.preventDefault()
  localStorage.clear()
  window.location = "/login/" as any
})
