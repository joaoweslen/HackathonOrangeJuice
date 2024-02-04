const express = require("express");
const cors = require('cors');
const app = express();

require('express-async-errors'); 

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
const routes = require('../routes');
const httpErrorMiddleware = require('../middlewares/httpErrorMiddleware');

const usersModel = require('../models/usersModel');

// rota get /teste pra teste api
app.post('/teste', (req, res) => {
    req.file;
    res.status(200).json({ data: req.body.userName })
});

// rota get /users pra teste de conexão com o firebase //
app.get('/users', async (req, res) => {
    const users = await usersModel.getAllUsers("vzNf9vPRE1m2Yx2kRStB");
    res.status(200).json(users)
    }
);

// app.post(
//     "/register", async (req, res) => {
//         const users = await usersModel.createUsers(req.body);
//         res.status(200).json(usersData);
//     }
//);

app.use(routes);
app.use(httpErrorMiddleware);

module.exports = app;