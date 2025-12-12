
import React, { useState } from 'react';





function Proj() {
  return (
   <div className='max-w-[75%] text-center md:text-left mx-auto py-8 px-4 md:px-1'>
        <div className='max-w-[45%]'>
         <h1 className=" uppercase font-clash text-xl md:text-7xl font-semibold text-noirpolariz w-full text-center md:text-left mx-auto py-8 px-4 md:px-1">
            Nos Projets
        </h1> 
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
    </div>
    <div className="mx-auto px-2">
        <hr className=" border-noirpolariz border-t-3 py-8 px-4"/>
      </div>
    </div>
  )
}
    

function NosProjetsSection() {
  const values = [
    {
      id: "01",
      title: "CLARTÉ",
      text: "Nous simplifions le complexe pour révéler la valeur essentielle de chaque projet."
    },
    {
      id: "02",
      title: "SINCÉRITÉ",
      text: "Nous croyons à la transparence, à la parole vraie et à la communication humaine."
    },
    {
      id: "03",
      title: "SENS",
      text: "Le sens avant la forme. Chaque création traduit une intention."
    }
  ];

  return (
  
    <>
      <div className="max-w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-8 pb-20 px-2">  
        {values.map((item) => (
          <div key={item.id} className="flex flex-col pl-6 border-l-2 border-noirpolariz ">
            <span className="font-manrope text-sm text-noirpolariz mb-2">
              {item.id}
            </span>

            <h4 className="font-clash  text-xl md:text-4xl md:text-5xl text-noirpolariz font-semibold uppercase mb-6 tracking-wide">
              {item.title}
            </h4>
            <p className="font-manrope text-base leading-relaxed text-noirpolariz max-w-xs">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </>
  );
}


function NosProjets() {
  return (
    <>
    <div className='bg-headers'>
      <Proj/>  
    <NosProjetsSection/>
    </div>    
    </>
  )
}

export default NosProjets;