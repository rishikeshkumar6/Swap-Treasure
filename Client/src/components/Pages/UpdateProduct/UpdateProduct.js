import React,{useState,useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom'
import styles from './UpdateProduct.module.css'
import axios from 'axios'
const UpdateProduct = () => {
    const params=useParams()
  const [error,setError]=useState(false)
  const [input,setInput]=useState({
        name:"",
        price:null,
        category:"",
        number:null,
        email:""
    })
   const getProduct=async()=>{
     const result=await axios.get(`http://localhost:4500/add/${params._id}`,{
      headers:{
        Authorization:`bearer ${JSON.parse(localStorage.getItem('Token'))}`
      }
      })
      
     const data=await result.data 
     setInput(data)
   }
   useEffect(()=>{
       getProduct()
   },[])

    const handleChange=(e)=>{
       setInput({...input,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!input.name || !input.email || !input. number || !input.category || !input.price){
        setError(true) 
        return false
      }
      
      try {
        const result = await axios.put(`http://localhost:4500/add/${params._id}`, input,{headers:{
          Authorization:`bearer ${JSON.parse(localStorage.getItem('Token'))}`
        }});
        const data =await result.data; // Assuming result.data directly contains the data you want to store
        console.log(data)
        
        // // Store the data in local storage
        // localStorage.setItem('product', JSON.stringify(data));
        
        // // Wait for a short duration (e.g., 100ms) to allow local storage to update
        // await new Promise(resolve => setTimeout(resolve, 100));
        
        // Retrieve the stored data and log it
        // const storedData = JSON.parse(localStorage.getItem('product'));
        // const userId=storedData._id
        // console.log(userId);
        
        setInput({
          name: "",
          price: "",
          category: "",
          number: "",
          email:""
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
  
    
  return (
    <div className={styles.parent}>
    <div className={styles.container}>
        <h1>Update Product</h1>
<form  className={styles.formContainer} onSubmit={handleSubmit}>
  <div class="mb-3">
   <label  className="form-label">Product Name</label>
    <input type="text" className="form-control" name="name" value={input.name} onChange={handleChange}/>
    {(error && !input.name) && <span style={{color:'red'}}>Please fill this input field</span>}
  </div>
 
 
  <div class="mb-3">
    <label  className="form-label">Product Price</label>
    <input type="number" className="form-control" name="price"value={input.price} onChange={handleChange}/>
    {(error && !input.price) && <span style={{color:'red'}}>Please fill this input field</span>}
  </div>

  <div class="mb-3">
    <label  className="form-label">Product Category</label>
    <input type="text" className="form-control" name='category' value={input.category} onChange={handleChange}/>
    {(error && !input.category) && <span style={{color:'red'}}>Please fill this input field</span>}
  </div>

  <div class="mb-3">
    <label  className="form-label">Mobile Number</label>
    <input type="number" className="form-control" name="number" value={input.number} onChange={handleChange}/>
    {(error && !input.number) && <span style={{color:'red'}}>Please fill this input field</span>}
  </div>

  <div class="mb-3">
    <label  className="form-label">Business Email</label>
    <input type="email" className="form-control" name="email" value={input.email} onChange={handleChange}/>
    {(error && !input.email) && <span style={{color:'red'}}>Please fill this input field</span>}
  </div>
 <button type="submit" class="btn btn-primary">Update</button>
</form>
</div>

  </div>  
   )

  }

export default UpdateProduct


