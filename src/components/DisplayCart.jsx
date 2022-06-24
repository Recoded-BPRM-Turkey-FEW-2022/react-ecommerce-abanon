// I think here we will display cart items and then we will display the total price.
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';


const DisplayCart = ({data,mutation})=>{

    
// console.log(data)

return (

<>
<button onClick={()=>{console.log(data)
    ; mutation(data[0])}}>
Clik me 
</button>

{data.map((Item)=>{
    return (
    <>
    
    <List  sx={{ ml:14 , width: '100%', maxWidth: '70%' , bgcolor: 'background.paper' , }}>
      <ListItem sx={{maxWidth:'100%'}} alignItems="center">
        <ListItemAvatar >
          <Avatar style = {{width:'100px', height: '100px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText sx={{ml:10 , mt:1}}
          primary= "title"
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
                
               price {data.price} 
              </Typography>
              
            </React.Fragment>
            
          }
        />
        <Button  size="small" color="primary">
              Remove 
        </Button>
        
              
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
    
    
    </>
    )
})}

   

</>

)

}

export default DisplayCart ; 