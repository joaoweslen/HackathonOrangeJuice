import React from 'react';
import Head from 'next/head';
import BarraSuperior from '../app/BarraSuperior';
import '../assets/css/globals.css'

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
        <div>
          <h1>Página de Home</h1>
          {/* Adicione campos de formulário, botões, etc. */}
        </div>
      </main>
    </div>
  );
}

