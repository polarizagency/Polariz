import clsx from 'clsx';
import React, { useState } from 'react';
import Newsletter from '../components/newsletter';
import Button from '../components/outils/buttons';
import { motion } from 'framer-motion';

// Tes imports d'images
import GenstravailleIMG from '../img/draw-1.webp'
import HommebureauIMG from '../img/draw-2.webp'
import TestIMG from '../img/draw-3.webp'

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
        Draw Vision
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15'>  
        <hr className="border-noirpolariz border-t-2" />
        
        {/* Infos Services & Année */}
        <div className='pt-6 md:pt-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>Application Mobile VR<br/>Réalité Virtuelle & Création 3D</p>
          <p>Année 2024</p>
        </div>

        {/* Textes descriptifs - Draw Vision VR */}
        <div className="w-full md:max-w-[65%] flex flex-col md:flex-row gap-6 md:gap-10 mt-10 md:ml-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='flex flex-col md:flex-row gap-6 font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed'>
            <p className='font-clash'>Draw Vision est une application mobile innovante conçue pour projeter les œuvres des artistes dans un environnement immersif en réalité virtuelle. Elle offre une nouvelle dimension de création où l’imaginaire prend forme dans un espace virtuel tangible.</p>
            <p className='font-clash'>L'application permet aux amateurs comme aux professionnels de concevoir, modifier et visualiser leurs projets en temps réel grâce à une interface de création intégrée, facilitant l'interaction directe avec l'espace 3D.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Pleine Largeur */}
      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={GenstravailleIMG} className="w-full object-cover h-[300px] md:h-auto" />
      
      {/* Section Intermédiaire */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15 w-full md:max-w-[65%]'>  
        <hr className="border-noirpolariz border-t-2" />
        <div className='py-6 md:py-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>IMMERSION & FLEXIBILITÉ</p>
          <p>2024</p>
        </div>
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={HommebureauIMG} className="w-full h-auto" />
        <p className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed mt-6'>
          La force de Draw Vision réside dans sa capacité à importer des fichiers externes, permettant aux professionnels de visualiser leurs concepts et modèles complexes directement dans l'espace virtuel.
        </p>
      </motion.div>

      {/* Section Duo Texte/Image - Focus technique */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='flex flex-col'>
        <div className="w-full md:max-w-[85%] mt-10 md:mt-20 flex flex-col md:flex-row items-start md:ml-auto gap-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed md:w-[50%]'>
            <p className='mb-5 font-regular'>Que ce soit pour de l'expression artistique pure ou de la visualisation de concepts industriels, l'application garantit une transition fluide entre la conception 2D et l'immersion VR.</p>
            <p className='mb-8 font-regular'>Avec Draw Vision, la création artistique entre dans une nouvelle ère, rendant l'espace virtuel accessible à tous les créateurs.</p>
            
            <a 
                href="https://www.hephagency.fr/projects/work/draw-vision" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
            >
                <Button variant="secondary">
                  <span className="flex items-center gap-2 uppercase font-bold text-sm tracking-widest">
                      Voir le projet en ligne
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </span>
                </Button>
            </a>
          </motion.div>
          
          <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslagauchequi} src={TestIMG} className="w-full md:w-[50%] h-auto shadow-lg"/>
        </div>
      </motion.div>

    </section>
  )
}

function detaildrawvision() {
    return (
        <div className='bg-headers min-h-screen overflow-x-hidden'>
            <main>
                <Infor/>  
                <Newsletter/>
            </main>
        </div>
    )
}

export default detaildrawvision;