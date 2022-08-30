const connectDB = require("../config/conDB");

//Get
exports.listUsers = async (req, res) => {
  const user = await connectDB.query("SELECT * FROM user");
  return res.status(200).json(user);
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
    const username_rep = await connectDB.query(
      `SELECT username FROM user WHERE username = ?`,
      [username]
    );
    if (username_rep.length > 0) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }
    const user = await connectDB.query(`INSERT INTO user VALUES(?,?,?,?,?)`, [
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
    res.status(200).json(rows);
    */
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
  } catch (err) {}
};

//================================================//

//Delete
exports.deleteUsers = async (req, res) => {
  try {
  } catch (err) {}
};

//================================================//
