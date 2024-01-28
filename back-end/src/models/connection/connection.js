const connection = require("firebase-admin");

const serviceAccount = require("./squad-30-hackathon-firebase-adminsdk-b4yh9-c4dcdeca8a.json");

const BUCKET = "squad-30-hackathon.appspot.com";

connection.initializeApp({
  credential: connection.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = connection.storage().bucket();

const uploadImage = (req, res, next) => {

  const image = req.file;
  const nomeArquivo = Date.now() + "." + image.originalname;

  const file = bucket.file("imagens/" + nomeArquivo);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype
    }
  });

  stream.on("error", (e) => {
    console.error(e);
  })

  stream.on("finish", async () => {
    await file.makePublic();

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/imagens/${nomeArquivo}`;

    next();
  })

  stream.end(image.buffer);
};

module.exports = {
  connection,
  uploadImage
};