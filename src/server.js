const express       = require ('express');
const bodyParser    = require('body-parser');
const mysql         = require('promise-mysql');


// loading configurations
const config        = require('./config/config');
const port          = config['port-no'];

//app init
const app           = express();

// routes here 
const {routes} = require('./routes');
app.use('/', routes);



app.listen(port, ()=>{
    console.log('listening at port no :', port);
});