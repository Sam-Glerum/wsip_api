const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
// const server = express();
const cors = require('cors');

const server = http.createServer(app);

// Enable bodyParser, so that we can parse json from incoming requests
app.use(bodyParser.json());
// Enable CORS
app.use(cors());
// Load routes
app.use("/api", require("./routes/v1/steam_request_routes"));

app.get("*", (req, res) => {
    res.status(200).json({"response" : "Welcome to the WSIP api!"})
});

// Set the port
server.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port " + (process.env.PORT || 3000));
});

function closeServer() {
    server.close()
};

module.exports.app = app;
module.exports.closeServer = closeServer;