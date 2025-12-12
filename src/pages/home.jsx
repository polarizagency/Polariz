import clsx from 'clsx';
import React, { useState } from 'react';
import NosValeurs from '../components/Valeurs';
import Newsletter from '../components/newsletter';
import PourquoiavantleQuoi from '../components/quoi';
import NosProjets from '../components/Nosprojets';






function home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen'>
     
      <main>
        <PourquoiavantleQuoi/>
        <NosValeurs/>
        <NosProjets/> 
        <Newsletter/>
    </main>
     


    </div>    
    </>
  )
}

export default home;