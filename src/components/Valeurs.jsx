import { motion } from 'framer-motion';
import React, { useState } from 'react';


const slidedegaucheàdroite = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const containergaucheàdroiteVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const valeurgaucheàdroiteVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6 } 
  }
};


function Valeurs() {
  return (
   <div>
      <motion.h1 initial="hidden"  whileInView="visible" viewport={{ once: true }}  variants={slidedegaucheàdroite} className=" max-w-[75%] font-clash text-xl md:text-7xl font-semibold text-noirpolariz w-full text-center md:text-left mx-auto py-8 px-4 md:px-1">
        NOS VALEURS
      </motion.h1> 
      <div className="max-w-[75%] mx-auto px-2">
        <hr className=" border-noirpolariz border-t-3  py-8  px-4"/>
      </div>
    </div>
  )
}
    

function ValeursSection() {
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
      <motion.div variants={containergaucheàdroiteVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
      className="max-w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-8 pb-20 px-2">  
        {values.map((item) => (
          <motion.div key={item.id} variants={valeurgaucheàdroiteVariants} className="flex flex-col pl-6 border-l-2 border-noirpolariz ">
            <span className="font-manrope text-sm text-noirpolariz mb-2">
              {item.id}
            </span>

            <h4 className="font-clash  text-xl md:text-4xl md:text-5xl text-noirpolariz font-semibold uppercase mb-6 tracking-wide">
              {item.title}
            </h4>
            <p className="font-manrope text-base leading-relaxed text-noirpolariz max-w-xs">
              {item.text}
            </p>

          </motion.div>
        ))}

      </motion.div>
    </>
  );
}


function NosValeurs() {
  return (
    <>
    <div className='bg-headers'>
      <Valeurs/>  
    <ValeursSection/>
    </div>    
    </>
  )
}

export default NosValeurs;