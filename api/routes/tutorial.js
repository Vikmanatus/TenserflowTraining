const express = require("express");
const router = express.Router();
const tf = require('@tensorflow/tfjs');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node');

router.get('/', (req,res)=>{
    return res.status(200).json({message:'Welcolme to the tutorial route'});
});

module.exports = router;
