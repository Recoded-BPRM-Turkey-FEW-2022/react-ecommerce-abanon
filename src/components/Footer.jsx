//Copyrights and people who contributed to this file and their linkedIn, GIthub...etc
import React from "react";
import { BottomNavigation ,Toolbar, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../style.css' ;

const Footer = () => {
    return (
        <>
        <BottomNavigation  className='ss-16lloyr-MuiBottomNavigation-root'  style={{ background: '#c96f53' ,position: 'static' , bottom :'0'  }}>
        <Toolbar className='bigfooter' >
            
        <div className='footer'>
        <Typography variant="h7" sx={{color:'#ffff' ,flexGrow: "1",cursor: "pointer"}} >
        AMJAD
    </Typography>
    <div className='icon'>
    <IconButton className='icon' aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/amjad-maqsouma-54bb91234/')}>
    <GitHubIcon/>
    </IconButton>

    <IconButton className='icon' aria-label="Linkedin.com" onClick={() => window.open('https://github.com/amjadmak')}>
    <LinkedInIcon/>
    </IconButton>
    
    </div>
    </div>
        <Divider style={{ borderColor: "#ffffff"}} sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        
        <div className='footer'>
        <Typography variant="h7" sx={{color:'#ffff' ,flexGrow: "1",cursor: "pointer"}} >
        GHUFRAN
    </Typography>
    <div className='icon'>
    <IconButton className='icon' aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/ghofran-adel-9222a4208/')}>
    <GitHubIcon/>
    </IconButton>

    <IconButton className='icon' aria-label="Linkedin.com" onClick={() => window.open('https://github.com/ghufran-adel')}>
    <LinkedInIcon/>
    </IconButton>
    
    </div>
    </div>
        <Divider style={{ borderColor: "#ffffff"}}  sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <div className='footer'>
        <Typography variant="h7" sx={{color:'#ffff' ,flexGrow: "1",cursor: "pointer"}} >
        ABDU
    </Typography>
    <div className='icon'>
    <IconButton className='icon' aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/amjad-maqsouma-54bb91234/')}>
    <GitHubIcon/>
    </IconButton>

    <IconButton className='icon' aria-label="Linkedin.com" onClick={() => window.open('https://github.com/amjadmak')}>
    <LinkedInIcon/>
    </IconButton>
    
    </div>
    </div>
    
        </Toolbar>
        </BottomNavigation>
        </>
    )
}
export default Footer;