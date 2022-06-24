//Copyrights and people who contributed to this file and their linkedIn, GIthub...etc
import React from "react";
import { BottomNavigation ,Toolbar, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';



const Footer = () => {
    return (
        <>
        <BottomNavigation    style={{ background: '#2E3B55' ,position='absolute' , bottom :'0' }}>
        <Toolbar sx={{justifyContents:"space-between"}} >
        
        <Typography variant="h4" sx={{flexGrow: "1",cursor: "pointer"}} >
        AMJAD
    </Typography>
    <GitHubIcon/>
        <Divider style={{ borderColor: "#ffffff"}} sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        
        <div>
        GHUFRAN
        </div>
        <Divider style={{ borderColor: "#ffffff"}}  sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <div>
        ABDU
        </div>
        </Toolbar>
        </BottomNavigation>
        </>
    )
}
export default Footer;