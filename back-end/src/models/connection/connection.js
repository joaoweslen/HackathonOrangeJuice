const connection = require("firebase-admin");

const serviceAccount = require("./hackathon-90ee4-firebase-adminsdk-ww7bm-12abc8ebf6.json");

const BUCKET = "squad-30-hackathon.appspot.com";

connection.initializeApp({
  credential: connection.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

module.exports = {
  connection
};