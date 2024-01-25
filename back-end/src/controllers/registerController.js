const registerService = require('../services/registerService');

const registerController = async (req, res) => {
    const { body } = req;
    ///console.log(body, "controller");
    const dataUser = await registerService.registerService(req.body);
    res.status(200).json(dataUser);
};

module.exports = registerController;