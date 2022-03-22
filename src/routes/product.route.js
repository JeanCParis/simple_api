const express = require('express');
const router = express.Router({ mergeParams: true });

const productController = require('../controllers/product.controller');

router.route('/:cug')
    .get(productController.get);

module.exports = router;