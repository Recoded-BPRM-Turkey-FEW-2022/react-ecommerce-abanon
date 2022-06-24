// I think here we will display cart items and then we will display the total price.
import react from 'react';
import { useMutation } from 'react-query';

const DisplayCart = ({data})=>{
    const deleteItem = useMutation((productID)=>{
        console.log("The product With the ID " + productID+ " has been removed from the cart")
        return fetch(`http://localhost:3000/cart/${productID}`, {
            method: 'DELETE',
          })
      })
    
// console.log(data)

return (

<>
<div>{data.map((product) => {return  <div key={product.id}>{product.title} <button  onClick={()=>{deleteItem.mutate(product.id)}}>X</button></div> }) }</div>

</>

)

}

export default DisplayCart ; 
