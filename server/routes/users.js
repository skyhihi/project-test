const express = require("express");
const router = express.Router();
const connectDB = require("../config/conDB");
//import controllers
const { listUsers } = require("../controllers/users");

router.get("/", (req, res) => {
  res.status(200).json({ name: "fah", doing: "codeing" });
});

router.get("/users", async function (req, res) {
  try {
    const sqlQuery = "SELECT * FROM user";
    const rows = await connectDB.query(sqlQuery);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
