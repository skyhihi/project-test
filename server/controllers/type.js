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

