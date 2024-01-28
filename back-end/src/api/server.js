
const PORT = process.env.PORT || 3001
const app = require("./app.js");


app.listen(
    PORT, () => console.log(`Escutando na porta ${PORT}`)
);