import React from 'react';
import GenstravailleIMG from '../img/gens_travail.jpg'
import HommebureauIMG from '../img/homme_bureau.jpg'
import { motion } from 'framer-motion';

const animationverslehautqui = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const animationversladroitequi = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const animationverslagauchequi = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Qui() {
    return (
        <section className="max-w-[90%] md:max-w-[75%] mx-auto py-12 md:py-20 flex flex-col overflow-hidden">

            {/* Titre principal */}
            <motion.h2 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={animationverslehautqui} 
              className="font-clash text-5xl md:text-8xl font-semibold text-noirpolariz uppercase leading-tight mb-10"
            >
                QUI SOMMES NOUS ?
            </motion.h2>

            {/* Première partie : Image à gauche, texte à droite */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationverslehautqui}>
                <motion.img 
                  variants={animationversladroitequi} 
                  src={GenstravailleIMG} 
                  className="w-full md:max-w-3xl h-auto object-cover" 
                />
                
                <div className="w-full md:max-w-[65%] mt-10 md:mb-20 flex flex-col items-start ml-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed'>
                        <p>
                            Nous sommes une agence web indépendante animée par une conviction : le numérique ne doit pas effacer l’humain, mais le révéler.
                        </p>
                        <p>
                            Notre mission : mettre en lumière la raison d’être des marques. Nous aidons les entreprises à exprimer leur authenticité pour inspirer confiance et émotion.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Deuxième partie : Grand texte */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={animationverslehautqui} 
              className='flex flex-col mt-16 md:mt-0'
            >
                <div className='w-full md:max-w-[70%]'>
                    <h3 className='text-3xl md:text-7xl text-noirpolariz font-semibold leading-tight font-clash'>
                      Le numérique n'a de valeur que s'il a du sens.
                    </h3>
                    <p className='text-lg md:text-xl leading-relaxed text-noirpolariz font-manrope mt-6 opacity-80'>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                    </p>
                </div>

                {/* Troisième partie : Image à droite, texte en dessous */}
                <div className="w-full md:max-w-[65%] mt-16 md:mt-20 flex flex-col items-start ml-auto">
                     <motion.img 
                       variants={animationverslagauchequi} 
                       src={HommebureauIMG} 
                       className="w-full md:max-w-3xl ml-auto h-auto object-cover"
                     />
                     <motion.div 
                       variants={animationversladroitequi} 
                       className='font-manrope text-noirpolariz text-lg md:text-xl leading-relaxed w-full mt-8'
                     >
                        <p className='mb-6'>
                          La polarisation, c'est notre méthode : focaliser la lumière sur l'essentiel. Nous éliminons le superflu pour révéler ce qui rend chaque entreprise unique — son intention, son énergie, son humanité.
                        </p>
                        <p>
                          Notre approche mêle stratégie, design et contenu pour donner vie à des outils cohérents, utiles et inspirants. Nous ne créons pas seulement des sites : nous révélons des identités.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

function Quisommesnous() {
    return (
        <div className='bg-headers min-h-screen'>
            <Qui />
        </div>
    )
}

export default Quisommesnous;