const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("API hit");
  res.send({ express_says: "This is the api. Please enter your query." });
});

module.exports = router;
