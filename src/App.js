import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import AllProducts from "./components/AllProducts";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <NavBar />
      <AllProducts/>
      <Footer/>
    </div>
  );
}
