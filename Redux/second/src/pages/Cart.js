import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import { NavLink } from 'react-router-dom';
import Cartitem from '../component/Cartitem';
const Cart = () => {
// accessing the state of the cart slice
  const cart = useSelector((state)=>state.cart);
  //handling total amount
const [totalAmount,setTotalAmount]=useState(0);

useEffect(()=>{
  setTotalAmount(cart.reduce((sum,curr)=>sum+curr.price,0));
},[cart])


  return (
    <div className='flex flex-col max-w-6xl mx-auto pt-10 items-center justify-center   space-y-10  space-x-5 p-10 '>
      <div>{
      cart.length ===0 ? (<div>
<p> cart Empty</p>
<NavLink to="/">
  <button>Shop Now</button>
</NavLink>
      </div>):
      (
        <div className='flex flex-col md:flex-row  items-center md:items-start'>
          <div className='flex flex-col gap-4 md:w-[70%] mx-auto w-[100%]  '>
            {
          cart.map((item)=>
            {
             return  <Cartitem key={item.id} item={item} />
             
})
             }
             </div>
             <div className='flex flex-col  gap-2 p-4 mt-10 ml-5 rounded-xl duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  h-fit outline w-fit '>
             <p className='font-semibold text-lg text-center'>Your Cart</p>
  <p>Summary</p>
  <p>Total items:<span>{cart.length}</span></p>
  <p className='flex gap-1'>Total&#160;Amount&#160;:<span className='text-green-600 font-semibold'>&#8377;{totalAmount}</span></p>
  <button className='border-2 border-gray-700 text-gray- rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300  ma max-w-sm' >checkout Now</button>
             </div>


            </div>
      )
    }</div>
    </div>
  )
}

export default Cart;
