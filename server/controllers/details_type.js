const connectDB = require("../config/conDB");

exports.details_type = async (req, res) => {
  try {
    const details_type = await connectDB.query("SELECT * FROM details_type;");
    res.status(200).json(details_type);
  } catch (err) {
    res.status(500).json({
      error: error.message,
      msg: "Sever Error",
    });
  }
};

exports.editDetail_type = async (req, res) => {
  try {
  } catch {}
};

exports.createDetail_type = async (req, res) => {
  const { title,details } = req.body;
  if(!title || !details){
    return res.status(400).json({
      error: "You need to add title or details",
    });
  }
  try {
    await connectDB.query(
      `INSERT INTO title VALUES ? FROM details_type` , [title,details]
    );
    res.status(200).json({
      status: "create success",
      msg: username + "create success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.deleteDetail_type = async (req, res) => {
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
