// I think here we will display cart items and then we will display the total price.
import react from 'react';


const DisplayCart = ({data,mutation})=>{

    
// console.log(data)

return (

<>
<div>
<h1>
{data.title}
</h1>
<button onClick={()=>{console.log(data)
    ; mutation(data)}}>
    
Clik me 
</button>
</div>

</>

)

}

export default DisplayCart ; 
