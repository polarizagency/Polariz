import clsx from 'clsx';
import React, { useState } from 'react';
import Quisommesnous from '../components/qui'
import Equipe from '../components/equipe'

function quisommesnous() {
    return (
        <>
            <div className='min-h-screen'>
                <main>
                    <Quisommesnous />
                    <Equipe />
                </main>
            </div>
        </>
    )
}

export default quisommesnous;