import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const Protectedrouting = () => {
  const auth=localStorage.getItem('userData')
  return auth?<Outlet/>:<Navigate to='/signup'/>
}

export default Protectedrouting
