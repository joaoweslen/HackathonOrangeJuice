const { response } = require("express");
const { connection, BUCKET } = require("./connection/connection");
const db = connection.firestore();

const uploadImage = async (req, res, next)  => {
    const bucket = connection.storage().bucket()
    
    const image = req.file;

    const fileName = Date.now() + "." + image.originalname;
  
    const file = bucket.file("images/" + fileName);

    console.log(file)

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
  
      req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/images/${fileName}`;
  
      next();
    })
  
    stream.end(image.buffer);
  };


const createPost = async (data) => {
    const id = crypto.randomUUID()+Date.now();
    const postRef = db.collection("posts").doc(id);
    
    const { firebaseUrl } = data.file;

    const postToUpload = {
        "id": id,
        "title": data.body.title,
        "tags": data.body.tags,
        "url": data.body.url,
        "image": firebaseUrl, 
        "description": data.body.description,
    }

    await postRef.set(postToUpload);
    
    return {postToUpload};
}

const getAllPosts = async (data) => {
    const postsRef = db.collection("posts");
    const postsDoc = await postsRef.get();

    let postArr = [];
    postsDoc.forEach (doc => {
        postArr.push(doc.data());
    });

    return postArr;
}

const getById = async (id) => {
    const postRef = db.collection("posts").doc(id);
    const postDoc = await postRef.get();

    return(postDoc.data());
}

const updateById = async (id, data) => {
    const postRef = db.collection("posts").doc(id);
    await postRef.update(data);
    const postDoc = await postRef.get();

    return(postDoc.data());
}

const deleteById = async (id) => {
    const data = await getById(id);
    const imageUrl = data.image;
    console.log(imageUrl)

    db.collection("posts").doc(id).delete();
    connection.storage().bucket(imageUrl).deleteFiles();

    return response.status(204);
}

module.exports = {
    createPost,
    getAllPosts,
    getAllPosts,
    getById,
    updateById,
    deleteById,
    uploadImage
}