const app = require("./app");

app.get("/coffee", (req, res) => {
    res.status(200).json({status: "ok"})
});

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo! teste' }));

app.listen(process.env.PORT || 3000, 
    () => console.log(`Escutando na porta ${3000}`)
);