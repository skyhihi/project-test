let express = require("express"),
  router = express.Router(),
  db = require("../config/conBD");

router.get("/", async (req, res, next) => {
  try {
    const query = "SELECT PersonID FROM demo.Persons";
    const rows = await db.pool.query(query);
    res.send(rows);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
