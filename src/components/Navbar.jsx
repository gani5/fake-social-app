import React, { useState } from 'react'
import { AppBar, Box, Typography,Badge, styled,InputBase, Toolbar, Avatar,MenuItem,Menu, Switch } from '@mui/material'
import { Mail, Notifications,AddCircle, FacebookOutlined} from '@mui/icons-material'

const StyledToolbar=styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  position:'-webkit-sticky'

})

const Search= styled("div")(({theme})=>({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius:'5px',
  width:'40%'
}))

const Icons= styled(Box)(({theme})=>({
  display:'none',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.up("sm")]:{
    display:'flex'
  }

}))

const UserBox=styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }

}))

function Navbar({mode,setMode}) {

  const [open,setOpen]=useState(false)
  
  return (
    <Box>
      <AppBar position='fixed'>
        <StyledToolbar>

          <Typography 
          variant='h6'
          sx={{display:{xs:'none', sm:'block'}}}
          >G-BOOK</Typography>
          <FacebookOutlined sx={{display:{xs:'block',sm:'none'}}} />
          <Search>
            <InputBase placeholder='searching...'></InputBase>
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
                <Notifications style={{color:'white'}}/>
            </Badge>
            <Badge badgeContent={2} color="error">
                <Mail style={{color:'white'}}/>
            </Badge>
            <Avatar 
            sx={{height:'30px',width:'30px'}} 
            onClick={e=>setOpen(true)}
            />
            
          </Icons>
          <Switch 
              onChange={e=>setMode(mode==='light'?'dark':'light')}
              sx={{display:{xs:'block',sm:'none'}}}
              color='warning'
          />
          <UserBox onClick={e=>setOpen(true)}>
            <Avatar sx={{height:'30px',width:'30px'}} />
            <Typography variant='span'>Gopii</Typography>
            
          </UserBox>
        </StyledToolbar>
        
          <Menu
           id='demo-positioned-menu'
           aria-labelledby='demo-positioned-avatar'
           open={open}
           onClose={e=>setOpen(false)}
           anchorOrigin={{
            vertical:"top",
            horizontal:"right"
           }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
     
      </AppBar>
    </Box>
  )
}

export default Navbar
