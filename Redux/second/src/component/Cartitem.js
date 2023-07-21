import React from 'react'
import {MdDelete} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {remove} from "../redux/slices/CartSlice";
const Cartitem = ({item}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
toast.error("Item is remove");

  }
  return (

    <div className='flex flex-row duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl  '>
      <div className='h-[180px] w-[30%]'>
<img src={item.image} alt="" className='w-full h-full'/>
      </div>
      <div className='flex flex-col justify-center w-[70%] '>
        <p  className='text-gray-700 font-semibold text-lg text-left  mt-1 '>{item.title}</p>
        <p  className=' text-gray font-normal text-[10px] text-left'>{item.description}</p>
        <div className='flex justify-between'>
         <div className='text-green-600 font-semibold'>&#8377;<span>{item.price}</span></div>
         <button className='bg-[#eb2618] rounded-full' onClick={removeFromCart}>
       
<MdDelete/>
</button>

        </div>
      </div>
    </div>
  )
}

export default Cartitem
