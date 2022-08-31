const connectDB = require("../config/conDB");
var bcrypt = require("bcrypt");

//Get
exports.listUsers = async (req, res) => {
  try {
    const user = await connectDB.query(
      "SELECT name , username , role FROM user;"
    );

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      error: error.message,
      msg: "Sever Error",
    });
  }

  /*
    const sqlQuery = "SELECT * FROM user";
    const rows = await connectDB.query(sqlQuery);
    res.status(200).json(rows);
    */
};

//================================================//

//Post read-user
exports.readUser = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      error: "Missing username",
    });
  }
  try {
    const user = await connectDB.query(
      `SELECT name , username , role FROM user WHERE username = ?`,
      [username]
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      error: error.message,
      msg: "Sever Error",
    });
  }

  /*
    const sqlQuery = "SELECT * FROM user";
    const rows = await connectDB.query(sqlQuery);
    res.status(200).json(rows);
    */
};

//================================================//

//Put
exports.updateUsers = async (req, res) => {
  try {
    //=====code=====
    //=====code=====
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

//================================================//

//Put change-role
exports.changeRole = async (req, res) => {
  const { id, username, role } = req.body;
  if (!id || !username || !role) {
    return res.status(400).json({
      error: "Missing id or username or role",
    });
  }
  try {
    await connectDB.query(`UPDATE user SET role = ? WHERE id = ?`, [role, id]);
    res.status(200).json({
      status: "update success",
      msg: username + " change role",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

//================================================//

//Delete
exports.deleteUsers = async (req, res) => {
  const { username } = req.body;
  try {
    await connectDB.query(`DELETE FROM user WHERE username = ? `, [username]);
    res.status(200).json({
      status: "user has been delete",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

//================================================//
