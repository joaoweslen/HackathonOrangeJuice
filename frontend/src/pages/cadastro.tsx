import styles from "@/assets/css/login.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Password from "@/assets/components/input/password.module";
import Button from "@/assets/components/button/button.module";
import cadas_img from "@/assets/img/img_cadastro.jpg"
import Imagem from 'next/image'

export default function Cadastro() {
    return (
    <main>
      <div className={styles.box}>
        <div>
          <Imagem
            src={cadas_img}
            alt="Logo da empresa Google" 
            // style={{margin:0}}
            // priority={false}
          />
        </div>

        <FormCard title="Cadastre-se">
          <form className={styles.form} action="">
            <Input name="nome"  label="Nome" type="text" id="nome" required/>
            <Input name="sobrenome"  label="Sobrenome" type="text" id="sobrenome" required/>
            <Input name="email"  label="Email Address" type="email" id="email"/>
            <Password name="password" label="Password" id="password"/>
            <Button>CADASTRAR</Button>
          </form>
        </FormCard>
      </div>
    </main>
    );
  }