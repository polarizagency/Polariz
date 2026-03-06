
import clsx from 'clsx';
import React, { useState } from 'react';
import Detailprojetp1 from '../components/detailprojetp1';
import Newsletter from '../components/newsletter';
import Button from '../components/outils/buttons';
import { motion } from 'framer-motion';

// Garde tes imports d'images actuels ou remplace-les par tes photos de crochet
import feefef from '../img/faniecrochet2.png' 
import HommebureauIMG from '../img/faniecrochet1.png'
import TestIMG from '../img/faniecrochet3.png'

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

function Inforlationcrochet() {
  return (
    <section className="max-w-[90%] md:max-w-[75%] mx-auto py-10 md:py-20 flex flex-col">
      
      {/* Titre Projet */}
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className="font-clash text-5xl md:text-8xl font-semibold text-noirpolariz uppercase leading-tight">
        L'Art du Crochet
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15'>  
        <hr className="border-noirpolariz border-t-2" />
        
        {/* Infos Services & Année */}
        <div className='pt-6 md:pt-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>Créations Artisanales<br/>Patterns & Design Textile</p>
          <p>Année 2024</p>
        </div>

        {/* Textes descriptifs - Crochet Project */}
        <div className="w-full md:max-w-[65%] flex flex-col md:flex-row gap-6 md:gap-10 mt-10 md:ml-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='flex flex-col md:flex-row gap-6 font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed'>
            <p className='font-clash'>Ce projet explore l'univers du crochet à travers la création d'amigurumis et d'accessoires uniques. L'objectif est de transformer des fils de coton et de laine en objets tangibles, mêlant technique traditionnelle et esthétique moderne.</p>
            <p className='font-clash'>Chaque pièce est documentée pour partager le processus de fabrication, des diagrammes initiaux au choix des fibres, afin d'offrir une ressource complète pour la communauté créative.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Pleine Largeur */}
      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={feefef} className="w-full object-cover h-[300px] md:h-auto" />
      
      {/* Section Intermédiaire */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15 w-full md:max-w-[65%]'>  
        <hr className="border-noirpolariz border-t-2" />
        <div className='py-6 md:py-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>TECHNIQUE & MATÉRIAUX</p>
          <p>2024</p>
        </div>
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={HommebureauIMG} className="w-full h-auto" />
        <p className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed mt-6'>
          Un travail minutieux sur les mailles serrées et les augmentations invisibles permet d'obtenir des textures fluides et des formes précises.
        </p>
      </motion.div>

      {/* Section Duo Texte/Image - Focus technique */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='flex flex-col'>
        <div className="w-full md:max-w-[85%] mt-10 md:mt-20 flex flex-col md:flex-row items-start md:ml-auto gap-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed md:w-[50%]'>
            <p className='mb-5 font-regular'>Le dépôt GitHub sert de bibliothèque centrale pour les patterns. Chaque modèle inclut les instructions détaillées pour les différents types de points : maille en l'air, bride, et cercle magique.</p>
            <p className='mb-8 font-regular'>Matériel utilisé : Crochets ergonomiques, fils en coton bio et marqueurs de mailles pour un rendu professionnel.</p>
            
            <a 
                href="https://github.com/Fanfaneee/crochet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
            >
                <Button variant="secondary">
                  <span className="flex items-center gap-2 uppercase font-bold text-sm tracking-widest">
                      Voir les patterns sur GitHub
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

function detailcrochet() {
    return (
        <>
            <div >
                <main>
                     <div className='bg-headers min-h-screen overflow-x-hidden'>
                        <Inforlationcrochet/>  
                    </div>  
                    <Newsletter/>
                </main>
            </div>
        </>
    )
}

export default detailcrochet;