
import React, { useState } from 'react';
import Button from './outils/buttons';
import { motion } from 'framer-motion';
import GenstravailleIMG from '../img/gens_travail.jpg'
import HommebureauIMG from '../img/homme_bureau.jpg'
import TestIMG from '../img/test.jpg'

const animationverslehautnewslettter = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const animationverslebasnewslettter = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

const animationversladroitequi = {
  hidden: { opacity: 0, x: -70 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
const animationverslagauchequi = {
    hidden: { opacity: 0, x: 70 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Infor() {
  return (
   <section className="max-w-[75%] mx-auto py-20 flex flex-col">
   
               <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautnewslettter} className="font-clash text-5xl md:text-8xl font-semibold text-noirpolariz uppercase leading-tight">
                   Projet name
               </motion.h2>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautnewslettter} className='py-15'>  
                   <hr className=" border-noirpolariz border-t-2   "/>
                   <div className='pt-10 text-noirpolariz font-manrope text-lg leading-relaxed uppercase flex flex-row justify-between'>
                      <p>
                        Développement Web<br/> Branding
                    </p>
                        <p>
                        Année 2025
                        </p>
                     </div>
                     <div className="md:max-w-[65%] flex flex-row flex-wrap justify-end content-end items-end ml-auto">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "70px" }} variants={animationversladroitequi} className='flex flex-row  font-manrope text-noirpolariz text-xl leading-relaxed'>
                                <p className='font-clash'>La polarisation, c'est notre méthode : focaliser la lumière sur l'essentiel. Nous éliminons le superflu pour révéler ce qui rend chaque entreprise unique — son intention, son énergie, son humanité.</p>
                                <p className=' font-clash'>La polarisation, c'est notre méthode : focaliser la lumière sur l'essentiel. Nous éliminons le superflu pour révéler ce qui rend chaque entreprise unique — son intention, son énergie, son humanité.</p>
                            </motion.div>
                      </div>
                </motion.div>

                 <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationversladroitequi} src={GenstravailleIMG} className="w-full max-w-xs sm:max-w-md md:max-w-full " />
               
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautnewslettter} className='py-15 max-w-[65%]'>  
                   <hr className=" border-noirpolariz border-t-2   "/>
                   <div className='py-10 text-noirpolariz font-manrope text-lg leading-relaxed uppercase flex flex-row justify-between'>
                      <p>POLARIZ AGENCY</p>
                        <p>
                        2026
                        </p>
                     </div>
                      <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationversladroitequi} src={HommebureauIMG} className="w-full h-full max-w-xs sm:max-w-md md:max-w-full " />
                      <p className='font-manrope text-noirpolariz text-xl leading-relaxed mt-3 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                   </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautnewslettter} className='flex flex-col'>
                                   <div className="md:max-w-[75%] mt-20 flex flex-row items-center md:items-start ml-auto">
                                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-xl leading-relaxed md:w-[60%] ml-auto '>
                                          <p className='mb-5 font-regular'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                          <p className='mb-5 font-regular'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                       </motion.div>
                                       
                                        <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "70px" }} variants={animationverslagauchequi} src={TestIMG} className=" w-full h-full max-w-xs sm:max-w-md md:w-[45%]  ml-4"/>
                                   </div>
                                    <motion.hr initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }} variants={animationverslebasnewslettter} className=" border-noirpolariz border-t-2 mt-30"/>
                      </motion.div>
    </section>
  )
}
    
function Detail() {
  return (
    <>
    <div className='bg-headers'>
      <Infor/>  
   
    </div>    
    </>
  )
}

export default Detail;