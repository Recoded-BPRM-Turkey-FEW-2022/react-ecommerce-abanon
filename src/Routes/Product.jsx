import React from "react";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneProduct from "../components/OneProduct";
import { useQuery, useMutation } from 'react-query';

const Product = () => {
const {productId}  = useParams();
const [ProductInfo, setProductInfo] = useState([]);
useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(data => { setProductInfo(data)})
    
}, [])

const postData =(Addproduct)=>{
    console.log(Addproduct)
    return fetch('http://localhost:3000/posts', {
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
  

return(
    <>
    <OneProduct ProductInfo={ProductInfo} mutation={mutation.mutate}/>
    </>
)
}
export default Product;