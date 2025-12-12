import React, { useState, useEffect } from 'react';
import Button from './outils/buttons'; 

function Proj() {
  return (
    <div className='max-w-[75%] text-center md:text-left mx-auto py-8 px-4 md:px-1 text-headers'>
      <div className='max-w-[45%]'>
        <h1 className=" uppercase font-clash text-xl md:text-7xl font-semibold text-headers w-full text-center md:text-left mx-auto py-8 px-4 md:px-1">
           Nos Projets
        </h1> 
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      </div>
      <div className="mx-auto pt-2">
        <hr className=" border-headers border-t-3 py-8 "/>
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
      title: "NOM DU PROJET",
      type: "Développement Web",
      year: "2025",
      text: "Description courte du projet ou phrase d'accroche",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "02",
      title: "NOM DU PROJET",
      type: "Développement Web",
      year: "2025",
      text: "Description courte du projet ou phrase d'accroche",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "03",
      title: "NOM DU PROJET",
      type: "Développement Web",
      year: "2025",
      text: "Description courte du projet ou phrase d'accroche",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "04",
      title: "PROJET BRANDING A",
      type: "Branding",
      year: "2024",
      text: "Identité visuelle complète pour une startup innovante.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "05",
      title: "PROJET UX B",
      type: "UX/UI",
      year: "2025",
      text: "Refonte de l'expérience utilisateur d'une application SaaS.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "06",
      title: "PROJET UXfeef B",
      type:"Développement Web",
      year: "2025",
      text: "Refonte de l'expérience utilisateur d'une application SaaS.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "07",
      title: "PROJET CACHÉ PAR DÉFAUT",
      type:"Développement Web",
      year: "2025",
      text: "Ce projet n'apparaît que si on clique sur le bouton plus.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const filteredProjects = values.filter(project => project.type === activeFilter);
  const categories = ["Développement Web", "Branding", "UX/UI"];
  
  const displayedProjects = filteredProjects.slice(0, visibleCount);

    const handleShowMore = () => {
    setVisibleCount(filteredProjects.length);
  };

  return (
    <section className="pb-20 px-4 font-manrope">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <div 
              key={cat} 
              onClick={() => setActiveFilter(cat)}
              className="cursor-pointer inline-block"
            >
              <Button variant={activeFilter === cat ? "primary" : "secondary"}>
                <div className="flex items-center gap-2 uppercase font-bold text-sm tracking-wide">
                  <span className={`w-2 h-2 rounded-full ${activeFilter === cat ? "bg-noirpolariz" : "bg-orangepolariz"}`}></span>
                  <span>{cat}</span>
                </div>
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-noirpolariz">
          {displayedProjects.map((item) => (
            <div key={item.id} className="bg-headers group cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col">
              
              <div className="w-full h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 text-xs font-medium uppercase tracking-wider">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold">{item.type}</span>
                    {item.type !== "Branding" && <span className="opacity-50">BRANDING</span>}
                  </div>
                  <span className="text-noirpolariz">{item.year}</span>
                </div>

                <h4 className="font-clash text-2xl md:text-3xl font-semibold uppercase mb-4 leading-tight">
                  {item.title}
                </h4>

                <p className="text-sm leading-relaxed mt-auto opacity-80">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center">
            <div onClick={handleShowMore} className="cursor-pointer">
                <Button variant="secondary">
                  Plus de projets
                </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

function NosProjets() {
  return (
    <>
    <div className='bg-orangepolariz min-h-screen w-full'>
      <Proj/>  
      <NosProjetsSection/>
    </div>    
    </>
  )
}

export default NosProjets;