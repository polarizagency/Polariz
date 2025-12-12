import clsx from 'clsx';
import React, { useState } from 'react';
import Quisommesnous from '../components/qui'
import Equipe from '../components/equipe'
import Newsletter from '../components/newsletter';

function quisommesnous() {
    return (
        <>
            <div className='min-h-screen'>
                <main>
                    <Quisommesnous />
                    <Equipe />
                    <Newsletter />
                </main>
            </div>
        </>
    )
}

export default quisommesnous;