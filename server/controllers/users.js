const connectDB = require("../config/conDB");
var bcrypt = require("bcrypt");

//Get
exports.listUsers = async (req, res) => {
  try {
    const user = await connectDB.query("SELECT * FROM user");
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
      `SELECT * FROM user WHERE username = ?`,
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

//Post
exports.registerUsers = async (req, res) => {
  const { name, username, password } = req.body;

  if (!username || !password || !name) {
    return res.status(400).json({
      error: "Missing username or name or password",
    });
  }

  try {
    const username_have = await connectDB.query(
      `SELECT username FROM user WHERE username = ?`,
      [username]
    );
    if (username_have.length > 0) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }

    bcrypt
      .hash(password, parseInt(process.env.SALT_ROUNDS))
      .then(async function (hashedPassword) {
        await connectDB.query(`INSERT INTO user VALUES(?,?,?,?,?)`, [
          null,
          username,
          name,
          hashedPassword,
          "m",
        ]);
      });

    res.status(200).json({
      status: "success",
      message: "create success",
    });
  } catch (err) {
    //ดักจับ error
    console.log(err); //log บอกว่ามี error อะไร
    res.status(500).send("Server Error!"); //ส่งไปหน้าบ้าน
  }
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
  try {
    //=====code=====
    //=====code=====
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

//================================================//
