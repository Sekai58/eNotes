const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ a: "notesavailable", c: "allwell" });
});

module.exports = router;
