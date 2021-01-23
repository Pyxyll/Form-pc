const router = require("express").Router();

// Import routes here
const gpuRoutes = require("./gpu");
const cpuRoutes = require("./cpu");
const motherboardRoutes = require("./motherboard");

router
  .get("/", async (req, res) => {
    res.send([
      { title: "This is the funny section." },
      { components: ["gpus", "cpus", "cases", "mobos", "etc"] },
    ]);
  })
  .use("/gpu", gpuRoutes)
  .use("/cpu", cpuRoutes)
  .use("/motherboard", motherboardRoutes);

module.exports = router;
