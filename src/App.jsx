import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Routing from './layout/routes/Routing';
export default function App() {
  return (
    <React.StrictMode>
          <BrowserRouter>
             <Routing />   
           </BrowserRouter>
      </React.StrictMode>
  )
}

