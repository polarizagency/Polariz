
import React, { useState } from 'react';
import Button from './outils/buttons';
import { motion } from 'framer-motion';

const animationverslehautnewslettter = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function Infor() {
  return (
   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={animationverslehautnewslettter} className="flex flex-col items-center justify-center text-center  gap-6 max-w-[80%] mx-auto px-4 pt-20 pb-20">
      <h1 className=" font-clash text-xl md:text-3xl font-semibold text-white w-full text-center  mx-auto  px-4 md:px-1">
        ENVIE DE LANCER VOTRE PROJET ?
      </h1> 
      <p className='text-white'>Parlons de votre idée, de votre sens, de votre “pourquoi”. Ensemble, faisons en une expérience digitale qui inspire.</p>
      <a href="/Contact" >
       <Button variant="secondary">
              NOUS CONTACTER
        </Button>
      </a>
    </motion.div>
  )
}
    
function Newsletter() {
  return (
    <>
    <div className='bg-noirpolariz'>
      <Infor/>  
   
    </div>    
    </>
  )
}

export default Newsletter;