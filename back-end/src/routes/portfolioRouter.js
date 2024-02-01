const { Router } = require('express');
const { uploadImage } = require('../models/postModel')
const authenticacionToken = require('../middlewares/authenticacionToken');

const multer = require('multer')
const Multer = multer({
    storage: multer.memoryStorage()
})

const portfolioController = require('../controllers/portfolioController')

const portfolioRouter = Router();

portfolioRouter.post('/', authenticacionToken, Multer.single("image"), uploadImage, portfolioController.register);
portfolioRouter.get('/', authenticacionToken, portfolioController.getAll);
portfolioRouter.get('/posts/:id', authenticacionToken, portfolioController.findByPostsId);
portfolioRouter.get('/userposts', authenticacionToken, portfolioController.findByOwnerId);
portfolioRouter.put('/:id', authenticacionToken, Multer.single("image"), uploadImage, portfolioController.updateById);
portfolioRouter.delete('/:id', authenticacionToken, portfolioController.deleteById);


module.exports = portfolioRouter;