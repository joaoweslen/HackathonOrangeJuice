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

// const findById = async (Id) => {
//     const usersRef =  db.collection("users");

//     const usersDoc = await usersRef.get();
    
//     const users = []

//     usersDoc.forEach(doc => users.push(doc.data()));
//     const user = users.filter(user => user.id == Id);
    
//     return user[0];
// }

const findById = async (Id) => {
    const usersRef =  db.collection("users").doc(Id);

    const usersDoc = await usersRef.get();
    
    const result = usersDoc.data();
    
    
    return result;
}

const createUsers = async (data) => {
    const usersRef =  db.collection("users");

    const usersDoc = await usersRef.add(data);
    
    const usersDocData = await findById(usersDoc.id);
    if(!usersDocData) console.log("nãooooooooooooooo")
    console.log(usersDocData, "MODEL AQQUUIIII")

    return {id: usersDoc.id, ...usersDocData};
}

module.exports = {
    getAllUsers,
    findOne,
    findById,
    createUsers
};