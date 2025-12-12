import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'         
import Layout from './components/Layout.jsx'
import Home from './pages/home.jsx'
import Quisommesnous from './pages/quisommesnous.jsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Qui_sommes_nous" element={<Quisommesnous />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)