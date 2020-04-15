const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/", (req, res) => {
    res.send("Steam routes work!")
});

// Request game list from Steam based on steamID
router.get("/:steamID", (req, res) => {
    let api_key = process.env.STEAM_API_KEY;
    let steamID = req.params.steamID;
    // Query the steam api for a list of all the user's owned games
    axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + api_key + '&steamid=' + steamID + '&include_appinfo=true&format=json')
        .then((games) => {
            res.status(200).json({listOfGames: games.data.response.games});
        })
        .catch((error) => {
            res.status(404).json(error);
        })
});

module.exports = router;