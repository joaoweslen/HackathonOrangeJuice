import React from 'react';
import Head from 'next/head';
import Navbar from "../assets/components/navbar/navbar.module";
import PerfilCard from '../assets/components/perfilCard/perfilCard.module';
import Seach from '../assets/components/buscarTags/buscaTags.module';
import ProjectCard from '../assets/components/containerProjetos/projectContainer.module';
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
        <Navbar />
      </header>

      <main>
        <div className={styles.Container}>
          <PerfilCard />
        </div>
        <div className={styles.BuscaProjetos}>        
          <h3 className={styles.title}>Meus projetos</h3>
          <Seach/>
          {/* <ProjectCard/> */}
        </div>
      </main>
    </div>
  );
}

