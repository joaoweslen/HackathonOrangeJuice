const registerService = require('../services/registerService');

const registerController = async (req, res) => {
    const { body } = req;
    //console.log("controller");
    const dataUser = await registerService.registerService(body);
    res.status(200).json(dataUser);
};

module.exports = registerController;