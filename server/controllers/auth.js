const connectDB = require("../config/conDB");
var bcrypt = require("bcrypt");

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
          name,
          username,
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

//POST login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({
      error: "Invalid username or password",
    });
  }
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
