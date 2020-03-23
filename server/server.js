const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
const showRoutes = require("./routes/index.js");

// Use CORS
server.use(cors());

// API startpoint
server.use("/api", showRoutes);

// Standard API. Use above and above file for actual routes.
// REMOVE FOR PRODUCTION
server.get("/api/parts", (req, res) => {
  console.log("api hit");
  res.send({ express_says: "Hello" });
});

server.listen(process.env.PORT, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${process.env.PORT}`);
});

// .catch(ex => {
//   console.error(ex.stack);
//   process.exit(1);
// });
