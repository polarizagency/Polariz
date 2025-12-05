
import React, { useState } from 'react';





function Pourquoi() {
  return (
   <section className="w-full  py-20 px-4">
  <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start">

    <h2 className="font-clash text-5xl md:text-7xl font-semibold text-white uppercase leading-tight mb-16 text-left">
      WHY BEFORE <br /> WHAT
    </h2> 
     
    <div className=' max-w-[700px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 font-manrope text-gray-300 text-lg leading-relaxed'>
        
        <p>
          Chaque marque a une histoire, une intention, une énergie. Notre mission est de la rendre visible à travers des outils digitaux qui parlent juste, plutôt que fort.
        </p>
        
        <p>
          Avant de parler technologie ou performance, nous travaillons le sens, la cohérence et la valeur humaine qui donnent du poids à chaque projet.
        </p>

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