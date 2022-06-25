import React from "react"
import Filter from "../components/Filter"
import ListOfProducts from "../components/ListOfProducts"
//The fetch function is used to get the data from the API

const AllProducts = ({info, setInfo }) => {
   
    return(
        <>

       <Filter setInfo={setInfo} info={info} />
       <ListOfProducts info={info}/>
     
    </>
    )
}
export default AllProducts ;
