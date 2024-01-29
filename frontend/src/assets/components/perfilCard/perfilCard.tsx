import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FormProject from "../formProject/formProject.module";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState, useEffect } from "react";

export default function MultiActionAreaCard() {
  const [ fullName, setFullName ] = useState('');

  useEffect(() => {
      const Storage = JSON.parse(localStorage.getItem("data") || "");
      console.log(Storage)
      const data = Storage;
      const fullName = `${data["first_name"]} ${data["last_name"]}`
      setFullName(fullName)
    }, []
  );

  return (
    <Card elevation={0} sx={{ height: 122,width: 375, maxWidth: 375, display: "flex", gap: 5, padding: 0 }}>
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

      <CardContent sx={{ padding: 0}}>
        <CardContent sx={{ padding: 0, marginBottom: 2}}>
          <Typography gutterBottom variant="h5" component="div">
            {fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brasil
          </Typography>
        </CardContent>

        <CardActionArea>
          <FormProject/>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
