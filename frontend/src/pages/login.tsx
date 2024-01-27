import styles from "@/assets/css/login.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Password from "@/assets/components/input/password.module";
import Button from "@/assets/components/button/button.module";
import Link from 'next/link';
import Google from "@/assets/img/lg_google.png"
import login_img from "@/assets/img/img_login.jpg"
import Imagem from 'next/image'

export default function Login() {
    return (
      <main>
        <div className={styles.div_img}>
              <Imagem className={styles.img}
                src={login_img}
                alt="Logo da empresa Google" 
              />
            </div>
          <div className={styles.box}>

            

            <FormCard title="Entre no Orange Portfólio">
              <form className={styles.form}>
                <button className={styles.google}>
                  <Imagem
                    src={Google}
                    alt="Logo da empresa Google" 
                    style={{ width:'auto', height:'1.3rem', marginRight: '1.7em', marginBottom:'-0.4em'}}
                  />
                  Entrar com Google
                </button>
                <p className={styles.text}>Faça login com email</p>
                <Input name="email" label="Email Address" type="email" id="email" autoFocus/>
                <Password name="password" label="Password" id="password"/>
                <Button>ENTRAR</Button>
                <Link className={styles.link} href="/cadastro" passHref>Cadastre-se</Link>
              </form>
            </FormCard>
          </div>
        </main>
    );
  }