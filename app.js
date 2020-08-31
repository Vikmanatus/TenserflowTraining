// Defining basic dependencies for running the server
const express = require('express');
const app = express();
// To be able to extract information from the request
const bodyParser = require('body-parser');
// For CORS ERRORS handleling
const cors = require('cors');
// This library will watch all the requests
const morgan = require('morgan');

app.use(cors())
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    return res.status(200).json({message:"Welcolme to TenserflowJs training."})
})

module.exports = app;


