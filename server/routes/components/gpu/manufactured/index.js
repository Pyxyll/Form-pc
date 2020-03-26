const express = require("express");
const router = express.Router();

// This is a blueprint for the manufactured GPUs returned object.
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "GAMING X 8G",
      designer: "Nvidia",
      manufacturer: "MSI",
      type: "GTX 1070",
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
