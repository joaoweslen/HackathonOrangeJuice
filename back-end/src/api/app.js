const express = require("express");
const app = express();

require('express-async-errors');

app.use(express.json());
const routes = require('../routes');
const httpErrorMiddleware = require('../middlewares/httpErrorMiddleware');

const usersModel = require('../models/usersModel');

// rota get /teste pra teste api
app.get('/teste', (req, res) => res.status(200).json({ message: 'Olá Mundo! teste' }));

// rota get /users pra teste de conexão com o firebase
app.get('/users', async (req, res) => {
    const users = await usersModel.getAllUsers(1);
    res.status(200).json(users)
    }
);

app.use(routes);
app.use(httpErrorMiddleware);

module.exports = app;