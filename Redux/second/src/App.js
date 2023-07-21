import "./App.css";
import Navbar from "./component/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
   <div>
    <div className=" bg-[#149ECA] h-[4rem]">
      <Navbar/>
    </div>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/cart" element={<Cart/>}/>

<Route path="*" element={<div>Page not Found</div>}></Route>
    </Routes>
   </div>
  );
}

export default App;
