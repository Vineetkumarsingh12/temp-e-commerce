import { createSlice } from '@reduxjs/toolkit';

// 1.creating  slice 


// createSlice method take three parameter
// *. identifier: which act as a key in redux store
// *. initialState
//*. redux function

const initialState={
    value:0,
}
 export const CounterSlice=createSlice({
    name:"counter",
 initialState,
 reducers:{
    increment: (stat) => {
stat.value+=1;
    }
    ,decrement: (stat) =>{
        stat.value-=1;
    },  
     incrementByAmount: (stat, action) => {
        // alert(action.payload);
        stat.value += action.payload
      },
   // action is simple object which assosiate with payload
    //   payload is object that contain data that  pass in reducer funtion
 },
 })

 export const{increment,decrement,incrementByAmount}=CounterSlice.actions;

 // it is use to add  the  shop
 export default CounterSlice.reducer;