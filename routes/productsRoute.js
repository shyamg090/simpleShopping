const express = require("express")
const router = express.Router();

const controllerProducts = require("../controller/productsController")


router.post('/', controllerProducts.createProduct)
    .get('/', controllerProducts.getAllFun)
    .get('/:id', controllerProducts.getFun)
    .put('/:id', controllerProducts.replaceFun)
    .patch('/:id', controllerProducts.updateFun)
    .delete('/:id', controllerProducts.deleteFun);

exports.router = router;    