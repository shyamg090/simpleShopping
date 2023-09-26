const express = require("express");
const server = express();

// const fs = require('fs');
// const demoString = fs.readFileSync('demo.json', 'utf-8');
// const demo = JSON.parse(demoString);
// const products = demo.products;

//to get products from database and modify the products
const mongoose = require('mongoose');
const model = require('../model/productsModel');
const Product = model.Product;

exports.createProduct = (req, res) => { //post

    const product = new Product(req.body);
    console.log(product);

    product.save().then((msg) => {
        console.log(msg);
        res.status(200).json(product);
    })

};

exports.getAllFun = async(req, res) => { //get
    const products = await Product.find();
    res.json(products);
    console.log(products);
}

exports.getFun = async(req, res) => { //get
    //get the id from the url using .params.id
    const id = req.params.id;
    console.log(id);
    //find the product that has the same id
    const product = await Product.findById(id);
    //send the response as found / matched id
    res.json(product); 
}


exports.postFun = (req, res) => { //
    console.log(req.body);
    //push the req.body to the end of the products array
    Product.insertOne(req.body);
    res.json(req.body);
}

exports.replaceFun = async(req, res) => { //put
    // req.params.id ---> gives "2" string of number ---> to convert it into number 2 = +"2"
    const id = req.params.id;
    try {
        const product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(201).json(product);
    }
    catch(err){
        res.status(401).json(err);
    }
}

exports.updateFun = async(req, res) => { //patch
    const id = req.params.id;
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json(product);
    }
    catch(err){
        res.status(401).json(err);
    }
}

exports.deleteFun = async(req, res) => { //delete
    const id = req.params.id;
    try {
        const product = await Product.findOneAndDelete({ _id: id });
        res.status(201).json(product);
    }
    catch(err){
        res.status(401).json(err);
    }

}