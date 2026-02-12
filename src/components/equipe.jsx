import React from 'react';
import RemiIMG from '../img/remi.png';
import CelestineIMG from '../img/celestine.png';
import FanieIMG from '../img/fanie.png';
import ArthurIMG from '../img/arthur.png';
import EmilienIMG from '../img/emilien.png';
import { motion } from 'framer-motion';

const slidededroiteàgauche = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const containerdroiteàgaucheVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, }
  }
};

const valeurdroiteàgaucheVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4 } 
  }
};

function Equipe() {
  return (
    <section className="w-full py-20 overflow-hidden">
      <div className='max-w-[90%] md:max-w-[75%] mx-auto'>
        <motion.h2 
          className="font-clash text-5xl md:text-8xl font-semibold text-white uppercase leading-tight text-start mb-4"
          initial="hidden"
          variants={slidededroiteàgauche}
          whileInView="visible" viewport={{ once: true }} 
        >
          NOTRE ÉQUIPE
        </motion.h2>
        <motion.p initial="hidden"
          variants={slidededroiteàgauche} whileInView="visible" viewport={{ once: true }}  
          className='max-w-full md:max-w-[60%] text-start text-xl leading-relaxed font-manrope text-white'
        >
          Derrière chaque pixel et chaque ligne de code se cachent des talents complémentaires, prêts à transformer vos idées en expériences mémorables. </motion.p>
        <motion.span initial="hidden"
          variants={slidededroiteàgauche} whileInView="visible" viewport={{ once: true }}  
          className='border-b border-white block w-full my-15'> </motion.span>
      </div>

      <div className="w-full md:max-w-[75%] mx-auto">
        <div className='md:max-w-[70%] ml-auto'>
          <motion.div 
            variants={containerdroiteàgaucheVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            /* Carrousel mobile : flex / Desktop : ta grille originale */
            className='flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-4 text-white px-6 md:px-0 no-scrollbar'
          >

            <motion.div variants={valeurdroiteàgaucheVariants} className='flex-shrink-0 w-[80vw] md:w-auto snap-center md:col-start-1 relative'>
              <img src={RemiIMG} alt='photo de Rémi' className='w-full h-full object-cover border border-white' />
              <div className="absolute top-3 left-3 md:top-4 md:left-4 font-manrope text-white">
                <p className="text-xl font-semibold leading-tight"> Rémi Edmond</p>
                <p className="text-sm md:text-base opacity-80 leading-tight"> Dev Back</p>
              </div>
            </motion.div>

            <motion.div variants={valeurdroiteàgaucheVariants} className='flex-shrink-0 w-[80vw] md:w-auto snap-center md:col-start-2 relative'>
              <img src={CelestineIMG} alt='photo de Célestine' className='w-full h-full object-cover border border-white' />
              <div className="absolute top-3 left-3 md:top-4 md:left-4 font-manrope text-white">
                <p className="text-xl font-semibold leading-tight"> Célestine Mahieux</p>
                <p className="text-sm md:text-base opacity-80 leading-tight"> Front Dev/Web Designer</p>
              </div>
            </motion.div>

            <motion.div variants={valeurdroiteàgaucheVariants} className='flex-shrink-0 w-[80vw] md:w-auto snap-center md:col-start-3 relative'>
              <img src={FanieIMG} alt='photo de Fanie' className='w-full h-full object-cover border border-white' />
              <div className="absolute top-3 left-3 md:top-4 md:left-4 font-manrope text-white">
                <p className="text-xl font-semibold leading-tight"> Fanie Bugenne</p>
                <p className="text-sm md:text-base opacity-80 leading-tight"> Cheffe de Projet/Dev Back</p>
              </div>
            </motion.div>

            <motion.div variants={valeurdroiteàgaucheVariants} className='flex-shrink-0 w-[80vw] md:w-auto snap-center md:col-start-2 md:row-start-2 relative'>
              <img src={ArthurIMG} alt='photo de Arthur' className='w-full h-full object-cover border border-white' />
              <div className="absolute top-3 left-3 md:top-4 md:left-4 font-manrope text-white">
                <p className="text-xl font-semibold leading-tight"> Arthur Carré</p>
                <p className="text-sm md:text-base opacity-80 leading-tight"> Front Dev/ Web Designer</p>
              </div>
            </motion.div>

            <motion.div variants={valeurdroiteàgaucheVariants} className='flex-shrink-0 w-[80vw] md:w-auto snap-center md:col-start-3 md:row-start-2 relative'>
              <img src={EmilienIMG} alt="photo d'Emilien" className='w-full h-full object-cover border border-white' />
              <div className="absolute top-3 left-3 md:top-4 md:left-4 font-manrope text-white">
                <p className="text-xl font-semibold leading-tight"> Emilien Grand</p>
                <p className="text-sm md:text-base opacity-80 leading-tight"> Web Designer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className='max-w-[90%] md:max-w-[75%] mx-auto'>
          <motion.span initial="hidden" variants={slidededroiteàgauche} whileInView="visible" viewport={{ once: true }}  className='border-b border-white block w-full my-15'> </motion.span>
        </div>
      </div>
    </section>
  )
}

function Equi() {
  return (
    <div className='bg-noirpolariz'>
      <Equipe />
    </div>
  )
}

export default Equi;