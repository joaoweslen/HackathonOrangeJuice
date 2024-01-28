const connection = require("./connection/connection");
const db = connection.firestore();

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
    const userExists = await findOne(data.email);
    if(userExists.length) throw { status: 409 , message: "E-mail already registered" };

    const usersRef =  db.collection("users");

    const serializeUser = {
        ...data,
        posts: []
    }

    const usersDoc = await usersRef.add(serializeUser);
    console.log(usersDoc.id);

    if(!usersDoc.id) throw { status: 500 , message: "error server" };

    return {
        id: usersDoc.id,
        "email": data.email,
        "first_name": data.first_name,
        "last_name": data.last_name,
    };
}

module.exports = {
    getAllUsers,
    findOne,
    findById,
    createUsers
};