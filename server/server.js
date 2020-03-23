require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");

const server = express();
const showRoutes = require("./routes/index.js");

const PORT = process.env.PORT;

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

server.listen(PORT, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});

// .catch(ex => {
//   console.error(ex.stack);
//   process.exit(1);
// });
