import styles from "../assets/css/login.module.css";
import Link from 'next/link';

export default function Login() {
    return (
    <main>
      <section className={styles.box}>
        <div>
          <h1>Entre no Orange Portfólio</h1>
          <button>Entrar com Google</button>
        </div>

        <div className={styles.login}>
          <p>Faça login com email</p>
          <input type="text" />
          <input type="password" />
          <button>ENTRAR</button>
          <a href="">Cadastre-se</a>     
        </div>
      </section>
    </main>
    );
  }