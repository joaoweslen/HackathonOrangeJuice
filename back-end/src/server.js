const app = require("./app");
const PORT = process.env.PORT || 3000

app.get("/coffee", (req, res) => {
    res.status(200).json({status: "ok"})
});

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo! teste' }));

app.listen(
    PORT, () => console.log(`Escutando na porta ${PORT}`)
);