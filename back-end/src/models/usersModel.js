const { connection } = require("./connection/connection");
const db = connection.firestore();
//const md5 = require("../helpers/encriptPassword");
//const e = require("express");
const uuid = require('uuid');


const getAllUsers = async (Id) => {
    const usersRef =  db.collection("users");

    const usersDoc = await usersRef.get();
    
    const users = []

    usersDoc.forEach(doc => users.push(doc.data()));
    return users;
}

const findOne = async (Email) => {
    const usersRef =  db.collection("users");

    const usersDoc = await usersRef.get();
    
    const users = []

    usersDoc.forEach(doc => users.push(doc.data()));
    const user = users.filter(user => user.email == Email);
    
    return user;
}

const findById = async (Id) => {
    const usersRef =  db.collection("users").doc(Id);

    const usersDoc = await usersRef.get();
    
    const result = usersDoc.data();
    
    
    return result;
}

const createUsers = async (data) => {
    const {last_name, email, password,first_name} = data;
    const userExists = await findOne(email);
    if(userExists.length) throw { status: 409 , message: "E-mail already registered" };

    const id = uuid.v4() + Date.now();
    
    const usersRef =  db.collection("users").doc(id);

    const serializeUser = {
        id,
        last_name,
        email,
        password,
        first_name
    }

    await usersRef.set(serializeUser, { merge: true })
    .then(() => {
        console.log('Atualização bem-sucedida');
      })
      .catch(error => {
        console.error('Erro ao atualizar:', error);
      });

    const usersDoc = await usersRef.get(id);
    //if(!usersDoc.id) throw { status: 500 , message: "error server" };
    const dataResponseDb = usersDoc.data()
    //console.log(usersDoc.data());

    return {
        id,
        "email": dataResponseDb.email,
        "first_name": dataResponseDb.first_name,
        "last_name": dataResponseDb.last_name,
    };
}

module.exports = {
    getAllUsers,
    findOne,
    findById,
    createUsers
};