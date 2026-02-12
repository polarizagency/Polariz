import React from 'react';
import travailImg from '../img/travail.jpg';
import { motion } from 'framer-motion';

const animationverslehaut = {
  hidden: { opacity: 0, y: 50 }, // Réduit pour une sensation plus fluide sur mobile
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function Pourquoi() {
  return (
   <section className="w-full py-12 md:py-20 px-4 overflow-hidden">
    {/* Bloc 1 : Titre et introduction */}
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={animationverslehaut} 
      className="max-w-[90%] md:max-w-[75%] mx-auto flex flex-col items-start justify-start"
    >
      <h2 className="font-clash text-5xl md:text-8xl font-semibold text-white uppercase leading-tight mb-10 text-left">
        WHY BEFORE <br /> WHAT
      </h2> 
      
      {/* Passage de 60% à 100% sur mobile pour la lisibilité */}
      <div className='w-full md:max-w-[60%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 font-manrope text-gray-300 text-base md:text-lg leading-relaxed'>
          <p>
            Chaque marque a une histoire, une intention, une énergie. Notre mission est de la rendre visible à travers des outils digitaux qui parlent juste, plutôt que fort.
          </p>
          <p>
            Avant de parler technologie ou performance, nous travaillons le sens, la cohérence et la valeur humaine qui donnent du poids à chaque projet.
          </p>
      </div>
    </motion.div>

    {/* Bloc 2 : Image et citation (Aligné à droite) */}
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={animationverslehaut} 
      className="max-w-[90%] md:max-w-[75%] mx-auto flex flex-col items-end justify-end mt-20"
    >
      {/* Sur mobile, on repasse en largeur quasi-totale */}
      <div className='w-full md:max-w-[50%]'>
        <img src={travailImg} className='w-full h-[250px] md:h-[300px] object-cover rounded-sm' alt="l'entreprise qui travaille" />
        <div className="mt-7 space-y-4">
          <p className="text-base md:text-lg font-manrope text-gray-300 text-left"> 
            Dans un monde saturé d’images et de messages, nous croyons à la valeur du sens.
          </p> 
          <p className="font-manrope text-gray-300 text-left text-base md:text-lg opacity-80">
            Chaque mot, chaque visuel, chaque ligne de code doit servir une intention : rendre le message plus humain et plus juste. 
          </p>
        </div>
      </div>
    </motion.div>

    {/* Bloc 3 : Conclusion (Aligné à gauche) */}
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={animationverslehaut} 
      className="max-w-[90%] md:max-w-[75%] mx-auto flex flex-col items-start justify-start mt-20"
    >
      <div className='w-full md:max-w-[65%]'>
        <h3 className="font-clash text-3xl md:text-7xl font-semibold text-white leading-tight mb-8 text-left">
          Donner du sens à la lumière que l’on diffuse.
        </h3> 
        <div className="space-y-4">
          <p className="text-base md:text-lg font-manrope text-gray-300 text-left"> 
            Polariz, c’est l’idée que le numérique doit éclairer, pas éblouir. Nous aidons les entreprises à se recentrer sur leur raison d’être pour créer des expériences digitales sincères, utiles et émotionnellement fortes.
          </p> 
          <p className="font-manrope text-gray-300 text-left text-base md:text-lg mt-2 opacity-80">
            Chaque projet devient une polarisation : un focus sur ce qui compte vraiment. Mettre en lumière l’essentiel, c’est notre manière de donner du sens à la création numérique. 
          </p>
        </div>
      </div>
    </motion.div>
  </section>
  )
}

function PourquoiavantleQuoi() {
  return (
    <div className='bg-noirpolariz'>
      <Pourquoi/>  
    </div>    
  )
}

export default PourquoiavantleQuoi;