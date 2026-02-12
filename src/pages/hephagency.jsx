import clsx from 'clsx';
import React, { useState } from 'react';
import Newsletter from '../components/newsletter';

import Button from '../components/outils/buttons';

import { motion } from 'framer-motion';
import GenstravailleIMG from '../img/heph2.png'
import HommebureauIMG from '../img/heph4.png'
import TestIMG from '../img/heph3.png'

const animationverslehautnewslettter = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const animationverslebasnewslettter = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" }
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
        Heph Agency
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15'>  
        <hr className="border-noirpolariz border-t-2" />
        
        {/* Infos Services & Année */}
        <div className='pt-6 md:pt-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>Stratégie Digitale<br/> Développement & Design</p>
          <p>Année 2025</p>
        </div>

        {/* Textes descriptifs - Concept Heph Agency */}
        <div className="w-full md:max-w-[65%] flex flex-col md:flex-row gap-6 md:gap-10 mt-10 md:ml-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='flex flex-col md:flex-row gap-6 font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed'>
            <p className='font-clash'>Heph Agency incarne la fusion entre l'artisanat digital et la rigueur stratégique. Pour ce projet, l'objectif était de créer une plateforme qui reflète leur capacité à forger des identités uniques et durables pour leurs partenaires.</p>
            <p className='font-clash'>Nous avons misé sur une architecture épurée et une navigation fluide, permettant de mettre en avant l'expertise métier de l'agence tout en garantissant une expérience utilisateur irréprochable.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Pleine Largeur */}
      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={GenstravailleIMG} className="w-full object-cover h-[300px] md:h-auto" />
      
      {/* Section Intermédiaire */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15 w-full md:max-w-[65%]'>  
        <hr className="border-noirpolariz border-t-2" />
        <div className='py-6 md:py-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>POLARIZ AGENCY</p>
          <p>2025</p>
        </div>
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={HommebureauIMG} className="w-full h-auto" />
        <p className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed mt-6'>
          Le design souligne une approche "Premium", où chaque détail visuel sert un discours de marque fort et une clarté d'information optimale.
        </p>
      </motion.div>

      {/* Section Duo Texte/Image - Lien vers Heph Agency */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='flex flex-col'>
        <div className="w-full md:max-w-[85%] mt-10 md:mt-20 flex flex-col md:flex-row items-start md:ml-auto gap-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed md:w-[50%]'>
            <p className='mb-5 font-regular'>La plateforme a été pensée comme un outil de conversion performant, alliant esthétique moderne et technologies web de pointe pour un temps de chargement minimal.</p>
            <p className='mb-8 font-regular'>Un écrin digital sur-mesure pour une agence tournée vers l'excellence.</p>
            
            {/* BOUTON VERS LE SITE EXTERNE */}
            <a 
                href="https://www.hephagency.fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
            >
                <Button variant="secondary">
                  <span className="flex items-center gap-2 uppercase font-bold text-sm tracking-widest">
                      Visiter l'agence
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </span>
                </Button>
            </a>
          </motion.div>
          
          <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslagauchequi} src={TestIMG} className="w-full md:w-[50%] h-auto shadow-lg"/>
        </div>

        <motion.hr initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslebasnewslettter} className="border-noirpolariz border-t-2 mt-16 md:mt-30"/>
      </motion.div>

    </section>
  )
}

function detailheph() {
    return (
        <>
            <div >
                <main>
                     <div className='bg-headers min-h-screen overflow-x-hidden'>
                        <Infor/>  
                    </div>  
                    <Newsletter/>
                </main>
            </div>
        </>
    )
}

export default detailheph;