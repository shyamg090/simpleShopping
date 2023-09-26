require('dotenv').config();
const express = require('express'); //2-3 to create a server
const server = express();
const cors = require('cors');

const path = require('path');


const routerObjProd = require("./routes/productsRoute")


// -------creating a new file for routes (routes>project.js) and require into the index file ---------------------
//-----------------------MIDDLEWARE-------------------------------------
server.use( cors() );
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR))); //for the html file to in public folder



server.use('/products', routerObjProd.router);


// -------------------------put this in the last-------------------------(v.v.imp)
//to use the react single page index file
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
}) 


server.listen(process.env.PORT, () => {
    console.log('server started');
})
