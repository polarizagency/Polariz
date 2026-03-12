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
import Sweetriot from './pages/sweetriot.jsx'
import Frise from './pages/frise.jsx'
import Heph from './pages/hephagency.jsx'
import Portfoliocelestine from './pages/portfoliocelestine.jsx'
import BolaertBusiness from './pages/bollaertbusiness.jsx'
import Escape from './pages/escapegame.jsx'
import Crochet from './pages/crochet.jsx'
import Karting from './pages/karting.jsx'
import BlindTest from './pages/blindtest.jsx'
import Draw from './pages/drawvision.jsx'
import Revelacteur from './pages/revelacteur.jsx'
import Sushi from './pages/sushi.jsx'

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
          <Route path="/sweetriot" element={<Sweetriot />} />
          <Route path="/frise" element={<Frise />} />
          <Route path="/hephagency" element={<Heph />} />
          <Route path="/portfoliocelestine" element={<Portfoliocelestine />} />
          
          <Route path="/Bollaert" element={<BolaertBusiness />} />
          <Route path="/Escape1" element={<Escape />} />
          <Route path="/crochet" element={<Crochet />} />
          <Route path="/betkarting" element={<Karting />} />
          <Route path="/blindtest" element={<BlindTest />} />
          <Route path="/drawvision" element={<Draw />} />
          <Route path="/revelacteur" element={<Revelacteur />} />
          <Route path="/sushiapp" element={<Sushi />}/>

          
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)