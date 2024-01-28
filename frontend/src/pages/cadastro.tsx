import styles from "@/assets/css/cadastro.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Password from "@/assets/components/input/password.module";
import Button from "@/assets/components/button/button.module";
import cadas_img from "@/assets/img/img_cadastro.jpg"
import '../assets/css/globals.css';
import Imagem from 'next/image'

export default function Cadastro() {
    return (
          <main>
            <div className={styles.div_img}>
                <Imagem className={styles.img}
                  src={cadas_img}
                  alt="Logo da empresa Google" 
                />
              </div>

            <div className={styles.box}>
              <FormCard title="Cadastre-se">
              <form action="">
                  <div className={styles.half}>
                    <Input fullWidth name="nome"  label="Nome *" type="text" id="nome" autoFocus/>
                  </div>
                  <div className={styles.half2}>
                    <Input fullWidth name="sobrenome"  label="Sobrenome *" type="text" id="sobrenome" autoFocus/>
                  </div>
                  <div className={styles.form}>
                    <Input name="email"  label="Email Address" type="email" id="email" autoFocus/>
                    <Password name="password" label="Password" id="password"/>
                    <Button type="submit" value="CADASTRAR"/>
                  </div>
                  
                </form>
              </FormCard>
            </div>
          </main>
    );
  }