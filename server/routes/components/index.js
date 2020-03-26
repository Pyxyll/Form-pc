const router = require("express").Router();

// Import routes here
const gpuRoutes = require("./gpu");
const cpuRoutes = require("./cpu");
const motherboardRoutes = require("./motherboard");

// Refactor ALL (exept the export) below this into seperate routes.
router
  .get("/", (req, res) => {
    res.send([
      { API_says: "This is the components section." },
      { Components: ["gpus", "cpus", "cases", "mobos", "etc"] }
    ]);
  })
  .use("/gpu", gpuRoutes)
  .use("/cpu", cpuRoutes)
  .use("/motherboard", motherboardRoutes);

module.exports = router;
