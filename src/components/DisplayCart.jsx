// I think here we will display cart items and then we will display the total price.
import { useMutation } from 'react-query';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { useQueryClient } from 'react-query';
import '../style.css' ;

const styledImage = {
  
  width:'100px', height: '100px'
}

const DisplayCart = ({data})=>{
  const queryClient = new useQueryClient()
  const deleteItem = useMutation((productID)=>{
    console.log("The product With the ID " + productID+ " has been removed from the cart")
    return fetch(`http://localhost:3000/cart/${productID}`, {
        method: 'DELETE',
      })
  },
      { onSuccess: ()=>  {queryClient.invalidateQueries('cart')}}
     )
    
// console.log(data)

return (

<>

{data.map((product) => {
  return  (
    <>
{/* <div key={product.id}>{product.title} <button  onClick={()=>{deleteItem.mutate(product.id)}}>X</button></div> */}

<List key={product.id} sx={{ ml:14 , width: '100%', maxWidth: '70%' , bgcolor: 'background.paper' , mt:5}}>
  {/* <div key={product.id}> */}
      <ListItem  sx={{maxWidth:'100%'}} alignItems="center">
        <ListItemAvatar >
          <Avatar style={styledImage} className='ss-1pqm26d-MuiAvatar-img' alt="Remy Sharp" src={product.image} />
        </ListItemAvatar>
        <ListItemText sx={{ml:10 , mt:1}}
          primary= {product.title}
          secondary={
            <React.Fragment >
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Quantity: 10
                
              </Typography>
              <Typography
                sx={{ display: 'inline' ,ml:2 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              
               price : {product.price} $
              </Typography>
              
            </React.Fragment>
            
          }
        />
        <Button onClick={()=>{deleteItem.mutate(product.id)}} size="small" color="primary">
        Remove 
        </Button>
      </ListItem>
      {/* </div> */}
      <Divider variant="inset" component="li" />
    </List>
    
    
</>
)

})}
<div className='checkout'>
<h3 style ={{color:'gray' ,padding:'13'}}>Total Price : $$</h3>
<Button variant="contained" sx={{m:"10px", width:"10%%" , ml:20}} style={{ background: '#2E3B55' }}>Check Out</Button>
</div>

</>
)
} 

export default DisplayCart ; 
