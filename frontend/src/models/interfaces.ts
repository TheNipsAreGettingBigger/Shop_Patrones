export interface Product{
  id :string
  name:string
  image : string
  render : () => void
}

export interface ProductBuilder<T>{
  product : T
  setName(name: string):ProductBuilder<T>
  setId(id:string):ProductBuilder<T>
  setImage(image:string):ProductBuilder<T>
  build():T
}

export interface IObserver<K,T>{
  update():void
  observable:IObservable<T,K>
}

export interface IObservable<T,K> {
  state:T[];
  addObserver(o:IObserver<K,T>):void;
  notifyObservers():void;
  getState():T[];
  setState(value: T):void;
}