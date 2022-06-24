import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useMutation} from 'react-query';
import { useState} from 'react';
import '../style.css' ;
//this should incloude "title" , "price" , "add to cart" , "prev dis." , "image" 

 const OneCard = ({image ,title ,price ,productID})=> {
  const [quantity, setQuantity] = useState(1);
  const postData = useMutation((Addproduct)=>{
    console.log(Addproduct)
    return fetch('http://localhost:3000/cart', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(Addproduct)
})
  })

  
return (
    <Card sx={{ maxWidth: 345 }} style ={{height: "25vw"}}>
        
      <CardActionArea  href={`allproducts/${productID}`}  > {/* add the route in the cart action area here*/}
        <CardMedia
        //  sx={{ boxSizing: "100%"}}
          component="img"
        height="150"
          image={image}
          alt={title}
          className='css-o69gx8-MuiCardMedia-root'
         
        />
        <CardContent>
          <Typography gutterBottom variant="" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Price {price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions  >
        <Button onClick={()=>{postData.mutate({
          id : productID,
          title : title,
          price : price,
          image : image,
          quantity : quantity,
          total : price * parseInt(quantity)

        })}} size="small" color="primary">
          Add to Cart
        </Button>
        <TextField type="number" value={quantity}  InputProps={{
        inputProps: { 
          min:1
        }
    }} onChange={(e)=>{setQuantity(e.target.value)}}>

        </TextField>
      </CardActions>
    </Card>
    
)
 }
export default OneCard ;