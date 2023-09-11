import './App.css';
import Header from './components/Orgnism/Header/haeder';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Orgnism/Footer/footer';
import Login from './components/Pages/Login/Login';
import Protectedrouting from './components/ProtectingRouting/Protectedrouting';
import SignUp from './components/Pages/SignUp/SignUp';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import Home from './components/Pages/Home/Home';
import UpdateProduct from './components/Pages/UpdateProduct/UpdateProduct';
import UserProfile from './components/Pages/UserProfile/UserProfile';

function App() {
  return (
    <div >
      <BrowserRouter>
    
      <Header/>
       <Routes>
       <Route path="/signup" element={<SignUp/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
        <Route element={<Protectedrouting/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/update/:_id" element={<UpdateProduct/>}></Route>
        <Route path="/logout" element={<h1>this is logout product page</h1>}></Route>
        <Route path="/profile" element={<UserProfile/>}></Route>
        </Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;


