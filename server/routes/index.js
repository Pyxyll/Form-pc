const express = require("express");
const router = express.Router();

router.get("/components", (req, res) => {
    console.log("API hit")
    res.send({express_says: "Hello"});
});

module.exports = router;