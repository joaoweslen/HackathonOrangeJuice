import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ height: 122,width: 375, maxWidth: 375, display: "flex", gap: 5, padding: 0 }}>
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
            Camila Soares
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brasil
          </Typography>
        </CardContent>

        <CardActionArea>
          <Button disabled
            variant="contained"
            href="#contained-buttons"
            color="primary"
            size="large"
          >
            ADICIONAR PROJETO
          </Button>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
