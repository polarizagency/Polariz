
import React, { useState } from 'react';
import Button from './outils/buttons';




function Infor() {
  return (
   <div className="flex flex-col items-center justify-center text-center mb-12 gap-6 max-w-[1200px] mx-auto px-4 pt-20 pb-20">
      <h1 className=" font-clash text-xl md:text-4xl font-semibold text-white w-full text-center  mx-auto  px-4 md:px-1">
        ENVIE DE LANCER VOTRE PROJET ?
      </h1> 
      <p className='text-white'>Parlons de votre idée, de votre sens, de votre “pourquoi”. Ensemble, faisons en une expérience digitale qui inspire.</p>
       <Button variant="secondary">
              NOUS CONTACTER
            </Button>
    </div>
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