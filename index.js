let express = require('express');

let index = express();

index.get("/api", (req, res) => {
    res.status(200).json({"Response" : "API works!"})
});