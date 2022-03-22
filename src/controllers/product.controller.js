const productService = require('../services/product.service');

const get = function(req, res){
    res.send(productService.get(req.params.cug));
}

module.exports = {
    get
};