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
        <Link href="/" passHref>Entrar com Google</Link>
          <form className={styles.form} action="">
            <p>Faça login com email</p>
            <Input type="email"/>
            <Input type="password"/>
            <Button>Logar</Button>
            <Link href="/" passHref>Cadastre-se</Link>
          </form>
        </FormCard>
      </div>
    </main>
    );
  }