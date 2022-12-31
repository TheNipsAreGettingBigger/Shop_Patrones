import { AuthenticationAlert, ServidorObservable } from './../src/models/Observers';
// import '../src/style.css';

const form = document.getElementById("form-login")
const servidor = new ServidorObservable()
const authAlert = new AuthenticationAlert(servidor,"auth-alert")
servidor.addObserver(authAlert)

form?.addEventListener("submit",async event=>{
  event.preventDefault()
  const option = document?.querySelector('.panels__item.active')
  const method = option?.getAttribute("data-method")
  const txtUser = option?.querySelector(".txtUser") as HTMLInputElement
  const txtPassword = option?.querySelector(".txtPassword") as HTMLInputElement
  
  const password = txtPassword.value
  const user = txtUser.value
  try{
    const response = await fetch('http://localhost:8000/api/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        password,
        method,
        user
      })
    })
    const data = await response.json()
    if(data.token != null){
      localStorage.setItem("x-token",data.token)
      window.location = "/" as any
      return
    }
    servidor.setState(data.msg)
  }catch(err){
    servidor.setState("Error en el servidor")
  }
})