import { useEffect, useRef } from "react"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    
    localStorage.setItem("email", e.target.email.value)
    localStorage.setItem("password", e.target.password.value)
    window.location.href = "/products"
  }

  const emailRef = useRef(null)
  useEffect(()=>{
    emailRef.current.focus()
  },[])

  return (
      <form onSubmit={handleLogin}>
        <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" ref={emailRef}/>
        <InputForm label="Password" type="password" placeholder="****" name="password"/>  
        <Button variant="bg-blue-600" type="submit">Login</Button>        
      </form>
  )
}

export default FormLogin