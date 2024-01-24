const connection = require("./connection/connection");
const db = connection.firestore();

const getAllUsers = async (Id) => {
    const usersRef =  db.collection("users");

    const usersDoc = await usersRef.get();
    
    const users = []

    usersDoc.forEach(doc => users.push(doc.data()));
    //const user = users.filter(user => user.id == Id);
    //console.log(user);
    return users;
}

const findOne = async (Email) => {
    const usersRef =  db.collection("users");

    const usersDoc = await usersRef.get();
    
    const users = []

    usersDoc.forEach(doc => users.push(doc.data()));
    const user = users.filter(user => user.email == Email);
    
    return user[0];
}

module.exports = {
    getAllUsers,
    findOne
};