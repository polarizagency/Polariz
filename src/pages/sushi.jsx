import clsx from 'clsx';
import React, { useState } from 'react';
import Newsletter from '../components/newsletter';
import Button from '../components/outils/buttons';
import { motion } from 'framer-motion';

// Tes imports d'images spécifiques
import SushiHero from '../img/sushi-1.webp'
import SushiInterface from '../img/sushi-2.webp'
import SushiMobile from '../img/sushi-3.webp'

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
        Sushi App
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15'>  
        <hr className="border-noirpolariz border-t-2" />
        
        {/* Infos Services & Année */}
        <div className='pt-6 md:pt-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>Développement Mobile<br/>UX / UI Design</p>
          <p>2025</p>
        </div>

        {/* Textes descriptifs - Sushi App */}
        <div className="w-full md:max-w-[65%] flex flex-col md:flex-row gap-6 md:gap-10 mt-10 md:ml-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='flex flex-col md:flex-row gap-6 font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed'>
            <p className='font-clash'>Sushi App est une application mobile de commande pensée pour offrir une expérience utilisateur fluide, moderne et intuitive. L'approche centrée sur l'utilisateur permet de parcourir les menus et de personnaliser ses commandes en quelques clics.</p>
            <p className='font-clash'>Ce projet a permis d'explorer les meilleures pratiques du secteur de la restauration rapide, en répondant à des problématiques concrètes d'ergonomie mobile et d'efficacité du parcours d'achat.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Pleine Largeur */}
      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={SushiHero} className="w-full object-cover h-[300px] md:h-auto" />
      
      {/* Section Intermédiaire */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='py-10 md:py-15 w-full md:max-w-[65%]'>  
        <hr className="border-noirpolariz border-t-2" />
        <div className='py-6 md:py-10 text-noirpolariz font-manrope text-sm md:text-lg leading-relaxed uppercase flex flex-row justify-between'>
          <p>IDENTITÉ GRAPHIQUE</p>
          <p>MINIMALISME</p>
        </div>
        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} src={SushiInterface} className="w-full h-auto" />
        <p className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed mt-6'>
          Le design visuel mise sur une identité graphique cohérente et esthétique, mettant en valeur les produits tout en assurant une navigation agréable et sans friction.
        </p>
      </motion.div>

      {/* Section Duo Texte/Image - Conclusion */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautnewslettter} className='flex flex-col'>
        <div className="w-full md:max-w-[85%] mt-10 md:mt-20 flex flex-col md:flex-row items-start md:ml-auto gap-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed md:w-[50%]'>
            <p className='mb-5 font-regular'>Sushi App illustre une capacité à concevoir des interfaces fonctionnelles et esthétiques, en plaçant l'expérience utilisateur au cœur de la démarche de design.</p>
            <p className='mb-8 font-regular'>L'interface claire facilite la personnalisation des menus, garantissant un parcours utilisateur optimisé du choix du produit jusqu'au paiement final.</p>
            
            <Button variant="secondary">
              <span className="flex items-center gap-2 uppercase font-bold text-sm tracking-widest">
                  Découvrir l'étude UX
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </span>
            </Button>
          </motion.div>
          
          <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslagauchequi} src={SushiMobile} className="w-full md:w-[50%] h-auto shadow-lg"/>
        </div>
      </motion.div>

    </section>
  )
}

function detailsushiapp() {
    return (
        <div className='bg-headers min-h-screen overflow-x-hidden'>
            <main>
                <Infor/>  
                <Newsletter/>
            </main>
        </div>
    )
}

export default detailsushiapp;