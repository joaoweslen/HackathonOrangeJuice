import styles from "../assets/css/login.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Button from "@/assets/components/button/button.module";
import Link from 'next/link';

export default function Login() {
    return (
    <main>
      <div className={styles.box}>
        <FormCard title="Entre no Orange Portfólio">
          

          <form className={styles.form} action="">
            <button className={styles.google}>Entrar com Google</button>
            <p className={styles.text}>Faça login com email</p>
            <Input type="email" placeholder="Email address"/>
            <Input type="password" placeholder="Password"/>
            <Button>ENTRAR</Button>
            <Link className={styles.link} href="/cadastro" passHref>Cadastre-se</Link>
          </form>
        </FormCard>
      </div>
    </main>
    );
  }