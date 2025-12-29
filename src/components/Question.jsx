import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './outils/buttons'; 

const animationverslehautqui = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// --- COMPOSANT QUESTION ---
function Question({ onAfficherFormulaire }) {
    return (
        <section className="w-[90%] md:w-[75%] mx-auto py-12 md:py-20 flex flex-col ">
            <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautqui} 
                className="w-full md:max-w-[65%] font-clash text-4xl md:text-8xl text-headers leading-tight text-center md:text-left"
            >
               Une question ou envie de lancer votre projet ?
            </motion.h2>

            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautqui} 
                className="flex justify-center md:justify-start pt-2 mb-10 mt-10"
            >
                <Button variant="secondary" onClick={onAfficherFormulaire}>
                    ENVOYER UN MESSAGE
                </Button>
            </motion.div>
        </section>
    )
}

// --- COMPOSANT FORMULAIRE ---
function Form({ onSucces, onRetour }) {
  const [formData, setFormData] = useState({ lastName: '', firstName: '', email: '', phone: '', message: '' });

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = (phone) => /^[0-9+]{10,15}$/.test(phone); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSucces();
  };

  // Classe utilitaire pour les lignes du formulaire (responsive: colonne sur mobile, ligne sur desktop)
  const inputRowClass = "flex flex-col md:flex-row md:items-baseline gap-2 border-b border-headers py-2";

  return (
    <section className="w-[90%] md:w-[75%] mx-auto py-12 md:py-20 flex flex-col font-clash text-headers font-semibold">
         <h2 className="w-full md:max-w-[65%] font-clash text-4xl md:text-8xl text-headers leading-tight text-center md:text-left mb-20">
               Une question ou envie de lancer votre projet ?
        </h2>
      <motion.form 
        initial="hidden" onSubmit={handleSubmit} whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={animationverslehautqui} 
        className="flex flex-col gap-8 text-headers"
      >
        <div className={inputRowClass}>
            <label className="whitespace-nowrap opacity-70 md:opacity-100 text-sm md:text-base">Nom :</label>
            <input type="text" name="lastName" onChange={handleChange} className="flex-1 bg-transparent outline-none focus:border-white transition-colors" />
        </div>

        <div className={inputRowClass}>
            <label className="whitespace-nowrap opacity-70 md:opacity-100 text-sm md:text-base">Prénom :</label>
            <input type="text" name="firstName" onChange={handleChange} className="flex-1 bg-transparent outline-none" />
        </div>

        <div className="flex flex-col">
            <div className={inputRowClass}>
                <label className="whitespace-nowrap opacity-70 md:opacity-100 text-sm md:text-base">E-mail :</label>
                <input type="email" name="email" onChange={handleChange} className="flex-1 bg-transparent outline-none" />
            </div>
            {formData.email && !isEmailValid(formData.email) && (
                <span className="text-orangepolariz text-xs mt-1 italic">Format d'email invalide</span>
            )}
        </div>

        <div className="flex flex-col">
            <div className={inputRowClass}>
                <label className="whitespace-nowrap opacity-70 md:opacity-100 text-sm md:text-base">Téléphone :</label>
                <input type="tel" name="phone" onChange={handleChange} className="flex-1 bg-transparent outline-none" />
            </div>
            {formData.phone && !isPhoneValid(formData.phone) && (
                <span className="text-orangepolariz text-xs mt-1 italic">Format de numéro invalide</span>
            )}
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl mb-4 text-headers uppercase">Votre message</h3>
          <textarea 
            name="message" 
            onChange={handleChange}
            className="w-full h-32 md:h-48 bg-transparent border border-headers p-3 outline-none focus:border-white transition-colors"
          ></textarea>
        </div>

        <motion.div className="flex flex-col md:flex-row gap-4 mb-10 mt-6">
            <Button variant="fourth" onClick={onRetour} type="button">RETOUR</Button>
            <Button variant="secondary" type="submit" disabled={!isEmailValid(formData.email) || !formData.lastName}>
                ENVOYER 
            </Button>
        </motion.div>
      </motion.form>
    </section>
  );
}

// --- COMPOSANT SUCCÈS ---
function MessageEnvoye() {
    return (
        <section className="w-[90%] md:w-[75%] mx-auto md:py-20 flex flex-col text-center md:text-left">
            <motion.h2 variants={animationverslehautqui} initial="hidden" animate="visible" className="font-clash text-4xl md:text-8xl text-headers leading-tight">
               Message envoyé
            </motion.h2>
            <motion.h3 variants={animationverslehautqui} initial="hidden" animate="visible" className="mt-5 text-headers text-2xl md:text-4xl uppercase opacity-80">
               Votre message a bien été pris en compte.
            </motion.h3>
            <motion.div className="mx-auto md:mx-0 pt-8 mb-10 mt-10">
                <a href='/'><Button variant="secondary">ACCUEIL</Button></a>
            </motion.div>
        </section>
    )
}

// --- COMPOSANT PARENT ---
function UneQuestion() {
    const [etape, setEtape] = useState('question');

    return (
        <div className='bg-noirpolariz overflow-x-hidden'>
            {etape === 'question' && (
                <Question onAfficherFormulaire={() => setEtape('formulaire')} />
            )}

            {etape === 'formulaire' && (
                <Form 
                    onSucces={() => setEtape('succes')} 
                    onRetour={() => setEtape('question')} 
                />
            )}

            {etape === 'succes' && (
                <MessageEnvoye />
            )}
        </div>
    );
}

export default UneQuestion;