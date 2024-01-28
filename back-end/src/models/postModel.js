const { connection } = require("./connection/connection");
const db = connection.firestore();

const multer = require('multer')
const Multer = multer({
    storage: multer.memoryStorage()
})


const createPost = async (data) => {
    const id = crypto.randomUUID();
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
    postDoc.forEach (doc => {
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
    const postRef = await db.collection("posts").doc(id).delete();

    return postRef;
}

module.exports = {
    createPost,
    getAllPosts,
    getAllPosts,
    getById,
    updateById,
    deleteById
}