import React from "react";

import {AppBar,Toolbar,Typography,}from "@mui/material"
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Categories from "./Categories";
import Search from "./Search";
import {Link} from 'react-router-dom' ;

// // For Ghofran....
//to include "Search", "Category", "Cart", "Home (AllProducts)"
const NavBar = ({setInfo, info}) => {

    return (
    <AppBar position='static' style={{ background: '#2E3B55' }}>
    <Toolbar >
    <Typography variant="h4" sx={{flexGrow: "1",cursor: "pointer"}} >
    MINISHOP
    </Typography>
    <Button href="/allProducts" sx={{ mr:6 , color:"#ffffff"}}>Products</Button>
    <Categories/>
    <Search setInfo={setInfo} info={info}/>
    <Link to ="/Cart">
    <ShoppingCartIcon sx={{fontSize:'30' , cursor: "pointer" , ml:3}}/>
    </Link>
    </Toolbar>
    
    </AppBar>
    );
}
export default NavBar;