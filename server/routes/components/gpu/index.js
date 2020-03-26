const router = require("express").Router();

// Import routes here
const gpuManufactured = require("./manufactured");
const gpuReference = require("./reference");

router
  .get("/", (req, res) => {
    console.log("API hit");
    res.send({
      express_says:
        "This is the gpu section of the api. Please enter a gpu route for more information.",
      routes_include: "manufactured, reference"
    });
  })
  .use("/manufactured", gpuManufactured)
  .use("/reference", gpuReference);

module.exports = router;
