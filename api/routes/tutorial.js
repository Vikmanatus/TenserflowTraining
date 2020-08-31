const express = require("express");
const router = express.Router();
const tf = require('@tensorflow/tfjs');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node');

// To create a tensor ==> Values, shapes, dtype (go to documentation for more information)
router.get('/', (req,res)=>{
                                    // Values                   // Shapes x^n
    const firstTenser = tf.tensor([0, 0, 127,255,100,50,24,54],[2,2,2]);
    //firstTenser.print()
    console.log(firstTenser)
    
    return res.status(200).json({message:'Welcolme to the tutorial route'});
});

module.exports = router;
