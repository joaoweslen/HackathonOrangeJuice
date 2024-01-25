import styles from "../assets/css/login.module.css";

export default function Home() {
  return (
    <div>
      <header>
        {/* Conteúdo do header, como logo, menu, etc. */}
        <h1>Meu Header</h1>
      </header>
      <main className={styles.main}>
        <div>
          <h1>Página de Home</h1>
          {/* Adicione campos de formulário, botões, etc. */}
        </div>
      </main>
    </div>
  );
}

