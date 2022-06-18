import React from "react"
import Filter from "./Filter"
import ListOfProducts from "../components/ListOfProducts"
//The fetch function is used to get the data from the API
const AllProducts = () => {
    const [info, setInfo] = useState([info])
    fetch("http://localhost:3001/products")
        .then(res => res.json())
        .then(data => setInfo(data))

const log = console.log("some stuff");

    return(
        <>
        <Filter log={log}/>
       <ListOfProducts/>
       </>
    )
}