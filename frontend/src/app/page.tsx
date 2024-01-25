import Link from 'next/link';
import styles from './page.module.css';

export default function Login() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Página de Login</h1>
        
        <Link href="/home" passHref>
          <span className={styles.button}>Ir para a Página Home</span>
        </Link>
      </div>
    </main>
  );
}


