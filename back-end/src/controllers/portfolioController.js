const portfolioService = require('../services/portfolioService');

const register = async(req, res) => {

    const portfolioDoc = await portfolioService.registerService(req);
    console.log(portfolioDoc.id)
    res.status(200).json(portfolioDoc);
}

const getAll = async (req, res) => {
    const portfoliosList = await portfolioService.getAllService();
    res.status(200).json(portfoliosList);
};

const findById = async (req, res) => {
    const portfolio = await portfolioService.getByIdService(req.params.id);
    res.status(200).send(portfolio);
};

const updateById = async (req, res) => {
    const portfolio = await portfolioService.updateByIdService(req.params.id, req.body);
    res.status(200).send(portfolio);
};

const deleteById = async (req, res) => {
    const response = await portfolioService.deleteByIdService(req.params.id);
    res.send(response);
};

module.exports = {
    register,
    getAll,
    findById,
    updateById,
    deleteById
};