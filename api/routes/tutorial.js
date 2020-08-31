const express = require("express");
const router = express.Router();
const tf = require("@tensorflow/tfjs");

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require("@tensorflow/tfjs-node");

// To create a tensor ==> Values, shapes, dtype (go to documentation for more information)
router.get("/", (req, res) => {
  // Values and shapes (x^n)
  const firstTenser = tf.tensor([0, 0, 127, 255, 100, 50, 24, 54], [2, 2, 2]);
  //firstTenser.print()
  console.log(firstTenser);

  // Creating 5 x 3 tensor
  const values = [];
  const x = 0;
  const y = 100;
  for (let i = 0; i < 15; i++) {
    values[i] = Math.random() * y + x;
  }

  const shape = [5,3];

  const a = tf.tensor2d(values, shape, "int32");

  const b = tf.tensor2d(values, shape, "int32");

  const bb = b.transpose();

  const c = a.matMul(bb);

 c.print()

  return res.status(200).json({ message: "Welcolme to the tutorial route" });
});




module.exports = router;
