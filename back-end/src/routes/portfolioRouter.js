const { Router } = require('express');
const { uploadImage } = require('../models/postModel')

const multer = require('multer')
const Multer = multer({
    storage: multer.memoryStorage()
})

const portfolioController = require('../controllers/portfolioController')

const portfolioRouter = Router();

portfolioRouter.post('/', Multer.single("image"), uploadImage, portfolioController.register);
portfolioRouter.get('/', portfolioController.getAll);
portfolioRouter.get('/:id', portfolioController.findById);
portfolioRouter.put('/:id', portfolioController.updateById);
portfolioRouter.delete('/:id', portfolioController.deleteById);

module.exports = portfolioRouter;