const { response } = require("express");
const { connection, BUCKET } = require("./connection/connection");
const { post } = require("../routes/portfolioRouter");
const db = connection.firestore();

const uploadImage = async (req, res, next)  => {
    const bucket = connection.storage().bucket()
    
    const image = req.file;

    const fileName = Date.now() + "." + image.originalname;
  
    const file = bucket.file("images/" + fileName);

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


const createPost = async (userName, title, tags, url, imageUrl, description, ownerId) => {
    const id = crypto.randomUUID()+Date.now();
    const dateNow = new Date().toDateString();
  
    const postRef = db.collection("posts").doc(id);
    const userRef = db.collection("users").doc(ownerId);
    const userDoc = await userRef.get();

    const postToUpload = {
        "id": id,
        "userName": userName,
        "date": dateNow,
        "title": title,
        "tags": tags,
        "url": url,
        "image": imageUrl, 
        "description": description,
        "ownerId": ownerId
    }
    await postRef.set(postToUpload);
    userRef.update({
      ['posts']: connection.firestore.FieldValue.arrayUnion(id)
    })

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

const getPostsForIdUser = async (id) => {
    const postRef = db.collection("posts");
    const postDocs = await postRef.get();

    const postArr = [];

    postDocs.forEach((doc) => {
      postArr.push(doc.data());
    })

    const postArrFiltred = postArr.filter((doc) => {
      if(doc.ownerId == id) return doc;
    })

    //console.log("getPostsForIdUser " + postArrFiltred)

    return postArrFiltred;
}

const updateById = async (id, data) => {
    const postRef = db.collection("posts").doc(id);
    await postRef.update(data);
    const postDoc = await postRef.get();

    return(postDoc.data());
}

const deleteById = async (id, ownerId) => {
    const data = await getById(id);
    const imageUrl = data.image;

    const startIndex = imageUrl.indexOf("/images/") + "/images/".length
    const filePath = imageUrl.substring(startIndex);
    const userRef = db.collection("users").doc(ownerId);


    db.collection("posts").doc(id).delete();
    connection.storage().bucket().file("images/" + filePath).delete();
    userRef.update({
      ['posts']: connection.firestore.FieldValue.arrayRemove(id)
    })

    return response.status(204);
}

module.exports = {
    createPost,
    getAllPosts,
    getAllPosts,
    getById,
    updateById,
    deleteById,
    uploadImage,
    getPostsForIdUser,
    uploadImage
}