const express = require("express");
const router = express.Router();

const f_list = require("./featuredlist.json");
const combo = require("./combos.json");
const bestseller = require("./bestseller.json");

router.get("/featured", (req, res) => {
  res.send(f_list);
});
router.get("/featured/:id", (req, res) => {
  const fl = f_list.find((item) => item.id == req.params.id);
  res.send(fl);
});
router.get("/combo", (req, res) => {
  res.send(combo);
});
router.get("/combo/:id", (req, res) => {
  const combos = combo.find((item) => item.id == req.params.id);
  res.send(combos);
});
router.get("/bestseller", (req, res) => {
  res.send(bestseller);
});
router.get("/bestseller/:id", (req, res) => {
  const bs = bestseller.find((item) => item.id == req.params.id);
  res.send(bs);
});

module.exports = router;
