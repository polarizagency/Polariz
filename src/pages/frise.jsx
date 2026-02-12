import clsx from 'clsx';
import React, { useState } from 'react';
import Detailprojetp1 from '../components/detailprojetp1';
import Newsletter from '../components/newsletter';

import Button from '../components/outils/buttons';

import { motion } from 'framer-motion';
import Frise2 from '../img/frise2.png'
import HommebureauIMG from '../img/doumerge.png'
import TestIMG from '../img/charles2.png'

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

// ... tes imports restent identiques

function Infor() {
  return (
    <section className="max-w-[90%] md:max-w-[75%] mx-auto py-10 md:py-20 flex flex-col">
      
      {/* Titre Projet */}
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className="font-clash text-4xl md:text-8xl font-semibold text-noirpolariz uppercase leading-tight">
        Frise Chronologique
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15'>  
        <hr className="border-noirpolariz border-t-2" />
        
        {/* Infos Services & Année */}
        <div className='pt-6 md:pt-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>Développement Front-end<br/> Svelte</p>
          <p>Année 2026</p>
        </div>

        {/* Textes descriptifs - Concept Frise */}
        <div className="w-full md:max-w-[65%] flex flex-col md:flex-row gap-6 md:gap-10 mt-10 md:ml-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='flex flex-col md:flex-row gap-6 font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed'>
            <p className='font-clash'>Ce projet est une exploration de la linéarité temporelle. Nous avons conçu une interface où le temps ne se contente pas de défiler, mais se parcourt comme une véritable histoire interactive, fluide et intuitive.</p>
            <p className='font-clash'>L'enjeu technique résidait dans la gestion de la performance lors des transitions horizontales, garantissant une immersion totale sans rupture visuelle pour l'utilisateur.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Pleine Largeur */}
      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={Frise2} className="w-full object-cover h-[300px] md:h-auto" />
      
      {/* Section Intermédiaire */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15 w-full md:max-w-[65%]'>  
        <hr className="border-noirpolariz border-t-2" />
        <div className='py-6 md:py-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>POLARIZ AGENCY</p>
          <p>2026</p>
        </div>
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={HommebureauIMG} className="w-full h-auto" />
        <p className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed mt-6'>
          L'esthétique minimaliste a été choisie pour laisser toute la place au contenu, transformant une simple frise chronologique en un outil de storytelling puissant.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='flex flex-col'>
        <div className="w-full md:max-w-[85%] mt-10 md:mt-20 flex flex-col md:flex-row items-start md:ml-auto gap-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed md:w-[50%]'>
            <p className='mb-5 font-regular'>Chaque étape clé est mise en valeur par des micro-interactions délicates, permettant une lecture à plusieurs niveaux, de la vue d'ensemble au détail le plus précis.</p>
            <p className='mb-8 font-regular'>Une solution technique sur mesure pour rendre l'information accessible et captivante.</p>
            
            <a 
                href="https://frise-chronologique-self.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
            >
                <Button variant="secondary">
                  <span className="flex items-center gap-2 uppercase font-bold text-sm tracking-widest">
                      Explorer la frise
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </span>
                </Button>
            </a>
          </motion.div>
          
          <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslagauchequi} src={TestIMG} className="w-full md:w-[40%] h-auto shadow-lg"/>
        </div>

        <motion.hr initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslebasnewslettter} className="border-noirpolariz border-t-2 mt-16 md:mt-30"/>
      </motion.div>

    </section>
  )
}

function detailfrise() {
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

export default detailfrise;