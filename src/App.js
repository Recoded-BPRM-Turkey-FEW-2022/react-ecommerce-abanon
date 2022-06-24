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
import { useQuery, useMutation } from 'react-query';

export default function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setInfo(data))
      }, [])

      const postData =(Addproduct)=>{
    console.log(Addproduct)
    return fetch('http://localhost:3000/cart', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({...Addproduct})
}).then(res => res.json())
  .then(res => {return res})
  
  }



  const mutation = useMutation(NewItem => {
    return postData(NewItem)
  })
  
  return (
    <div style={{height: "100%" ,background:'#fff8e1'  }}>
      <NavBar setInfo={setInfo} info={info}/>
      <Routes>
      <Route path="/" element={ <React.Fragment><h1>Welcome</h1></React.Fragment>} />
         
        <Route path="/allProducts" element={<AllProducts  info={info} setInfo={setInfo} mutation={mutation} />} />
         <Route path="/allproducts/:productId" element={<Product mutation={mutation.mutate}/>} />
        <Route path="/Cart" element={<Cart />} /> 

      </Routes>
     <Footer/>
    </div>
  );
}
