const express = require("express");
const router = express.Router();
const connectDB = require("../config/conDB");
//import controllers
const {
  listUsers,
  updateUsers,
  readUser,
  changeRole,
  deleteUsers,
} = require("../controllers/users");

const { registerUsers } = require("../controllers/auth");

router.get("/users", listUsers);
router.post("/read-user", readUser);
router.delete("/delete-user", deleteUsers);

router.post("/register", registerUsers);

router.put("/change-role", changeRole);


/*
router.get("/users", async function (req, res) {
  try {
    const sqlQuery = "SELECT * FROM user";
    const rows = await connectDB.query(sqlQuery);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/* ====================================== */

/*
router.post("/register", async function (req, res) {
  const { name, username, password } = req.body;

  if (!username || !password || !name) {
    return res.status(400).json({
      error: "Missing username or name or password",
    });
  }

  try {
    const username_rep = await connectDB.query(
      `SELECT username FROM user WHERE username = ?`,
      [username]
    );
    if (username_rep.length > 0) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }
    await connectDB.query(`INSERT INTO user VALUES(?,?,?,?,?)`, [
      null,
      name,
      username,
      password,
      "m",
    ]);
    return res.status(200).json({
      status: "success",
      message: "create success",
    });

    /*
    const sqlQuery = "SELECT * FROM user";
    const rows = await connectDB.query(sqlQuery);
    res.status(200).json(rows);*/
/*    
  } catch (err) {
    res.status(500).send(err.message);
  }
}); 
*/

module.exports = router;
