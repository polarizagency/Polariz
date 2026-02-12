import clsx from 'clsx';
import React, { useState } from 'react';
import TNosProjets from '../components/TNosprojets';
import Newsletter from '../components/newsletter';

function lesprojets() {
    return (
        <>
            <div className='min-h-screen'>
                <main>
                    <TNosProjets/> 
                    <Newsletter/>
                </main>
            </div>
        </>
    )
}

export default lesprojets;