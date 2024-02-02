import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ProjectCard from '@/assets/components/containerProjetos/projectContainer.module'
import ProjectContainer from '@/assets/components/containerProjetos/projectContainer.module'
import ViewProject from '@/assets/components/viewProject/viewProject.module';
import BuscaTags from '@/assets/components/buscarTags/buscaTags.module'
import Navbar from "@/assets/components/navbar/navbar.module";
import styles from "@/assets/css/descobrir.module.css";
import '@fontsource/roboto/300.css';
import '@/assets/css/globals.css';
import { requestGET, setToken } from '@/utils/request';
import { useRouter } from 'next/navigation';


export default function Descobrir() {
  const [posts, setPost] = useState([]);
  const [tag, setTag] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    loadPosts()
  
  },[]);

  async function loadPosts() {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      setToken(token);
      const responseAPI = await requestGET('/portfolio');
      //console.log(responseAPI);
      setPost(responseAPI);
    } catch (error) {
      console.error(error);
      push('/login')
    }
  }

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Orange Portfolio - Descobrir</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.Container}>
              <h1 className={styles.tituloProjetos}>Junte-se à comunidade de inovação, inspiração e descobertas,
                 transformando experiências em conexões inesquecíveis</h1>
        </div>
        <div className={styles.BuscaProjetos}>        
          <BuscaTags valueTag={tag} functionSetTag={setTag}/>
        </div>

        <div>
          {/* <ProjectCard/> */}
          <ViewProject/>
          {console.log(posts)}
          {
            posts.filter((post:any ,i ) => post.tags.join("/").includes(tag))
              .map((post:any ,i ) =>  <ProjectContainer key={i} data={post} />)
          }
          {/* <ProjectContainer/> */}
        </div>
        
      </main>
    </div>
  );
}