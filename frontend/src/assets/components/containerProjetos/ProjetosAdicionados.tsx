import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";



const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    thumbnail: "Don Diablo",
    descricao: "descrição do projeto",
    tags: ["ux", "web"],
    nome: "camila",
    avatar: "/Circle.svg",
    data: "12/23",
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  // Garante que haja pelo menos 3 esqueletos
  const skeletonData = Array.from({ length: Math.max(3, data.length) });

  return (
    <Grid container wrap="nowrap">
      {skeletonData.map((_, index) => {
        const item = data[index];

        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 389,
              height: 258,
              marginRight: 5,
              my: 5,
            }}
          >
            {item ? (
              <img
                style={{ width: 389, height: 258 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton variant="rectangular" width={389} height={258} />
            )}
            {item ? (
              <Box sx={{ pr: 2, display: "flex", alignItems: "center" }}>
                <Avatar alt="Avatar" src={item.avatar} />
                <Box sx={{ marginLeft: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {`${item.nome} • ${item.data}`}
                  </Typography>
                  {item.tags && (
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                      {item.tags.map((tag, tagIndex) => (
                        <Typography
                          key={tagIndex}
                          variant="caption"
                          color="text.secondary"
                          sx={{ marginLeft: 1 }}
                        >
                          {`${tag}`}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}></Box>
            )}
          </Box>
        );
      })}
    </Grid>
  );
}

export default function Projetos() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media />
    </Box>
  );
}




