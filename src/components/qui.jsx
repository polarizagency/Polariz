
import React, { useState } from 'react';
import GenstravailleIMG from '../img/gens_travail.jpg'
import HommebureauIMG from '../img/homme_bureau.jpg'

function Qui() {
    return (
        <section className="w-full  py-20 px-4">

            <h2 className="ml-100 font-clash text-5xl md:text-8xl font-semibold text-noirpolariz uppercase leading-tight my-10">
                QUI SOMMES NOUS ?
            </h2>

            <div>
                <img src={GenstravailleIMG} className='w-250 mx-20 mt-20' alt="personnes en réunion" />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 font-manrope text-noirpolariz text-xl leading-relaxed w-210 flex justify-end ml-auto my-20 mr-20'>
                    <p>
                        Nous sommes une agence web indépendante animée par une conviction : le numérique ne doit pas effacer l’humain, mais le révéler.
                    </p>

                    <p>
                        Notre mission : mettre en lumière la raison d’être des marques. Nous aidons les entreprises à exprimer leur authenticité et qui inspirent la confiance et l’émotion.
                    </p>

                </div>
            </div>
            <div className='m-20 w-215'>
                <h3 className='text-4xl text-noirpolariz md:text-7xl font-semibold leading-20 font-clash'>Le numérique n'a de valeur que s'il a du sens.</h3>
                <p className='text-xl leading-relaxed text-noirpolariz font-manrope mt-20'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.. It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className='m-20 w-215'>
                <img src={HommebureauIMG} className='w-250 mx-20 mt-20' alt="homme à son bureau" />
            <div className='font-manrope text-noirpolariz text-xl leading-relaxed w-210 flex flex-col justify-end ml-auto my-20 mr-20'>
                <p>La polarisation, c’est notre méthode : focaliser la lumière sur l’essentiel. Nous éliminons le superflu pour révéler ce qui rend chaque entreprise unique — son intention, son énergie, son humanité.</p>
                <p>Notre approche mêle stratégie, design et contenu pour donner vie à des outils cohérents, utiles et inspirants. Nous ne créons pas seulement des sites : nous révélons des identités.</p>
            </div>
            </div>
        </section>
    )
}



function PourquoiavantleQuoi() {
    return (
        <>
            <div className='bg-headers'>
                <Qui />
            </div>
        </>
    )
}

export default PourquoiavantleQuoi;