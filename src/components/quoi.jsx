
import React, { useState } from 'react';
import travailImg from '../img/travail.jpg';





function Pourquoi() {
  return (
   <section className="w-full  py-20 px-4">
  <div className="max-w-[75%] mx-auto flex flex-col items-start justify-start">

    <h2 className="font-clash text-5xl md:text-8xl font-semibold text-white uppercase leading-tight mb-10 text-left">
      WHY BEFORE <br /> WHAT
    </h2> 
     
    <div className=' max-w-[60%] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 font-manrope text-gray-300 text-lg leading-relaxed'>
        
        <p>
          Chaque marque a une histoire, une intention, une énergie. Notre mission est de la rendre visible à travers des outils digitaux qui parlent juste, plutôt que fort.
        </p>
        
        <p>
          Avant de parler technologie ou performance, nous travaillons le sens, la cohérence et la valeur humaine qui donnent du poids à chaque projet.
        </p>

    </div>
  </div>



   <div className="max-w-[75%] mx-auto flex flex-col items-end justify-end mt-20">
    <div className='max-w-[50%]'>

    <img src={travailImg} className='w-[100%] h-[200px] object-cover' alt="l'entreprise qui travaille" />
    <p className="text-l font-manrope text-gray-300 justify-start text-start mt-7"> Dans un monde saturé d’images et de messages, nous croyons à la valeur du sens.</p> <p className=" font-manrope text-gray-300 justify-start text-start text-l">Chaque mot, chaque visuel, chaque ligne de code doit servir une intention : rendre le message plus humain et plus juste. </p>
    </div>
  </div>


  <div className="max-w-[75%] mx-auto flex flex-col items-start justify-start mt-20">
    <div className='max-w-[60%]'>
    <h3 className="font-clash text-4xl md:text-7xl font-semibold text-white leading-tight mb-10 text-left">
      Donner du sens à la lumière que l’on diffuse.
    </h3> 
    <p className="text-l font-manrope text-gray-300 justify-start text-start"> Polariz, c’est l’idée que le numérique doit éclairer, pas éblouir.Nous aidons les entreprises à se recentrer sur leur raison d’être pour créer des expériences digitales sincères, utiles et émotionnellement fortes.</p> <p className="font-manrope text-gray-300 justify-start text-start text-l mt-2">Chaque projet devient une polarisation : un focus sur ce qui compte vraiment.  Mettre en lumière l’essentiel, c’est notre manière de donner du sens à la création numérique. </p>
    </div>
    
     

  </div>
</section>
  )
}
    


function PourquoiavantleQuoi() {
  return (
    <>
    <div className='bg-noirpolariz'>
      <Pourquoi/>  
    </div>    
    </>
  )
}

export default PourquoiavantleQuoi;