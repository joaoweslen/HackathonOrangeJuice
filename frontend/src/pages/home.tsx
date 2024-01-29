import React from 'react';
import Head from 'next/head';
import BarraSuperior from "../assets/components/navbar/navbar";
import PerfilCard from '../assets/components/perfilCard/perfilCard';
import ContainerProjetos from '../assets/components/containerProjetos/ProjetosAdicionados';
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
          <h3>Meus projetos</h3>
          <ContainerProjetos />
        </div>
      </main>
    </div>
  );
}

