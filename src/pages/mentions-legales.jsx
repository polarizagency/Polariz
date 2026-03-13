import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/newsletter';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function MentionsLegales() {
  return (
    <div className="bg-headers min-h-screen">
      <section className="max-w-[90%] md:max-w-[70%] mx-auto py-20 font-manrope text-noirpolariz">
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeUp}
          className="font-clash text-5xl md:text-7xl uppercase mb-16"
        >
          Mentions Légales
        </motion.h1>

        <div className="space-y-12 leading-relaxed text-lg">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">1. Présentation du site</h2>
            <p>
              Le site <strong>polariz.fr</strong> est un projet réalisé dans un cadre pédagogique par un groupe d'étudiants. 
              Il simule l'activité d'une agence web nommée <strong>Polariz</strong>.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li><strong>Éditeur :</strong> Équipe projet Polariz</li>
              <li><strong>Siège social (fictif) :</strong> Lille, France</li>
              <li><strong>Email :</strong> polariz.webagency@gmail.com</li>
              <li><strong>Responsable de la publication :</strong> Équipe Polariz</li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">2. Hébergement et Domaine</h2>
            <p>Le site est propulsé techniquement et hébergé par :</p>
            <ul className="mt-4 list-disc list-inside">
              <li><strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723</li>
              <li><strong>Gestion du nom de domaine :</strong> IONOS SARL (7 Place de la Gare, 57200 Sarreguemines)</li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">3. Propriété intellectuelle</h2>
            <p>
              Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes) restent la propriété de leurs auteurs respectifs.
            </p>
            <p className="mt-4">
              Les polices de caractères utilisées (Clash Display, Manrope) sont issues de <strong>Google Fonts</strong> ou de fonderies tierces selon leurs licences respectives.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">4. Données personnelles</h2>
            <p>
              Conformément à l'esprit du RGPD, nous informons les utilisateurs que le site <strong>polariz.fr</strong> n'utilise aucun outil d'analyse de trafic (tracking) et ne stocke aucune donnée personnelle.
            </p>
            <p className="mt-4">
              Les adresses email saisies via les formulaires de contact ou de newsletter sont utilisées exclusivement pour répondre aux demandes des utilisateurs et ne font l'objet d'aucun stockage en base de données ou de cession à des tiers.
            </p>
          </motion.div>

        </div>
      </section>
      <Newsletter />
    </div>
  );
}

export default MentionsLegales;