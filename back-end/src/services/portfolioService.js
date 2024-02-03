const postModel = require('../models/postModel');

const errorMessageDelete = { status: 404, message: 'Not found' };

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

const updateByIdService = async(id, data, imageUrl) => {
    const response = await postModel.updateById(id, data, imageUrl);
    return response;
}

const deleteByIdService = async (id) => {
    if(!id) throw errorMessageDelete;
    const response = await postModel.deleteById(id);
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