import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './SignUp.module.css'
const SignUp = () => {
    const [input,setInput]=useState({
        name:"",
        email:"",
        address:"",
        password:""
    }) 
    const [error,setError]=useState(false)
    const handleChange=(e)=>{
       setInput({...input,[e.target.name]:e.target.value})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(!input.name || !input.email || !input.password || !input.address){
          setError(true)
          return false
        }
        else{
      const request=await axios.post("http://localhost:4500/register",input)
      const response=await request.data
      const authentication=await response.auth
      const data=await response.result
      
      if(response==="record already find"){
        setError(true)
        return false
      }
      else{
        localStorage.setItem("userData",JSON.stringify(data))
        localStorage.setItem("Token",JSON.stringify(authentication))
      
      setInput({
        name:"",
        email:"",
        password:""
      })
    }
    }
    }
    const navigate=useNavigate()
    useEffect(()=>{
      const auth=localStorage.getItem('Token')
      if(auth){
            navigate('/')
      }
    },[input])
  return (
    <div className={styles.container}>
        <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          {(error && !input.name) && <span style={{color:'red'}}>Please fill the all input field</span>}
        </div>

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
           {(error && !input.email) && <span style={{color:'red'}}>Please fill the all input field</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
           {(error && !input.password) && <span style={{color:'red'}}>Please fill the all input field</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Current Address</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="address"
            value={input.address}
            onChange={handleChange}
          />
           {(error && !input.address) && <span style={{color:'red'}}>Please fill the all input field</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button><br/>
        {error && <span style={{color:'red'}}>Email is already exist</span>}
      </form>
    </div>
  )
}

export default SignUp
