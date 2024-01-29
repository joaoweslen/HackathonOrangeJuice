import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FormProject from "../formProject/formProject.module";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";

export default function MultiActionAreaCard() {
    const [fullName, setFullName] = useState('');
    const [local, setlocal] = useState('');

    useEffect(() => {
      try {
          const storedData = localStorage.getItem("data");
          if (storedData) {
              const data = JSON.parse(storedData);
              const fullName = `${data["first_name"]} ${data["last_name"]}`;
              setFullName(fullName);
  
              // Supondo que você tenha uma chave "local" nos seus dados
              const userLocal = data["local"];
              setlocal(userLocal);
          } else {
              console.error("Dados ausentes no armazenamento local.");
          }
      } catch (error) {
          console.error("Erro ao analisar dados do armazenamento local:", error);
      }
  }, []);

    return (
        <Card elevation={0} sx={{
            height: 122,
            width: 375,
            maxWidth: 375,
            display: "flex",
            gap: 5,
            padding: 0
        }}>
            <CardActionArea sx={{ width: 122, maxWidth: 122 }}>
                <CardMedia
                    component="img"
                    style={{
                        width: "122px",
                        height: "122px",
                        borderRadius: "50%",
                    }}
                    image="/Circle.svg"
                    alt="Perfil Usuário"
                />
            </CardActionArea>

            <CardContent sx={{ padding: 0 }}>
                <CardContent sx={{ padding: 0, marginBottom: 2 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {fullName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {local}
                    </Typography>
                </CardContent>

                <CardActionArea>
                    <FormProject />
                </CardActionArea>
            </CardContent>
        </Card>
    );
}
