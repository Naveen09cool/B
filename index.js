const express = require('express');
const port = 8000;
const app = express();
const db = require('./configs/mongoose');

app.use(express.urlencoded({extended : true}));

app.use(express.json());

app.use('/',require('./routes/index.js'));

app.listen(port,function(err){
    if(err){
        console.log('Error in connecting on port'+err)
    }
    console.log('Yeah! Connection successful on port'+port)
})