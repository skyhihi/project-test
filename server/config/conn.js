const mariadb = require("mariadb");
const dotenv = require("dotenv");
const fs = require("fs");
const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];
dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { ca: serverCert },
  database: process.env.DB_DATABASE,
  multipleStatements: true,
  //connectionLimit: 5,
  useSSL: "true",
});
async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT PersonID FROM demo.Persons");
    console.log(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}
