import React from 'react';
import Head from 'next/head';
import DescobrirProjetos from '../assets/components/DescobrirProjetos/DescobrirProjetos'
import ProjectCard from '../assets/components/containerProjetos/projectContainer.module'
import BuscaTags from '../assets/components/buscarTags/BuscaTags'
import Navbar from "../assets/components/navbar/navbar.module";
import styles from "../assets/css/descobrir.module.css";
import '@fontsource/roboto/300.css';
import '../assets/css/globals.css';

export default function Descobrir() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Orange Portfolio - Descobrir</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.Container}>
              <h1 className={styles.tituloProjetos}>Junte-se à comunidade de inovação, inspiração e descobertas,
                 transformando experiências em conexões inesquecíveis</h1>
        </div>
        <div className={styles.BuscaProjetos}>        
          <BuscaTags/>
        </div>

        <div>
          <ProjectCard/>
        </div>
        
      </main>
    </div>
  );
}