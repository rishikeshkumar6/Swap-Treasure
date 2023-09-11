import axios from 'axios'
import { formStyle } from '../../Atoms/formStyle'
import {BsPersonCircle,BsFillCartCheckFill,BsCalendarFill,BsPencil} from "react-icons/bs"
import logo from './logo.jpg'
import styles from './header.module.css'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Header = () => {
  const navigate=useNavigate()
 const auth=localStorage.getItem('userData')
 const Logout=()=>{
  localStorage.clear()
  navigate('/signup')
 }

  return (
    <div className={styles.header}>
     {auth? <ul className={styles.navbar}>
      <li className={styles.items}><Link to="/"><BsFillCartCheckFill fontSize={'2rem'} style={{position:'relative',right:'0.5rem'}}/>Buy Product</Link></li>
      <li className={styles.items}><Link to="/add"><BsCalendarFill fontSize={'1.7rem'} style={{position:'relative',right:'0.5rem'}}/>Sell Product</Link></li>
      <li className={styles.items}><Link to="/update"><BsPencil fontSize={'1.7rem'} style={{position:'relative',right:'0.5rem'}}/>Update Product</Link></li>
      <li className={styles.items}><Link  to="/profile"><BsPersonCircle fontSize={'2rem'} style={{position:'relative',right:'0.5rem'}}/>Profile</Link></li>
      <li className={styles.items}> <Link onClick={Logout} to="/signup">Logout</Link></li>
     
     </ul>:
         <ul className={styles.navbar1}>
            <li className={styles.items}> <Link to="/signup">SignUp</Link></li>
            <li className={styles.items}> <Link  to="/login">Login</Link></li>
            </ul>
      }
     
    </div>
  )
}

export default Header

