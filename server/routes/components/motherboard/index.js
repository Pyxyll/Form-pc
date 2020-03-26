const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    express_says: "This is the motherboard section of the api."
  });
});

module.exports = router;
