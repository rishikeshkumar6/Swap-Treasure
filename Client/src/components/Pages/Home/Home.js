import React,{useState,useEffect} from 'react'
import styles from './Home.module.css'
import { BsTrash,BsPencil } from "react-icons/bs";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MDBIcon } from 'mdb-react-ui-kit'

const Home = () => {
  const [product,setProduct]=useState([])
  const [search,setSearch]=useState("")
    const getProduct=async ()=>{
       const response=await axios.get("http://localhost:4500/add", {headers:{
        Authorization:`bearer ${JSON.parse(localStorage.getItem('Token'))}`
      }})
       const result=await response.data
       setProduct(result)
       console.log(response)
    }

    useEffect(()=>{
      getProduct()
    },[])

    const filterProduct=product.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))


    

  const deleteCard=async (id)=>{
      const result=await axios.delete(`http://localhost:4500/add/${id}`,{headers:{
        Authorization:`bearer ${JSON.parse(localStorage.getItem('Token'))}`
      }})
      console.log(result)
     getProduct()
 
  }

  

 return (
    <div className={styles.parentCard}>
      
      <div className={styles.search}>
          <label className="form-label" style={{fontWeight:'bold',fontSize:'1.5rem'}}>Search Product</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          
          </div>
    <div className="d-flex flex-wrap gap-5 mt-2 ml-2" style={{fontWeight:'bold',position:'relative',top:'1rem',left:'10rem'}}>
   
{filterProduct.map((product) => (
    <div key={product._id} className="card" style={{ width: '25vw', border: '1px solid #ddd' }}>
      <div className="card-body d-flex flex-column gap-2 ">
        <img src={`http://localhost:4500/${product.image}`} alt="error" className='card-img-top' style={{ maxWidth: '100%' }} />
        <span className="card-title">Name: {product.name}</span>
        <span onClick={() => deleteCard(product._id)} style={{ position: 'absolute', right: '2.8rem', top: '0.5rem', fontSize: '1.5rem', cursor: 'pointer', color: 'red' }}><BsTrash /></span>
        {/* <span  style={{ position: 'absolute', right: '2.8rem', top: '0.5rem', fontSize: '1.5rem', cursor: 'pointer', color: 'red' }}><Link to={"/delete/"+product._id}><BsTrash /></Link></span> */}
        <span style={{ position: 'absolute', right: '0.5rem', top: '0.5rem', fontSize: '1.5rem', cursor: 'pointer' }}><Link to={"/update/" + product._id}><BsPencil /></Link></span>
        <span>Category: {product.category}</span>
        <span>₹ {product.price}</span>
        <div className="d-flex align-items-center">
          <MDBIcon icon="envelope" className="me-2" />
          <span>{product.email}</span>
        </div>
        <span><HiOutlineLocationMarker fontSize={'1.5rem'} />{product.address}</span>
        <p></p>
        <button className="btn btn-warning mt-auto position-absolute fixed-bottom " style={{ zIndex: '1' }} ><MDBIcon icon="phone" className="me-3" /><Link to={`tel:${product.number}`} style={{ textDecoration: 'none', color: 'white' }}>Call Now</Link></button>
      </div>
    </div>
  ))}
 
  </div>
 </div>
 )
}
export default Home


