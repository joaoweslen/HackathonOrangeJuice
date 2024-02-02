import styles from "@/assets/css/cadastro.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Password from "@/assets/components/input/password.module";
import Button from "@/assets/components/button/button.module";
import cadas_img from "@/assets/img/img_cadastro.jpg"
import SucessAlert from "@/assets/components/alerts/sucessAlert.module";
import ErroAlert from "@/assets/components/alerts/erroAlert.module";
import Link from 'next/link';
import '../assets/css/globals.css';
import Imagem from 'next/image'
import {useState, useEffect} from 'react';
import { requestPOST } from "@/utils/request";
// import { useRouter } from 'next/navigation';

export default function Cadastro() {

    // const { push } = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usersExists, setUsersExists] = useState(false);
    const [usersCadSucces, setUsersCadSucces] = useState(false);

    useEffect(()=>{
      setUsersExists(false);
      // console.log(firstName,lastName,email,password)
    },[firstName,lastName,email,password]);

    async function buttonRegister() {
      try{
        const reponseAPI = await requestPOST({
          route: '/register',
          body: {
            first_name: firstName,
            last_name: lastName,
            email,
            password
          }
        });
        localStorage.setItem("data", JSON.stringify(reponseAPI))
        // console.log(reponseAPI)
        setUsersCadSucces(true)
        setTimeout(() => {
          setUsersCadSucces(false)
        }, 4000);
        // push("/home");
      }catch(e){
        setUsersExists(true);
      }
    }

    return (
          <main>
            <div className={styles.div_img}>
                <Imagem className={styles.img}
                  src={cadas_img}
                  alt="Imagem de uma garota sentada mexendo num notebook" 
                />
            </div>

            <div className={styles.box}>
              {usersCadSucces && <SucessAlert mensagem={"Cadastro feito com sucesso"}/>}
              {usersExists && <ErroAlert mensagem={"Esse e-mail já está cadastrado"}/>}
              <FormCard title="Cadastre-se">
              <div>
                  <div className={styles.half}>
                    <Input 
                      fullWidth name="nome"  
                      label="Nome *" 
                      type="text" 
                      id="nome"
                      inputValue={firstName} 
                      functionEdicion={setFirstName}
                      autoFocus
                    />
                  </div>
                  <div className={styles.half2}>
                    <Input 
                      fullWidth name="sobrenome"  
                      label="Sobrenome *" 
                      type="text" 
                      id="sobrenome" 
                      inputValue={lastName} 
                      functionEdicion={setLastName}
                      autoFocus
                    />
                  </div>
                  <div className={styles.form}>
                    <Input name="email"
                      label="Email Address" 
                      type="email" id="email" 
                      inputValue={email} 
                      functionEdicion={setEmail} 
                      autoFocus
                    />
                    <Password name="password" 
                      label="Password" 
                      inputValue={password} 
                      functionEdicion={setPassword} 
                      id="password"
                    />
                    <Button 
                      type="submit" 
                      value="CADASTRAR"
                      Password={password}
                      Email={email}
                      onClick={() => buttonRegister()}
                    />
                    <Link className={styles.link} href="/login" passHref>Faça Login</Link>
                  </div>
                </div>
              </FormCard>
            </div>
          </main>
    );
  }