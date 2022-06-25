import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import AllProducts from "./Routes/AllProducts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./Routes/Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./Routes/Cart"
import { useState, useEffect } from "react";

export default function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=30')
          .then(res => res.json())
          .then(data => setInfo(data))
      }, [])

  return (
    <div  style={{height: "100%" ,background:'#fafafa' }}>
      <NavBar setInfo={setInfo} info={info}/>
      <Routes>
      <Route path="/" element={  <Home/>}/>
         
        <Route path="/allProducts" element={<AllProducts  info={info} setInfo={setInfo} />} />
         <Route path="/allproducts/:productId" element={<Product/>} />
        <Route path="/Cart" element={<Cart />} /> 

      </Routes>
     <Footer/>
    </div>
  );
}
