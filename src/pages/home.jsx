import clsx from 'clsx';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import des icônes
import NosValeurs from '../components/Valeurs';
import Newsletter from '../components/newsletter';
import PourquoiavantleQuoi from '../components/quoi';
import NosProjets from '../components/Nosprojets';
import Button from '../components/outils/buttons';

function Headerhome() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'PROJET', href: '/Nos_projets' },
    { name: 'À PROPOS', href: '/Qui_sommes_nous' },
    { name: 'CONTACT', href: '/Contact' },
  ];

  return (
    <nav className="w-full bg-polariz-header pb-10 overflow-hidden relative">
      {/* Barre de navigation principale */}
      <div className="max-w-[90%] md:max-w-[75%] mx-auto flex items-center justify-between pt-6 px-4 md:py-3 relative z-50">
        <h1 className="font-clash text-2xl md:text-4xl font-semibold text-noirpolariz">
          POLARIZ AGENCY
        </h1>
        
        {/* Menu Desktop - Visible uniquement sur md et + */}
        <div className='hidden md:flex items-center space-x-8 font-clash text-base'>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-noirpolariz hover:opacity-70 transition-opacity">
              {link.name}
            </a>
          ))}
        </div>

        {/* Bouton Burger - Visible uniquement sur mobile */}
        <button 
          className="md:hidden text-noirpolariz p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Overlay du Menu Mobile */}
      <div className={clsx(
        "fixed inset-0 bg-polariz-header backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
        isOpen ? "opacity-100 translate-x-0" : "opacity-100 translate-x-full pointer-events-none"
      )}>
        <div className="flex flex-col items-center space-y-10 font-clash text-3xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-noirpolariz hover:scale-110 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-[90%] md:max-w-[75%] mx-auto flex flex-col items-start relative z-10">
        <h3 className="font-clash text-4xl md:text-6xl font-semibold text-noirpolariz w-full md:w-[550px] text-left py-8 md:px-1">
          web développement & branding
        </h3>
      </div>
    
      <div className="flex justify-center md:justify-end px-6 md:px-0 relative z-10">
        <p className="font-manrope text-base md:text-lg text-noirpolariz text-left w-full md:w-[550px] py-1 md:mr-24">
            Notre approche mêle stratégie, design et contenu pour donner vie à des outils cohérents, utiles et inspirants. Nous ne créons pas seulement des sites : nous révélons des identités.    
        </p>
      </div>
    
      {/* Background Text */}
      <div className="w-full flex justify-center items-center pt-10 md:pt-20">
        <h1 className="font-clash text-[25vw] md:text-[23vw] font-bold text-headers opacity-40 leading-none select-none">
          POLARIZ
        </h1>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-polariz-header border-t border-gray-200 overflow-hidden relative">
      <div className='flex flex-col pt-10 px-6 md:px-10'> 
        <h1 className="w-full md:max-w-[60%] uppercase font-manrope text-xl md:text-4xl font-semibold text-noirpolariz text-left mb-10 leading-tight"> 
          Vous voulez vous distinguer sur le numérique ?
        </h1>
    
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
          <div className="w-full md:w-auto">
            <a href="/Contact">
              <Button variant="primary" className="w-full md:w-auto text-center py-4">
                NOUS CONTACTER
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-10 md:gap-24 font-manrope">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-noirpolariz text-[10px] uppercase mb-1 opacity-50 tracking-widest">Email</p>
                <a href="mailto:polarizagency@gmail.com" className="text-noirpolariz font-medium hover:opacity-70 transition-colors break-all">
                  polarizagency@gmail.com
                </a>
              </div>
              <div>
                <p className="text-noirpolariz text-[10px] uppercase mb-1 opacity-50 tracking-widest">Téléphone</p>
                <a href="tel:+33683032901" className="text-noirpolariz font-medium hover:opacity-70 transition-colors">
                  +33 6 83 03 29 01
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase opacity-50 tracking-widest">Social</p>
              <a href="#" className="text-noirpolariz font-medium hover:opacity-70 transition-opacity">Instagram</a>
              <a href="#" className="text-noirpolariz font-medium hover:opacity-70 transition-opacity">LinkedIn</a>
              <a href="#" className="text-noirpolariz font-medium hover:opacity-70 transition-opacity">Behance</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase opacity-50 tracking-widest">Navigation</p>
              <a href="/" className="text-noirpolariz font-medium hover:opacity-70 transition-opacity">Accueil</a>
              <a href="/Nos_projets" className="text-noirpolariz font-medium hover:opacity-70 transition-opacity">Projet</a>
              <a href="/Qui_sommes_nous" className="text-noirpolariz font-medium hover:opacity-70 transition-opacity">À Propos</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-t border-black/5 text-[11px] text-noirpolariz opacity-60'>
          <p>©2026 POLARIZ</p>
          <div className="flex flex-wrap gap-4">
            <p className="cursor-pointer hover:underline">Mentions légales</p>
            <p className="cursor-pointer hover:underline">Politique de confidentialité</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="antialiased selection:bg-noirpolariz selection:text-white">
      <Headerhome />
      <div className='min-h-screen'>
        <main>
          <PourquoiavantleQuoi/>
          <NosValeurs/>
          <NosProjets/> 
          <Newsletter/>
        </main>
      </div>   
      <Footer/> 
    </div>
  )
}

export default Home;