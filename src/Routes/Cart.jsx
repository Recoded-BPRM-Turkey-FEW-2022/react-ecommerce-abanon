
import React from "react";
import { useQuery, useMutation } from 'react-query'
import DisplayCart from '../components/DisplayCart'

const Cart =()=>{
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://fakestoreapi.com/products`)
    .then(res =>res.json())
    .then(data=>{return data})
  )

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


  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
 
  return (
    <div>
    <DisplayCart mutation={mutation.mutate} data={data}/>
    </div>
  )
}

export default Cart ;
