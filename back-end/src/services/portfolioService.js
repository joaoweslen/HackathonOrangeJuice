const postModel = require('../models/postModel');

const registerService = async (data) => {
    const response = await postModel.createPost(data);
    console.log(response)
    return response;
}

const getAllService = async() => {
    const response = await postModel.getAllPosts();
    return response;
}

const getByIdService = async(id) => {
    const response = await postModel.getById(id);
    return response;
}

const updateByIdService = async(id, data) => {
    const response = await postModel.updateById(id, data);
    return response;
}

const deleteByIdService = async (id) => {
    const response = await postModel.deleteById(id);
    return response;
}

module.exports = {
    registerService,
    getAllService,
    getByIdService,
    updateByIdService,
    deleteByIdService
};