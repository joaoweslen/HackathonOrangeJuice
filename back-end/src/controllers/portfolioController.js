const portfolioService = require('../services/portfolioService');

const errorMessage = { status: 400, message: 'Bad Request!'};
const errorMessageNotFoundUserOrTitle = { status: 400, message: 'Bad Request!, user or title'};

const register = async(req, res) => {
    console.log("controller")
    const {userName, title, tags, url, description} = req.body;
    console.log("controller2",userName, title,)
    const ownerId = req.id;
    const { firebaseUrl } = req.file;
    console.log("controller3")
    const imageUrl = firebaseUrl;
    console.log("controller4")
    if (!userName | !title) throw errorMessageNotFoundUserOrTitle;
    console.log("controller5")
    const portfolioDoc = await portfolioService.registerService(userName, title, tags, url, imageUrl, description, ownerId);
    console.log("controller6")
    res.status(200).json(portfolioDoc);
}

const getAll = async (req, res) => {
    const portfoliosList = await portfolioService.getAllService();
    res.status(200).json(portfoliosList);
};

const findByPostsId = async (req, res) => {
    const portfolio = await portfolioService.getByIdService(req.params.id);
    res.status(200).json(portfolio);
};

const findByOwnerId = async (req, res) => {
    console.log(req.id)
    const portfolio = await portfolioService.getByOwnerIdService(req.id);
    //console.log(portfolio, "Controlerr");
    res.status(200).json(portfolio);

};

const updateById = async (req, res) => {
    const { firebaseUrl } = req.file;
    const imageUrl = firebaseUrl;
    
    const portfolio = await portfolioService.updateByIdService(req.params.id, req.body, imageUrl);
    res.status(200).json(portfolio);
};

const deleteById = async (req, res) => {
    const ownerId = req.id;
    const response = await portfolioService.deleteByIdService(req.params.id, ownerId);
    res.json(response);
};

module.exports = {
    register,
    getAll,
    findByPostsId,
    findByOwnerId,
    updateById,
    deleteById
};