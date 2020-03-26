require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");

const server = express();
const showRoutes = require("./routes");

// Get the port number from env
const PORT = process.env.SERVER_PORT;

// Use CORS
server.use(cors());

// API startpoint
server.use("/api/v1", showRoutes);

// Start the Express server
server.listen(PORT, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});

// .catch(ex => {
//   console.error(ex.stack);
//   process.exit(1);
// });
