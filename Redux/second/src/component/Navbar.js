import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import shoplogo from "../assert/shoplogo.png";
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const cart= useSelector((state) => state.cart);
  return (
    <nav className='flex flex-row justify-between  h-20 max-w-6xl mx-auto '>
    
    <NavLink to="/">
      <img  src={shoplogo} alt="logo" className='h-16'/>
    </NavLink>
  
      <div className='flex flex-row      font-medium text-slate-100 mr-5 space-x-6 mt-[1rem]  '>
<NavLink to="/">
        <p>Home</p>
        </NavLink>
        <NavLink to="/cart" className="relative" >
      <FaShoppingCart className='text-2xl'/>
      {
        cart.length>0 && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
      }
      </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
