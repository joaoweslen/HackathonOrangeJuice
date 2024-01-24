const connection = require("firebase-admin");

const serviceAccount = require("./app-portifolios-firebase-adminsdk-f6eh5-3ca8f9b4be.json");

connection.initializeApp({
  credential: connection.credential.cert(serviceAccount)
});

module.exports = connection;