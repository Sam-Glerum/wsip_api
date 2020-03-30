let express = require('express');

let index = express();

index.get("*", (req, res) => {
    res.status(200).json({"response" : "API works!"})
});

index.listen(3000, () => {
    console.log("Server is listening on port 3000")
});