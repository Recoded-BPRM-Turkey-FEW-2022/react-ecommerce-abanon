import React from "react";
import OneCard from "./Card"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const ListOfProducts = ({ info ,mutation}) => {
    return (
        <>  {/*Interate over products and create one card */}
        <Box sx={{ flexGrow: 1 }} style={{padding:"5"}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
         {info.map((product )=>{
        
            return (
                <Grid item xs={2} sm={4} md={4} key={product.id}>
        <OneCard  productID={product.id} image = {product.image} title ={product.title} price={product.price} mutation={mutation} />
        </Grid>
        )}
        
        )} 
        </Grid>
    </Box>
        
        
        
        
        </>)
}
export default ListOfProducts;
