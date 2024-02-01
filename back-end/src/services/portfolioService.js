const postModel = require('../models/postModel');

const registerService = async (userName, title, tags, url, imageUrl, description, ownerId) => {
    const response = await postModel.createPost(userName, title, tags, url, imageUrl, description, ownerId);
    // console.log(response)
    return response;
}

const getAllService = async() => {
    const response = await postModel.getAllPosts();
    return response;
}

const getByPostIdService = async(id) => {
    const response = await postModel.getByPostsId(id);
    return response;
}

const getByOwnerIdService = async(id) => {
    const response = await postModel.getPostsForIdUser(id);
    return response;
}

const updateByIdService = async(id, data) => {
    const response = await postModel.updateById(id, data);
    return response;
}

const deleteByIdService = async (id, ownerId) => {
    const response = await postModel.deleteById(id, ownerId);
    return response;
}

module.exports = {
    registerService,
    getAllService,
    getByPostIdService,
    getByOwnerIdService,
    updateByIdService,
    deleteByIdService
};