const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.home);

router.post('/update', productController.payloads);

router.post('/create', productController.createProduct);


module.exports = router;