import logo from '../Assets/logo.jpeg';
import './Navbar.css';
import { useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'
import { store } from '../../App';



const Navbar = () => {
  const [state,setstate]=useState(false);
  const [token,setToken] = useContext(store);
  

  return (<div>{!token &&
    <nav>
      <div className='logo'>
        <img className='img' src={logo} alt="logo" />
        <h2>ProAi</h2>
      </div>
      <div>
      <ul id='navbar' className={state?"#navbar active":"#navbar"}>
        <li onClick={()=>{setstate(false)}}><Link className='a active' to='/about'>Home</Link></li>  
        <li onClick={()=>{setstate(false)}}><Link className='a' to='/login'>Login</Link></li>
      </ul>
      </div>
      <div id='mobile' onClick={()=>{setstate(!state)}}>
        <i id='bars' className={state ? "fas fa-times":"fas fa-bars"}></i>
      </div>
      
    </nav>
    }
</div>
  )
}
export default Navbar;