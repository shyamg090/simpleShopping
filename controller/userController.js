const express = require("express");
const server = express();

const fs = require('fs');
const demoString = fs.readFileSync('demo.json', 'utf-8');
const demo = JSON.parse(demoString);
const users = demo.users; 

exports.getAllFun = (req, res) => {
    res.json(users);
}

exports.getFun = (req, res) => {
    //get the id from the url using .params.id
    const id = req.params.id;
    //find the product that has the same id
    const product = users.find(p => p.id == id);
    //send the response as found / matched id
    res.json(product); 
}


exports.postFun = (req, res) => {
    console.log(req.body);
    //push the req.body to the end of the users array
    users.push(req.body);
    res.json(req.body);
}

exports.replaceFun = (req, res) => {
    // req.params.id ---> gives "2" string of number ---> to convert it into number 2 = +"2"
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id === id);
    //overides
    users.splice(productIndex, 1, { ...req.body, id: id });
        res.status(201).json();

    //..............(initial index , delete positions , add / replace after initial index)
}

exports.updateFun = (req, res) => {
    // req.params.id ---> gives "2" string of number ---> to convert it into number 2 = +"2"
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id === id);
    //spread users and add req.body
    const product = users[productIndex];
    users.splice(productIndex, 1, { ...product, ...req.body });
    res.status(201).json();
}


exports.deleteFun = (req, res) => {
    // req.params.id ---> gives "2" string of number ---> to convert it into number 2 = +"2"
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id === id);
    //spread users and add req.body
    users.splice(productIndex, 1);
        res.status(201).json();

}