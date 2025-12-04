import clsx from 'clsx';
import { Link} from 'react-router-dom';


import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../img/Logo fond blanc.png';




function Headerq() {
  return (
    <nav className="w-full bg-polariz-header border-b border-gray-200 overflow-hidden relative">
   
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 md:py-3">
        
        <h1 className="font-clash text-3xl md:text-4xl font-semibold text-noirpolariz mb-4 md:mb-0">
          POLARIZ AGENCY
        </h1>
        
        <div className='flex flex-wrap justify-center md:flex-row items-center space-x-4 md:space-x-6 font-clash text-sm md:text-base'>
          <p className="text-noirpolariz cursor-pointer hover:opacity-70"> ACCUEIL</p>
          <p className="text-noirpolariz cursor-pointer hover:opacity-70"> PROJET </p>
          <p className="text-noirpolariz cursor-pointer hover:opacity-70"> À PROPOS </p>
          <p className="text-noirpolariz cursor-pointer hover:opacity-70"> CONTACT </p>
        </div>
      </div>
      <h1 className="font-clash text-4xl md:text-6xl font-semibold text-noirpolariz w-full md:w-[550px] text-center md:text-left mx-auto md:ml-24 py-8 px-4 md:px-1">
        web développement & branding
      </h1>
    
    
      <div className="flex justify-center md:justify-end px-4 md:px-0">
        <p className="font-manrope text-base md:text-lg text-noirpolariz text-center md:text-left w-full md:w-[550px] py-1 px-1 md:mr-24">
            Notre approche mêle stratégie, design et contenu pour donner vie à des outils cohérents, utiles et inspirants. Nous ne créons pas seulement des sites : nous révélons des identités.    
        </p>
      </div>
    
      
      <div className="flex justify-center items-center p-5 mt-10 md:mt-0">
        <h1 className="font-clash text-[18vw] md:text-[22rem] font-bold text-headers opacity-40 leading-none select-none">
          POLARIZ
        </h1>
      </div>

    </nav>
  )
}
    
function Footerq() {
  return (
    <footer className="bg-headers text-noirpolariz">
      footer
    </footer>
  );
}

// Petit composant helper pour les icônes (évite de répéter le SVG)
function SocialIcon({ path }) {
  return (
    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-black transition-all duration-300">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

function Layout() {
  return (
    <>
    <div>
      <Headerq />
     <main>
     <Outlet />
     </main>


       
      <Footerq />
    </div>    
    </>
  )
}

export default Layout;