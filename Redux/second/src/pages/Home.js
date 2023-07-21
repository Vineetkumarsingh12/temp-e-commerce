import React, { useEffect, useState } from 'react'
import spinner from '../assert/loading.gif';
import Product from '../component/Product';
const Home = () => {
  const API_URL="https://fakestoreapi.com/products";

  const [loading,setLoading]=useState(false);
  const [posts,setPost]=useState([]);

  async function fectchProductData(){
    setLoading(true);
    try{
      const res= await fetch(API_URL);
      const data=await res.json();
      setPost(data);
    }
    catch(error){
alert("Api limit over");
setPost([]);
    }
    setLoading(false);
 
  }

  useEffect( ()=>{
    fectchProductData();
  },[])
  return (
    <div className='flex  justify-center items-center '>
      {
        loading ?(<div><img src={spinner} alt="Loading"/></div>):posts.length>0 ?(
<div className='grid lg:grid-cols-4 max-w-6xl p-4 mx-auto space-y-10  space-x-5 min-h-[80vh] md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
  {

    //return the Product
    posts.map((post)=>(
      <Product key={post.id} post={post}></Product>
    ))
  }
</div>
        ):
        (<div className='flex justify-center  items-center'>
          <p>No Data Found</p>
        </div>)
      }
    </div>
  )
}

export default Home
