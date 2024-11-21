const express = require('express');
const bodyParser = require("body-parser");
const { PORT } = require('./config/server.config') ;
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDb = require('./config/db.config');
// const mongoose = require("mongoose");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());


app.use('/api',apiRouter);

// Last middleware if any error comes
app.use(errorHandler);

app.listen(PORT,async ()=>{
    console.log(`Server started on port ${PORT}`);
    await connectToDb();
    console.log("Successfully connnected to db");

})