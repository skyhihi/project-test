const mariadb = require("mariadb/callback");
const dotenv = require("dotenv");
const fs = require("fs");
//const serverCert = [fs.readFileSync(process.env.SKYSQL_CA_PEM, "utf8")];
dotenv.config();

const pool = mariadb.createConnection({
  host: process.env.DB_HOST,
  port: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { ca: process.env.SKYSQL_CA_PEM },
  database: process.env.DB_DATABASE,
});

const connectDB = async () => {
  try {
    let conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM Persons");
    console.log(rows);
    //console.log("Connect DB Success");
  } catch (err) {
    console.log(err);
    process.exit(1); //ออกจาก error
  }
};

module.exports = connectDB;
