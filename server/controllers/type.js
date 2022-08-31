const connectDB = require("../config/conDB");

exports.type = async (req, res) => {
  try {
    const type = await connectDB.query("SELECT name FROM type;");
    res.status(200).json(type);
  } catch (err) {
    res.status(500).json({
      error: error.message,
      msg: "Sever Error",
    });
  }
};
  

