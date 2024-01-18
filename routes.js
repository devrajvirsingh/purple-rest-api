const express = require("express");
const router = express.Router();

const f_list = require("./featuredlist.json");
const combo = require("./combos.json");
const bestseller = require("./bestseller.json");

router.get("/featured", (req, res) => {
  res.send(f_list);
});

router.get("/combo", (req, res) => {
  res.send(combo);
});
router.get("/bestseller", (req, res) => {
  res.send(bestseller);
});

module.exports = router;
