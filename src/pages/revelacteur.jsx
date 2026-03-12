import clsx from 'clsx';
import React, { useState } from 'react';
import Newsletter from '../components/newsletter';
import Button from '../components/outils/buttons';
import { motion } from 'framer-motion';

import HeroMaquette from '../img/revelacteur1.png' 
import DesignSystem from '../img/revelacteur2.png'
import MobileView from '../img/revelacteur3.png'

const animationverslehautnewslettter = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const animationversladroitequi = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const animationverslagauchequi = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Infor() {
  return (
    <section className="max-w-[90%] md:max-w-[75%] mx-auto py-10 md:py-20 flex flex-col">
      
      {/* Titre Projet */}
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className="font-clash text-5xl md:text-8xl font-semibold text-noirpolariz uppercase leading-tight">
        Révél'Acteur
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15'>  
        <hr className="border-noirpolariz border-t-2" />
        
        {/* Infos Services & Année */}
        <div className='pt-6 md:pt-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>Design UI/UX & Stratégie Digitale<br/>Association Culturelle</p>
          <p>Année 2025 - 2026</p>
        </div>

        {/* Textes descriptifs */}
        <div className="w-full md:max-w-[65%] flex flex-col md:flex-row gap-6 md:gap-10 mt-10 md:ml-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='flex flex-col md:flex-row gap-6 font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed'>
            <p className='font-clash'>Rével'Acteur est une association dédiée à l'épanouissement par le théâtre. Cette maquette Figma a été conçue pour offrir une plateforme d'accueil chaleureuse au grand public et un espace d'engagement clair pour les futurs bénévoles.</p>
            <p className='font-clash'>L'expérience utilisateur a été pensée pour refléter les valeurs de confiance et de dynamisme de l'association, intégrant des modules innovants comme les flux Live Twitch et des sections Podcast.</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={HeroMaquette} className="w-full object-cover h-[300px] md:h-auto" />
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15 w-full md:max-w-[65%]'>  
        <hr className="border-noirpolariz border-t-2" />
        <div className='py-6 md:py-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>CONCEPTION FIGMA</p>
          <p>EN PRÉPARATION</p>
        </div>
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={DesignSystem} className="w-full h-auto" />
        <p className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed mt-6'>
          La charte graphique utilise des formes organiques et des couleurs vives pour inviter à l'action et à la rencontre, tout en structurant l'information pour faciliter le bénévolat.
        </p>
      </motion.div>

      {/* Section Duo Texte/Image */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='flex flex-col'>
        <div className="w-full md:max-w-[85%] mt-10 md:mt-20 flex flex-col md:flex-row items-start md:ml-auto gap-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed md:w-[50%]'>
            <p className='mb-5 font-regular'>Le futur site web servira de hub central, connectant les réseaux sociaux (Facebook, Twitch) à une interface de contact simplifiée pour recruter de nouveaux "acteurs" du changement.</p>
            <p className='mb-8 font-regular'>Focus UX : Accessibilité, clarté des appels à l'action (CTA) et mise en avant des témoignages pour instaurer une relation de confiance immédiate.</p>
            
            <a 
                href="https://drive.google.com/file/d/17Q6uXTz9A3hkUNPLbEguFU_WkkUISk9X/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
            >
                <Button variant="secondary">
                  <span className="flex items-center gap-2 uppercase font-bold text-sm tracking-widest">
                      Explorer la maquette Figma
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </span>
                </Button>
            </a>
          </motion.div>
          
          <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslagauchequi} src={MobileView} className="w-full md:w-[50%] h-auto shadow-lg"/>
        </div>
      </motion.div>

    </section>
  )
}

function detailrevelacteur() {
    return (
        <div className='bg-headers min-h-screen overflow-x-hidden'>
            <main>
                <Infor/>  
                <Newsletter/>
            </main>
        </div>
    )
}

export default detailrevelacteur;