const express = require('express');
const bodyParser = require("body-parser");
const { PORT } = require('./config/server.config') ;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})