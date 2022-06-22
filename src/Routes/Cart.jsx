
import React from "react";
import { useQuery } from 'react-query'
import DisplayCart from '../components/DisplayCart'

const Cart =()=>{
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:3000/posts')
    .then(res =>res.json())
    .then(data=>console.log(data))
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
    <DisplayCart data={data}/>
    </div>
  )
}

export default Cart ;
