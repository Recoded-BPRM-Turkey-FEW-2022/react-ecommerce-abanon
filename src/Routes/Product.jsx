import React from "react";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneProduct from "../components/OneProduct";


const Product = () => {
    const {id}  = useParams();
const [ProductInfo, setProductInfo] = useState([]);
useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(console.log)
}, [id])
return(
    <>
    <div>aaaaaaaa</div>
    {/* <OneProduct ProductInfo={ProductInfo}/> */}
    </>
)
}
export default Product;