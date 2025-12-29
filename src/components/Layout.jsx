import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Button from './outils/buttons';




function Headerq() {
  return (
    <nav className="w-full bg-headers pb-5 overflow-hidden relative">
   
      <div className="max-w-[75%] mx-auto flex flex-col md:flex-row items-center justify-between pt-6 px-4 md:py-3">
        
        <h1 className="font-clash text-3xl md:text-4xl font-semibold text-noirpolariz mb-4 md:mb-0 text-center">
          POLARIZ AGENCY
        </h1>
        
        <div className='flex flex-wrap justify-center md:flex-row items-center space-x-4 md:space-x-6 font-clash text-sm md:text-base'>
          <a href='/' className="text-noirpolariz cursor-pointer hover:opacity-70"> ACCUEIL</a>
          <a href='/Nos_projets' className="text-noirpolariz cursor-pointer hover:opacity-70"> PROJET </a>
          <a href='/Qui_sommes_nous' className="text-noirpolariz cursor-pointer hover:opacity-70"> À PROPOS </a>
          <a href='/Contact' className="text-noirpolariz cursor-pointer hover:opacity-70"> CONTACT </a>
        </div>
      </div>
  
    </nav>
  )
}
    
function Footerq() {
  return (
    <footer className="w-full bg-polariz-header border-b border-gray-200 overflow-hidden relative">

      <div className='max-w-[75%] mx-auto flex flex-col pt-6 md:py-3'> 

        <h1 className=" max-w-[60%] uppercase font-manrope text-noirpolariz text-xl md:text-4xl font-semibold text-noirpolariz  text-start  py-8 " >Gummi bears shortbread lollipop lollipop cheesecake cupcake. Lemon drops wafer fruitcake jelly </h1>
    
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-17">
    
          <div className=" md:w-auto">
          <a href="/Contact" >            
            <Button variant="primary" className=" md:w-auto">
              NOUS CONTACTER
            </Button>
          </a>  
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-24 font-manrope">
        
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-noirpolariz text-xs uppercase mb-1">Email</p>
              <a href="mailto:polarizagency@gmail.com" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">
                polarizagency@gmail.com
              </a>
            </div>
            <div>
              <p className="text-noirpolariz text-xs uppercase mb-1">Numéro de téléphone</p>
              <a href="#" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">
                +33 6 83 03 29 01
              </a>
            </div>
          </div>

      <div className="flex flex-col gap-3">
        <a href="#" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">Instagram</a>
        <a href="#" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">LinkedIn</a>
        <a href="#" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">Behance</a>
      </div>

      <div className="flex flex-col gap-3">
        <a href="/" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">Accueil</a>
        <a href="/Nos_projets" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">Projet</a>
        <a href="/Qui_sommes_nous" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">À Propos</a>
        <a href="/Contact" className="text-noirpolariz font-medium hover:text-noirpolariz-foreground transition-colors">Contact</a>
      </div>

    </div>

  </div>
        <div className=' flex flex-row gap-6 text-noirpolariz hover:text-noirpolariz-foreground'>
            <p>©2026 POLARIZ</p>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
          </div>
  </div>
    </footer>
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