const connection = require("firebase-admin");

const serviceAccount = require("./hackathon-90ee4-firebase-adminsdk-ww7bm-b18cfabc69.json");

const BUCKET = "hackathon-90ee4.appspot.com";

connection.initializeApp({
  credential: connection.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

module.exports = { 
  connection,
  BUCKET
};