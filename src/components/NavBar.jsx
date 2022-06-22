import React from "react";
import {AppBar,Toolbar,Typography,}from "@mui/material"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Categories from "./Categories";
import {Link} from 'react-router-dom' ;
// // For Ghofran....
//to include "Search", "Category", "Cart", "Home (AllProducts)"
const NavBar = () => {
    return (
    <AppBar position='static' style={{ background: '#2E3B55' }}>
    <Toolbar >
    <Typography variant="h4" sx={{flexGrow: "1",cursor: "pointer"}} >
    MINISHOP
    </Typography>
    <Button href="/allProducts" sx={{ mr:6 , color:"#ffffff"}}>Products</Button>
    <Categories/>
    <Paper
    component="form"
    sx={{ p: '1px 2px', display: 'flex', alignItems: 'end', width: 250 }}>
    <InputBase
    sx={{ ml: 1, flex: 1 }}
    placeholder="Search"
    inputProps={{ 'aria-label': 'search' }}/>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="Search">
    <SearchIcon />
    </IconButton>
    </Paper>
    <Link to ="/Cart">
    <ShoppingCartIcon  sx={{fontSize:'30' , cursor: "pointer" , ml:3}}/>
    </Link>
    </Toolbar>
    </AppBar>
    );
}
export default NavBar;