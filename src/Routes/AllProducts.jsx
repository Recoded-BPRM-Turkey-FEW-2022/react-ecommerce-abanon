import React from "react"
import Filter from "../components/Filter"
import ListOfProducts from "../components/ListOfProducts"
import {useState, useEffect} from "react"
import { Route, useRouteMatch } from "react-router-dom";
//The fetch function is used to get the data from the API

const AllProducts = () => {
    const [info, setInfo] = useState([])
useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setInfo(data))
}, [])

    return(
        <>
       
       <Filter info={info} setInfo={setInfo} />
       <ListOfProducts info={info}/>
     
       </>
    )
}
export default AllProducts ;
