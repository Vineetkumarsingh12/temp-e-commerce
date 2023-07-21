import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/slices/CounterSlice';

const Counter = () => {

    // to access state of  -->slice<-- use useSelector Hook 
    const count=useSelector((state)=>state.counter.value);

    //to access reducer function use useDispatch() hook
    const dispatch=useDispatch();



  return (
    <div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <br/>
<br/>
      <div>
        {
count
        }
      </div>

      <br/>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      
      <br/>

      <button onClick={()=>dispatch(incrementByAmount(2 ))}>incrementByAmount</button>
    </div>
  )
}

export default Counter
