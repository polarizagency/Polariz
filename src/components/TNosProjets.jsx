import React, { useState, useEffect } from 'react';
import Button from './outils/buttons'; 
import { motion } from 'framer-motion';

import riot from '../img/riot.png';
import frise from '../img/Frise Chronologique.png';
import heph from '../img/hepg.png';
import CélestineIMG from '../img/portfolio celestine 1.png';
import Logobusiness from '../img/logobusiness.png';
import pero from '../img/pero.png';

const animationverslehautnosprojets = {
  hidden: { opacity: 0, y: 70 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const animationverslebasnosprojets = {
  hidden: { opacity: 0, y: -70 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const animationversladroitenosprojets = {
  hidden: { opacity: 0, x: -70, y: 70 },
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const animationverslagauchenosprojets = {
  hidden: { opacity: 0, x: 70, y: 70 },
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


function Proj() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslebasnosprojets}  
      className='w-full max-w-[90%] md:max-w-[75%] mx-auto py-8 px-4 text-headers'
    >
      <div className='w-full md:max-w-[45%] text-center md:text-left'>
        <h1 className="uppercase font-clash text-4xl md:text-7xl font-semibold text-headers mb-6">
           Nos Projets
        </h1> 
        <p className="text-sm md:text-base leading-relaxed">
          Chaque projet est une nouvelle occasion de repousser les limites du possible. Découvrez nos travaux les plus récents, marqués par une quête constante de sens et d'esthétique.
        </p>
      </div>
      <div className="pt-8">
        <hr className="border-headers border-t-2 md:border-t-3"/>
      </div>
    </motion.div>
  )
}

function NosProjetsSection() {
  const [activeFilter, setActiveFilter] = useState("Développement Web");
  const [visibleCount, setVisibleCount] = useState(3);
  
  useEffect(() => {
    setVisibleCount(3);
  }, [activeFilter]);

  
  const values = [
    {
      id: "01",
      title: "Heph Agency",
      type: "Développement Web",
      year: "2025",
      text: "Description courte du projet ou phrase d'accroche",
      image: heph,
      link: "/hephagency"
    },
    {
      id: "02",
      title: "Sweet riot",
      type: "Développement Web",
      year: "2026",
      text: "La rencontre explosive entre l'iconique chaussure britannique et la gourmandise de Haribo dans une expérience digitale dynamique.",
      image: riot,
      link: "/sweetriot"
    },
    {
      id: "03",
      title: "Bollaert Business",
      type: "Développement Web",
      year: "2024",
      text: " L'enjeu était de moderniser l'image de marque du Bollaert Business Team tout en optimisant les performances techniques du site.",
      image: Logobusiness,
      link: "/bollaert"
    },
    {
      id: "04",
      title: "Portfolio de Célestine",
      type: "Branding",
      year: "2025",
      text: "Identité visuelle pour un portfolio.",
      image: CélestineIMG,
      link: "/portfoliocelestine"
    },
    {
      id: "05",
      title: "Escape Game en React",
      type: "Développement Web",
      year: "2025",
      text: "Escape game virtuel",
      image: pero,
      link: "/Projet_en_detail"
    },
    {
      id: "06",
      title: "PROJET UXfeef B",
      type:"Développement Web",
      year: "2025",
      text: "Refonte de l'expérience utilisateur d'une application SaaS.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/Projet_en_detail"
    },
    {
      id: "07",
      title: "Frise Chronologique",
      type: "Développement Web",
      year: "2026",
      text: "Une interface interactive où le temps se parcourt comme une véritable histoire, alliant fluidité et immersion totale.",
      image: frise,
      link: "/frise"
    }
    
  ];


  const filteredProjects = values.filter(project => project.type === activeFilter);
  const categories = ["Développement Web", "Branding", "UX/UI"];
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount(filteredProjects.length);

  const getAnimationVariant = (index) => {
    const position = index % 3;
    if (position === 0) return animationversladroitenosprojets; 
    if (position === 1) return animationverslehautnosprojets;   
    return animationverslagauchenosprojets;                    
  };

  return (
    <section className="pb-20 px-4 font-manrope">
      <div className="w-full max-w-[90%] md:max-w-[75%] mx-auto">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautnosprojets}  
          className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-12"
        >
          {categories.map((cat) => (
            <div key={cat} onClick={() => setActiveFilter(cat)} className="cursor-pointer">
              <Button variant={activeFilter === cat ? "fourth" : "secondary"}>
                <div className="flex items-center gap-2 uppercase font-bold text-[10px] md:text-sm tracking-wide">
                  <span className={`w-2 h-2 rounded-full ${activeFilter === cat ? "bg-headers" : "bg-noirpolariz"}`}></span>
                  <span>{cat}</span>
                </div>
              </Button>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 text-noirpolariz">
        {displayedProjects.map((item, index) => (
  <motion.div 
    key={item.id} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, margin: "-50px" }}
    variants={getAnimationVariant(index)} 
    className="bg-headers group cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col"
  >
    {/* Lien sur l'image */}
     <div className="w-full h-64 overflow-hidden relative bg-gray-100 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-[90%] h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4 text-[10px] md:text-xs font-medium uppercase tracking-wider">
        <div className="flex flex-col gap-1">
          <span className="font-bold">{item.type}</span>
          {item.type !== "Branding" && <span className="opacity-50">BRANDING</span>}
        </div>
        <span>{item.year}</span>
      </div>

      {/* Lien sur le titre */}
      <a href={item.link} className="hover:opacity-70 transition-opacity">
        <h4 className="font-clash text-xl md:text-3xl font-semibold uppercase mb-4 leading-tight">
          {item.title}
        </h4>
      </a>

      <p className="text-xs md:text-sm leading-relaxed mb-6 opacity-80">
        {item.text}
      </p>

    
    </div>
  </motion.div>
))} 
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center">
            <Button variant="secondary" onClick={handleShowMore}>
              Plus de projets
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function NosProjets() {
  return (
    <div className='bg-noirpolariz min-h-screen w-full overflow-x-hidden'>
      <Proj/>  
      <NosProjetsSection/>
    </div>    
  )
}

export default NosProjets;
