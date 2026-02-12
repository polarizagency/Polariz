import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import des icônes
import clsx from 'clsx';
import Button from './outils/buttons';

function Headerq() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'PROJET', href: '/Nos_projets' },
    { name: 'À PROPOS', href: '/Qui_sommes_nous' },
    { name: 'CONTACT', href: '/Contact' },
  ];

  return (
    <nav className="w-full bg-headers pb-5 overflow-hidden relative">
      {/* Container principal */}
      <div className="max-w-[90%] md:max-w-[75%] mx-auto flex items-center justify-between pt-6 px-4 md:py-3 relative z-50">
        
        <h1 className="font-clash text-2xl md:text-4xl font-semibold text-noirpolariz">
          POLARIZ AGENCY
        </h1>
        
        {/* Menu Desktop */}
        <div className='hidden md:flex items-center space-x-6 font-clash text-base'>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-noirpolariz cursor-pointer hover:opacity-70 transition-opacity">
              {link.name}
            </a>
          ))}
        </div>

        {/* Bouton Burger Mobile */}
        <button 
          className="md:hidden text-noirpolariz p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      <div className={clsx(
        "fixed inset-0 bg-headers/98 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col items-center space-y-8 font-clash text-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-noirpolariz"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footerq() {
  return (
    <footer className="w-full bg-polariz-header border-t border-gray-200 overflow-hidden relative">
      <div className='max-w-[90%] md:max-w-[75%] mx-auto flex flex-col pt-10 px-4 md:py-3'> 

        <h1 className="w-full md:max-w-[60%] uppercase font-manrope text-xl md:text-4xl font-semibold text-noirpolariz text-start py-8 leading-tight"> 
          Vous voulez vous distinguer sur le numérique ?
        </h1>
    
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
          <div className="w-full md:w-auto">
            <a href="/Contact">
              <Button variant="primary" className="w-full md:w-auto">
                NOUS CONTACTER
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-10 md:gap-24 font-manrope">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-noirpolariz text-[10px] uppercase mb-1 opacity-60 tracking-widest">Email</p>
                <a href="mailto:polarizagency@gmail.com" className="text-noirpolariz font-medium hover:opacity-70 break-all transition-colors">
                  polarizagency@gmail.com
                </a>
              </div>
              <div>
                <p className="text-noirpolariz text-[10px] uppercase mb-1 opacity-60 tracking-widest">Téléphone</p>
                <a href="tel:+33683032901" className="text-noirpolariz font-medium hover:opacity-70 transition-colors">
                  +33 6 83 03 29 01
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase opacity-60 tracking-widest md:hidden">Social</p>
              <a href="#" className="text-noirpolariz font-medium hover:opacity-70">Instagram</a>
              <a href="#" className="text-noirpolariz font-medium hover:opacity-70">LinkedIn</a>
              <a href="#" className="text-noirpolariz font-medium hover:opacity-70">Behance</a>
            </div>

            {/* Nav Rapide */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase opacity-60 tracking-widest md:hidden">Navigation</p>
              <a href="/" className="text-noirpolariz font-medium hover:opacity-70">Accueil</a>
              <a href="/Nos_projets" className="text-noirpolariz font-medium hover:opacity-70">Projet</a>
              <a href="/Qui_sommes_nous" className="text-noirpolariz font-medium hover:opacity-70">À Propos</a>
            </div>
          </div>
        </div>

        {/* Mentions et Copyright */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-t border-black/5 text-[11px] text-noirpolariz opacity-70'>
          <p>©2026 POLARIZ</p>
          <div className='flex flex-wrap gap-4'>
            <p className="hover:underline cursor-pointer">Mentions légales</p>
            <p className="hover:underline cursor-pointer">Politique de confidentialité</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headerq />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footerq />
    </div>
  );
}

export default Layout;