import React from 'react';
import Navbar from './components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import './App.css'
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <>
    <Box className="App">
   <Navbar/>
   {/* <AllRoutes/> */}
    </Box>
  
  
    </>
  );
}

export default App;
