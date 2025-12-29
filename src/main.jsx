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
import Lesprojets from './pages/lesprojets.jsx'
import Layoutblack from './components/Layoutblack.jsx'
import Message from './pages/message.jsx'
import ProjetenDetail from './pages/projetendetail.jsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />} >
          <Route path="/Qui_sommes_nous" element={<Quisommesnous />} />
          <Route path="/Projet_en_detail" element={<ProjetenDetail />} />
          
        </Route>
        <Route element={<Layoutblack />} >
          <Route path="/Nos_projets" element={<Lesprojets />} />
          <Route path="/Contact" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)