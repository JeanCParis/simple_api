const data = require('../data');

const get = function(cug){
    return getAll().find(product => product.cug == cug && product.isActive);
}

const getAll = function(){
    return data.Products;
}

module.exports = {
    get,
    getAll
};