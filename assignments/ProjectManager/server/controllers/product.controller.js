const { request, response } = require('express');
const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getOneProduct = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateOneProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
        runValidators: false
    })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => response.status(400).json(err))
}

module.exports.deleteOneProduct = (request, response) => {
    Product.findOneAndDelete({ _id: request.params.id })
    .then((status) => response.json(status))
    .catch((err) => response.status(400).json(err))
}


