
import React, { useState } from 'react';
import RemiIMG from '../img/remi.png';
import CelestineIMG from '../img/celestine.png';
import FanieIMG from '../img/fanie.png';
import ArthurIMG from '../img/arthur.png';
import EmilienIMG from '../img/emilien.png';

function Equipe() {
    return (
        <section className="w-full  py-20 px-4">
            <div className='ml-55 max-w-180 text-white'>

                <h2 className=" font-clash text-5xl md:text-8xl font-semibold text-white uppercase leading-tight my-10">
                    Notre Equipe
                </h2>
                <p className='text-xl leading-relaxed font-manrope'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
            <span className='border-b border-white block mx-55 my-15'> </span>

            <div className='max-w-full mx-55 grid grid-cols-4 grid-rows-2 gap-4 text-white'>
                <div className='col-start-2 relative'>
                    <img src={RemiIMG} alt='photo de Rémi' className='border border-white w-full' />
                    <div className='absolute top-4 left-4 font-manrope text-xl'>
                        <p>Rémi Edmond</p>
                        <p>Dev Back</p>
                    </div>
                </div>
                <div className='col-start-3 relative'>
                    <img src={CelestineIMG} alt='photo de Célestine' className='border border-white' />
                    <div className='absolute top-4 left-4 font-manrope text-xl'>
                        <p>Célestine Mahieux</p>
                        <p>Front Dev/Web Designer</p>
                    </div>
                </div>
                <div className='col-start-4 relative'>
                    <img src={FanieIMG} alt='photo de Fanie' className='border border-white' />
                    <div className='absolute top-4 left-4 font-manrope text-xl'>
                        <p>Fanie Bugenne</p>
                        <p>Cheffe de Projet/Dev Back</p>
                    </div>
                </div>
                <div className='col-start-3 row-start-2 relative'>
                    <img src={ArthurIMG} alt='photo de Arthur' className='border border-white' />
                    <div className='absolute top-4 left-4 font-manrope text-xl'>
                        <p>Arthur Carré</p>
                        <p>Front Dev/ Web Designer</p>
                    </div>
                </div>
                <div className='col-start-4 row-start-2 relative'>
                    <img src={EmilienIMG} alt="photo d'Emilien" className='border border-white' />
                    <div className='absolute top-4 left-4 font-manrope text-xl'>
                        <p>Emilien Grand</p>
                        <p>Web Designer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}



function Equi() {
    return (
        <>
            <div className='bg-noirpolariz'>
                <Equipe />
            </div>
        </>
    )
}

export default Equi;