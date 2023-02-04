import { Box, Fab, Modal, Typography,styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'

import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"


const StyledModal=styled(Modal)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
})
const UserBox=styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  marginBottom:'10px'
  
})

function Add() {

  const [open,setOpen]=useState(false)
  return (
    <Box position="fixed" bottom={20} ml={{xs:'calc(50%)',sm:2}}>

        
            <Fab color="primary" aria-label="add" onClick={e=>setOpen(true)}>
                <AddIcon />
            </Fab>
            <StyledModal
              open={open}
              onClose={e=>setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box height={250} width={300} p={2} bgcolor={'background.default'} color='text.primary' borderRadius={5}>
                <Typography variant='h6' color={'gray'} textAlign='center'>Create Post</Typography>
                <UserBox>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"
                sx={{width:30, height:30}}
                />
                <Typography variant='span' fontWeight={400}>GopiKrishna</Typography>
                </UserBox>
                <TextField
                  id="standard-multiline-static"
                  multiline
                  rows={2}
                  placeholder="What's on your mind?"
                  variant="standard"
                  sx={{width:'100%'}}
                />
                <Stack direction={'row'} mb={2} mt={2} gap={1}>
                  <EmojiEmotions color='primary'/>
                  <Image color='secondary'/>
                  <VideoCameraBack color='success'/>
                  <PersonAdd color='error'/>
                </Stack>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                  <Button >POST</Button>
                  <Button sx={{width:'80px'}}><DateRange/></Button>
                  
                </ButtonGroup>
              </Box>
            </StyledModal>
    </Box>
  )
}

export default Add
