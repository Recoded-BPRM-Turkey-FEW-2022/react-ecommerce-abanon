import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


//this should incloude "title" , "price" , "add to cart" , "prev dis." , "image" 

 const OneCard = ({image ,title ,price ,key})=> {
console.log(title)
return (
     
    <Card sx={{ maxWidth: 345 }} style ={{height: "25vw"}}>
        
      <CardActionArea > {/* add the route in the cart action area here*/}
        <CardMedia
        //  sx={{ boxSizing: "100%"}}
          component="img"
        height="150"
          image={image}
          alt={title}
         
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
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
    
)
 }
export default OneCard ;