const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const index = express();
const cors = require('cors');

// Enable bodyParser, so that we can parse json from incoming requests
index.use(bodyParser.json());
// Enable CORS
index.use(cors());
// Load routes
index.use("/api", require("./routes/v1/steam_request_routes"));

index.get("*", (req, res) => {
    res.status(200).json({"response" : "Welcome to the WSIP api!"})
});

// Set the port
index.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port " + (process.env.PORT || 3000));
});

module.exports = index;