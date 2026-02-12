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

const animationversladroitenosprojets = {
  hidden: { opacity: 0, x: -70 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const animationverslagauchenosprojets = {
  hidden: { opacity: 0, x: 70 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function Proj() {
  return (
    <div className='max-w-[90%] md:max-w-[75%] text-left mx-auto py-8 md:px-1 text-headers'>
      <div className='w-full md:max-w-[45%]'>
        <h1 className="uppercase font-clash text-4xl md:text-7xl font-semibold text-headers py-8">
           Nos Projets
        </h1> 
        <p className="text-sm md:text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      </div>
      <div className="pt-2">
        <hr className="border-headers border-t-2 md:border-t-3 pb-8"/>
      </div>
    </div>
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

  // On garde ta logique exacte de positionnement desktop
  const getAnimationVariant = (index) => {
    const position = index % 3;
    if (position === 0) return animationversladroitenosprojets; 
    if (position === 1) return animationverslehautnosprojets;   
    return animationverslagauchenosprojets;                    
  };

  return (
    <section className="pb-20 px-4 font-manrope overflow-hidden">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto">
        
        {/* Filtres ajustés pour mobile */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <div 
              key={cat} 
              onClick={() => setActiveFilter(cat)}
              className="cursor-pointer inline-block"
            >
              <Button variant={activeFilter === cat ? "primary" : "secondary"}>
                <div className="flex items-center gap-2 uppercase font-bold text-[10px] md:text-sm tracking-wide">
                  <span className={`w-2 h-2 rounded-full ${activeFilter === cat ? "bg-noirpolariz" : "bg-orangepolariz"}`}></span>
                  <span>{cat}</span>
                </div>
              </Button>
            </div>
          ))}
        </div>

        {/* Grille : On garde ton système 1 col mobile / 2 md / 3 lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-noirpolariz">
          {displayedProjects.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial="hidden"  
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }}
              variants={getAnimationVariant(index)} 
              className="bg-headers group cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
               <a href={item.link}> 
               <div className="w-full h-64 overflow-hidden relative bg-gray-100 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-[90%] h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
              </a>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 text-[10px] md:text-xs font-medium uppercase tracking-wider">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold">{item.type}</span>
                    {item.type !== "Branding" && <span className="opacity-50">BRANDING</span>}
                  </div>
                  <span className="text-noirpolariz">{item.year}</span>
                </div>

                <h4 className="font-clash text-xl md:text-3xl font-semibold uppercase mb-4 leading-tight">
                  {item.title}
                </h4>

                <p className="text-xs md:text-sm leading-relaxed mt-auto opacity-80">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href='/Nos_projets' className='w-full md:w-auto'>
            <Button variant="secondary" className='w-full md:w-auto text-center'>
              Plus de projets
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function NosProjets() {
  return (
    <div className='bg-orangepolariz min-h-screen w-full selection:bg-noirpolariz selection:text-white'>
      <Proj/>  
      <NosProjetsSection/>
    </div>    
  );
}

export default NosProjets;