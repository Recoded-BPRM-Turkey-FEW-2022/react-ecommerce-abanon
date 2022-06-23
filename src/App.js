import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import AllProducts from "./Routes/AllProducts";
import Footer from "./components/Footer";
import Product from "./Routes/Product";
import { Route, Routes } from "react-router-dom";
import DisplayCart from "./components/DisplayCart";
import Cart from "./Routes/Cart"
import { useState, useEffect } from "react";


export default function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setInfo(data))
      }, [])
  return (
    <div>
      <NavBar setInfo={setInfo} info={info}/>
      <Routes>
      <Route path="/">
          <React.Fragment>aaaa</React.Fragment>
        </Route>
        <Route path="/allProducts" element={<AllProducts info={info} setInfo={setInfo}  />} />
         <Route path="/allproducts/:productId" element={<Product />} />
        <Route path="/Cart" element={<Cart />} /> 

      </Routes>
     <Footer/>
    </div>
  );
}
