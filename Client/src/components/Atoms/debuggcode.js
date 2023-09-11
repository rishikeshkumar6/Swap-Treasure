//  const handleSubmit=async (e)=>{
//    e.preventDefault()
//    const key=e.target.value
//    const result=await axios.get(`http://localhost:4500/search/${key}`)
//    const data=await result.data
//    setProduct(data)
   
//  }
//  useEffect(()=>{
//   handleSubmit()
//  },[])



// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'skyblue'}}>
//   <div class="container-fluid">
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
        
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Header


{/* <form class="d-flex w-50 m-3 " role="search" style={{position:'relative',left:'20rem'}} onSubmit={handleSubmit}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}


    //   const handleSubmit=async (e,search)=>{
    //     e.preventDefault()
    //       const response=await axios.get(`http://localhost:4500/search/${search}`,{headers:{
    //         Authorization:`bearer ${JSON.parse(localStorage.getItem('Token'))}`
    //       }})
    //     }


    // const [deletePopup,showDeletePopup]=useState(false)
    // const [deleteValidation,setdeleteValidation]=useState(null)
    // const body={deletevalidation:deleteValidation}



