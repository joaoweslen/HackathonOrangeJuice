import styles from "@/assets/css/cadastro.module.css";
import FormCard from "@/assets/components/formCard/formCard.module";
import Input from "@/assets/components/input/input.module";
import Password from "@/assets/components/input/password.module";
import Button from "@/assets/components/button/button.module";
import cadas_img from "@/assets/img/img_cadastro.jpg"
import '../assets/css/globals.css';
import Imagem from 'next/image'
import {useState, useEffect} from 'react';
import { requestPOST } from "@/utils/request";
import { useRouter } from 'next/navigation';

export default function Cadastro() {

    const { push } = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usersExists, setUsersExists] = useState(false);

    useEffect(()=>{
      setUsersExists(false);
      console.log(firstName,lastName,email,password)
    },[firstName,lastName,email,password]);

    async function buttonRegister() {

      try{
        const reponseAPI = await requestPOST({
          route: '/register',
          body: {
            first_Name: firstName,
            last_name: lastName,
            email,
            password
          }
        });
        localStorage.setItem("data", JSON.stringify(reponseAPI))
        console.log(reponseAPI)
        push("/home");
      }catch(e){
        setUsersExists(true);
      }
    }

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
                      onClick={() => buttonRegister()}
                    />
                  </div>
                </div>
              </FormCard>
            </div>
            {
              (usersExists)
                ? (
                  <h1 style={{background: "red"}}>
                    {
                      `O endereço de e-mail já está em uso.
                          Por favor, tente novamente.`
                    }
                  </h1>
                )
                : null
            }

          </main>
    );
  }