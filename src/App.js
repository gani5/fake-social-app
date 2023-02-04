import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Data from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import { useState } from "react";


function App() {
  const [mode,setMode]=useState('dark')

  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme} >
      <Box bgcolor={'background.default'} color='text.primary'>
        <Navbar mode={mode} setMode={setMode}/>
        <Stack spacing={2} direction='row' justifyContent='space-between' >
          <Sidebar mode={mode} setMode={setMode}/>
          <Data />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
