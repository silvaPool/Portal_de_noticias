import React, { useEffect, useState } from "react";
import api from "./services/api";
import './App.css'
import Pagina from "./components/Pagina";
import Sessao1 from "./components/Sessao1";
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material'
import Elvis from './assets/images/elvis.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Noticias from "./pages/Noticias";


function App() {



  return (
    <>

      <ThemeProvider theme={theme}>




        <BrowserRouter>


          <Routes>
            <Route exact path="/" element={<Pagina />} />
            <Route exact path="/sessao1" element={<Sessao1 />} />
            <Route path="/noticias/:type" element={<Noticias />} />
          </Routes>


        </BrowserRouter>



      </ThemeProvider>



    </>
  )
}

export default App