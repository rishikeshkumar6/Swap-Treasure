import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './Login.module.css'
const Login = () => {
    const [input,setInput]=useState({
        email:"",
        password:""
    })
    const [error,setError]=useState(false)
    const navigate=useNavigate()
    const handleChange=(e)=>{
          setInput({...input,[e.target.name]:e.target.value})
    }
    const handleSubmit=async (e)=>{
      e.preventDefault()
      if(!input.email  || !input.password){
        setError(true)
        return false
      }
      const request=await axios.post("http://localhost:4500/login",input)
      console.log(request)
      const response=await request.data
      const authentication=await response.auth
      const data=await response.result
       localStorage.setItem("userData",JSON.stringify(data))
        localStorage.setItem("Token",JSON.stringify(authentication))
      if(data){
          navigate('/')
      }else{
        alert("please enter valid email or password")
      }
    }
    useEffect(()=>{
      const auth=localStorage.getItem('userData')
      if(auth){
            navigate('/')
      }
    },[input])
  
  return (
    <div className={styles.login}>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          {(error && !input.email) && <span style={{color:'red'}}>Please fill this input field</span>}
        </div>

        <div className="mb-3 ">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
            {(error && !input.email) && <span style={{color:'red'}}>Please fill this input field</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
