import styles from "../assets/css/login.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Button from "@/assets/components/button/button.module";
import Link from 'next/link';

export default function Cadastro() {
    return (
    <main>
      <div className={styles.box}>
        <FormCard title="Cadastre-se">
          <form className={styles.form} action="">
            <Input type="text" placeholder="Nome"/>
            <Input type="text" placeholder="Sobrenome"/>
            <Input type="email" placeholder="Email address"/>
            <Input type="password" placeholder="Password"/>
            <Button>CADASTRAR</Button>
          </form>
        </FormCard>
      </div>
    </main>
    );
  }