//A function to handle clicking add to cart should be created
//We have to know how to pass the props to use them inside the fuction

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const OneProduct = ({ info }) => {
  return (
    <Grid p={6}  style={{ height: "100%", }} container spacing={2} >
    <Grid  sx={{}} item xs={12} md={3}>
      <Item sx={{pb:"0px"}} style={{height: "200px", backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>img</Item>
      <Grid sx={{pb:"0px"}} item xs={12}  md={12}>
    <Button variant="contained" sx={{m:"10px", width:"90%"}} onClick={null}>Add to cart</Button>
    </Grid>
    </Grid>
    <Grid  item xs={12}  md={8}>
      <Item style={{height: "100%"}}><h1>KEYBOARD</h1><div style={{m:"10px", textAlign: 'left'}}>a good keyboard</div></Item>
    </Grid>
      </Grid>)
}
export default OneProduct;
