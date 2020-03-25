const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("API hit");
  res.send({
    express_says: "This is the api. Please enter a route for more information."
  });
});

// Refactor ALL (exept the export) below this into seperate routes.
router.get("/components", (req, res) => {
  res.send({ Computer_says: "Hi" });
});

// This is intended as a blueprint for the reference GPUs returned object.
// There will be a seperate table for manufacturer cards.
/**
 * length is given in mm
 * vram is given in GB
 * frequency is given in MHz
 * benchmarks are given in fps
 */
router.get("/components/gpus/reference", (req, res) => {
  res.send([
    {
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

// This is a blueprint for the manufactured GPUs returned object.
router.get("/components/gpus/manufacturer", (req, res) => {
  res.send([
    {
      name: "GAMING X 8G",
      designer: "Nvidia",
      type: "GTX 1070",
      manufacturer: "MSI",
      length: 279,
      mem_type: "GDDR5",
      cuda_cores: 1920,
      vram: 6,
      tdp: 150,
      fans: 2,
      frequency: { base: 1607, boost: 1797 },
      ports: { hdmi: 1, display: 3, vga: 0, dvi: 1 },
      benchmarks: { fortnite: [78, 67, 87], csgo: [250, 267, 256] }
    }
  ]);
});

module.exports = router;
