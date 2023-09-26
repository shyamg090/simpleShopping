const express = require("express")
const router = express.Router();

const controllerUser = require("../controller/userController")


router.get('/', controllerUser.getAllFun)
    .post('/', controllerUser.postFun)
    .get('/:id', controllerUser.getFun)
    .put('/:id', controllerUser.replaceFun)
    .patch('/:id', controllerUser.updateFun)
    .delete('/:id', controllerUser.deleteFun);

exports.router = router;    