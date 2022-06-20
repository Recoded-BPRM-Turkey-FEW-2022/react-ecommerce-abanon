import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import AllProducts from "./Routes/AllProducts";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/">
          <React.Fragment>aaaa</React.Fragment>
        </Route>
        <Route path="/allProducts" element={<AllProducts />} />
         {/*<Route path="/allproducts/:productId" element={<OneProduct />} />
        <Route path="/Cart" element={<Cart />} /> */}
      </Routes>
     <Footer/>
    </div>
  );
}
