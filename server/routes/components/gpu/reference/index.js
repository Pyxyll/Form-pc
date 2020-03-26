const express = require("express");
const router = express.Router();

// This is intended as a blueprint for the reference GPUs returned object.
// There will be a seperate table for manufacturer cards.
/**
 * length is given in mm
 * vram is given in GB
 * frequency is given in MHz
 * benchmarks are given in fps
 */
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "GTX 1060 3GB",
      designer: "Nvidia",
      type: "GTX 1060",
      cuda_Cores: 1152,
      vram: 3,
      tdp: 120,
      frequency: { base: 1506, boost: 1702 },
      release_date: "12/08/2016",
      rrp: 200
    }
  ]);
});

module.exports = router;
