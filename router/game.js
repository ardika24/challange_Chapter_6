const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/games/game", {
    cssFile: "game.css",
    pageTitle: "FSW - Game",
  });
});

module.exports = router;
