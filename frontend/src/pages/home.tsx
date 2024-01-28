import React from 'react';
import Head from 'next/head';
import BarraSuperior from '../assets/components/navbar/BarraSuperior';
import PerfilCard from '../assets/components/perfilCard/perfilCard';
import BuscaTags from '../assets/components/buscarTags/BuscaTags'
import ProjetosAdicionados from '../assets/components/containerProjetos/ProjetosAdicionados';
import '../assets/css/globals.css';
import styles from "../assets/css/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Orange Portfolio - Home</title>
      </Head>
      <header>
        <BarraSuperior />
      </header>
      <main>
        <div className={styles.Container}>
              <PerfilCard />
        </div>
        <div className={styles.BuscaProjetos}>        
          <BuscaTags/>
        </div>
        <div className={styles.Projetos}>
          <ProjetosAdicionados />
        </div>
      </main>
    </div>
  );
}

