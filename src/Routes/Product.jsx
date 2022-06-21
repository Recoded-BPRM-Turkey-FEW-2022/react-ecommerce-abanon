import React from "react";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneProduct from "../components/OneProduct";


const Product = () => {
    const {productId}  = useParams();
const [ProductInfo, setProductInfo] = useState([]);
useEffect(() => {
    console.log(productId)
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        
        .then(data => { setProductInfo(data)
        console.log(data)})
        
}, [])


return(
    <>
    <OneProduct ProductInfo={ProductInfo}/>
    </>
)
}
export default Product;