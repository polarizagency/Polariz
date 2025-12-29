
import React, { useState } from 'react';
import GenstravailleIMG from '../img/gens_travail.jpg'
import HommebureauIMG from '../img/homme_bureau.jpg'
import { motion } from 'framer-motion';


const animationverslehautqui = {
  hidden: { opacity: 0, y: 70 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

function Qui() {
    return (
        <section className="max-w-[75%] mx-auto py-20 flex flex-col">

            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautqui} className=" font-clash text-5xl md:text-8xl font-semibold text-noirpolariz uppercase leading-tight">
                QUI SOMMES NOUS ?
            </motion.h2>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautqui}>
                <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationversladroitequi} src={GenstravailleIMG} className="w-full max-w-xs sm:max-w-md md:max-w-3xl " />
                <div className="md:max-w-[65%] md:mb-20 flex flex-col items-center md:items-start ml-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 font-manrope text-noirpolariz text-xl leading-relaxed max-w-4xl ml-auto my-5 '>
                    <p>
                        Nous sommes une agence web indépendante animée par une conviction : le numérique ne doit pas effacer l’humain, mais le révéler.
                    </p>

                    <p>
                        Notre mission : mettre en lumière la raison d’être des marques. Nous aidons les entreprises à exprimer leur authenticité et qui inspirent la confiance et l’émotion.
                    </p>

                </div>
            </div>
            </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautqui} className='flex flex-col  '>
                <div className='md:max-w-[65%] items-center md:items-start'>
                    <h3 className='text-4xl text-noirpolariz md:text-7xl font-semibold leading-20 font-clash'>Le numérique n'a de valeur que s'il a du sens.</h3>
                    <p className='text-xl leading-relaxed text-noirpolariz font-manrope mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.. It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
                <div className="md:max-w-[65%] mt-20 flex flex-col items-center md:items-start ml-auto">
                     <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "70px" }} variants={animationverslagauchequi} src={HommebureauIMG} className="w-full max-w-xs sm:max-w-md md:max-w-3xl ml-auto"/>
                     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationversladroitequi} className='font-manrope text-noirpolariz text-xl leading-relaxed max-w-4xl ml-auto my-5'>
                        <p className='mb-5 font-regular'>La polarisation, c'est notre méthode : focaliser la lumière sur l'essentiel. Nous éliminons le superflu pour révéler ce qui rend chaque entreprise unique — son intention, son énergie, son humanité.</p>
                        <p>Notre approche mêle stratégie, design et contenu pour donner vie à des outils cohérents, utiles et inspirants. Nous ne créons pas seulement des sites : nous révélons des identités.</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}



function Quisommesnous() {
    return (
        <>
            <div className='bg-headers'>
                <Qui />
            </div>
        </>
    )
}

export default Quisommesnous;