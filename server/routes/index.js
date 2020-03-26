const router = require("express").Router();

// Import routes here
const componentRoutes = require("./components");

// Add more routes onto the end of this chain (use .use())
router
  .get("/", (req, res) => {
    console.log("API hit");
    res.send({
      express_says:
        "This is the api. Please enter a route for more information."
    });
  })
  .use("/components", componentRoutes);

module.exports = router;
