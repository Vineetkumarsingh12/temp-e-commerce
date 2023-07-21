import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const [showFullDescription, setShowFullDescription] = useState(false);

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  // const toggleDescription = () => {
  //   setShowFullDescription((prevState) => !prevState);
  // };

  return ( 
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title.split(" ").slice(0,3).join(" ")+"..."}</p>
      </div>
      <div>
        <p className='w-40 text-gray font-normal text-[10px] text-left'>{
     
            post.description.split(" ").slice(0,10).join(" ") + "..."
         }
        </p>
  
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt="imag" className='w-full h-full'/>
      </div>
      <div className='flex flex-row justify-between gap-12 items-center w-full mt-5'>
      <div>
        <p className='text-green-600 font-semibold'>	&#8377; {post.price}</p>
      </div>
      <div>
        {cart.some((p) => p.id === post.id) ? (
          <button className='border-2 border-gray-700 text-gray- rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ' onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button className='border-2 border-gray-700 text-gray rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 '  onClick={addToCart}>Add to Cart</button>
        )}
      </div>
      </div>
    </div>
  );
};

export default Product;
