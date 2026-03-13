import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/newsletter';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function PolitiqueConfidentialite() {
  return (
    <div className="bg-headers min-h-screen">
      <section className="max-w-[90%] md:max-w-[70%] mx-auto py-20 font-manrope text-noirpolariz">
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeUp}
          className="font-clash text-5xl md:text-7xl uppercase mb-16"
        >
          Politique de Confidentialité
        </motion.h1>

        <div className="space-y-12 leading-relaxed text-lg">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">1. Introduction</h2>
            <p>
              Dans le cadre de ce projet étudiant, l'agence <strong>Polariz</strong> s'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">2. Collecte des données</h2>
            <p>
              Nous collectons uniquement les informations que vous nous transmettez volontairement via :
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li><strong>Le formulaire de contact :</strong> Nom, prénom et adresse email pour répondre à vos messages.</li>
              <li><strong>Le formulaire de Newsletter :</strong> Votre adresse email pour vous envoyer nos actualités (simulées).</li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">3. Utilisation et Stockage</h2>
            <p>
              Vos données ne sont <strong>pas stockées dans une base de données</strong> permanente. Elles nous sont transmises directement par email via les services de Vercel ou un gestionnaire de formulaire.
            </p>
            <p className="mt-4 italic">
              Aucune donnée n'est cédée, vendue ou louée à des tiers.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">4. Durée de conservation</h2>
            <p>
              Étant un projet pédagogique, les emails reçus sont supprimés régulièrement une fois la période d'évaluation du projet terminée.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-clash text-2xl uppercase border-b-2 border-noirpolariz pb-2 mb-4">5. Vos droits</h2>
            <p>
              Conformément à la loi « Informatique et Libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier ou supprimer en contactant : <strong>polariz.webagency@gmail.com</strong>.
            </p>
          </motion.div>

        </div>
      </section>
      <Newsletter />
    </div>
  );
}

export default PolitiqueConfidentialite;