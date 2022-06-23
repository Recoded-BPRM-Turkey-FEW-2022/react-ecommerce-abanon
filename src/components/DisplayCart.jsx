// I think here we will display cart items and then we will display the total price.
import react from 'react';


const DisplayCart = ({data})=>{

    
// console.log(data)

return (

<>
<div>
<h1>
{data[0].title}
</h1>
<button onClick={()=>{console.log(data)}}>
    
Clik me 
</button>
</div>

</>

)

}

export default DisplayCart ; 
