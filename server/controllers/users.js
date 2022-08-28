//Get

const conn = require("../config/conDB");

exports.listUsers = async (req, res) => {
  try {
    //code
    const user = await conn.query("SELECT * FROM user");
    res.send(user);
  } catch (err) {
    //ดักจับ error
    console.log(err); //log บอกว่ามี error อะไร
    res.status(500).send("Server Error!"); //ส่งไปหน้าบ้าน
  }
};
