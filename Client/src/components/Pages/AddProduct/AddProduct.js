// import React, { useState } from 'react'
// import axios from 'axios'
// import styles from './AddProduct.module.css'
// const AddProduct = () => {
//    const [input,setInput]=useState({
//         name:"",
//         price:null,
//         category:"",
//         number:null,
//         email:""
//    })
//    const handleChange=(e)=>{
//       setInput({...input,[e.target.name]:e.target.value})
//    }

//    const handleSubmit=async (e)=>{
//      e.preventDefault()
//       const response=await axios.post("http://localhost:4500/add",input,{
//         headers:{
//             Authorization:`bearer ${JSON.parse(localStorage.getItem('Token'))}`
//         }
//       })
//       console.log(response)
//    }
//   return (
//     <div className={styles.container}>
//         <h1>Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Product Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={input.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Price</label>
//           <input
//             type="number"
//             className="form-control"
//             aria-describedby="emailHelp"
//             name="price"
//             value={input.price}
//             onChange={handleChange}
//           />
         
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Category</label>
//           <input
//             type="text"
//             className="form-control"
//             aria-describedby="emailHelp"
//             name="category"
//             value={input.category}
//             onChange={handleChange}
//           />
         
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Number</label>
//           <input
//             type="number"
//             className="form-control"
//             aria-describedby="emailHelp"
//             name="number"
//             value={input.number}
//             onChange={handleChange}
//           />
         
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Business Email</label>
//           <input
//             type="email"
//             className="form-control"
//             aria-describedby="emailHelp"
//             name="email"
//             value={input.email}
//             onChange={handleChange}
//           />
         
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//         >
//           Submit
//         </button>
      
//       </form>
//     </div>
//   )
// }

// export default AddProduct


//testing
import React, { useState } from 'react'
import axios from 'axios'
import styles from './AddProduct.module.css'
const AddProduct = () => {
  //  const [input,setInput]=useState({
       
  //       name:"",
  //       price:null,
  //       category:"",
  //       number:null,
  //       email:""
  //  })

  const [name,setName]=useState("")
  const [data,setData]=useState([])
  const [price,setPrice]=useState(null)
  const [category,setCategory]=useState("")
  const [number,setNumber]=useState(null)
  const [email,setEmail]=useState("")
  const [address,setAdress]=useState("")
  const [image,setImage]=useState()
  //  const handleChange=(e)=>{
  //     setInput({...input,[e.target.name]:e.target.value})
  //  }
   
   const handleSubmit=async (e)=>{
     e.preventDefault()
     const formData=new FormData() 
     formData.append('image', image);
     formData.append('name', name);
     formData.append('price', price);
     formData.append('category', category);
     formData.append('number', number);
     formData.append('address',address)
     formData.append('email', email);
      const response=await axios.post("http://localhost:4500/add",formData,{
        headers:{
            Authorization:`bearer ${JSON.parse(localStorage.getItem('Token'))}`
        }
      })
      const data1=await response.data
   }
  return (
    <div className={styles.container}>
        <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
           
            onChange={(e)=>setImage(e.target.files[0])}
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="emailHelp"
          
            onChange={(e)=>setPrice(e.target.value)}
          />
         
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            
           
            onChange={(e)=>setCategory(e.target.value)}
          />
         
        </div>

        <div className="mb-3">
          <label className="form-label">Number</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="emailHelp"
          
          
            onChange={(e)=>setNumber(e.target.value)}
          />
         
        </div>

        <div className="mb-3">
          <label className="form-label">Number</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
          
          
            onChange={(e)=>setAdress(e.target.value)}
          />
         
        </div>


        <div className="mb-3">
          <label className="form-label">Business Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
         
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

export default AddProduct

