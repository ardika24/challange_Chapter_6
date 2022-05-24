const express = require("express");
const router = express.Router();

const gameRoutes = require("./game");
const userRoutes = require("./user");
const bioRoutes = require("./bio");

router.use("/bios", bioRoutes);
router.use("/users", userRoutes);
router.use("/game", gameRoutes);
router.get("/", (req, res) => {
  res.render("pages/home/index", {
    cssFile: "styles.css",
    pageTitle: "FSW20 - Home",
  });
});

module.exports = router;
