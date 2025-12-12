
import React, { useState } from 'react';
import GenstravailleIMG from '../img/gens_travail.jpg'
import HommebureauIMG from '../img/homme_bureau.jpg'

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

            <div className='max-w-full my-15 grid grid-cols-4 grid-rows-2 gap-4 text-white'>
                <div className='col-start-2'>1</div>
                <div className='col-start-3'>2</div>
                <div className='col-start-4'>3</div>
                <div className='col-start-3 row-start-2'>4</div>
                <div className='col-start-4 row-start-2'>5</div>
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