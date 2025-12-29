import clsx from 'clsx';
import React, { useState } from 'react';
import Detailprojetp1 from '../components/detailprojetp1';
import Newsletter from '../components/newsletter';

function detailprojets() {
    return (
        <>
            <div >
                <main>
                    <Detailprojetp1/> 
                    <Newsletter/>
                </main>
            </div>
        </>
    )
}

export default detailprojets;