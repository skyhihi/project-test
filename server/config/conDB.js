const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "demodb",
});

const connectDB = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("connect to DB");
  } catch (err) {
    console.log("can not connect to DB");
    process.exit(1);
  } finally {
    if (conn) return conn.end();
  }
};
/*
async function main() {
  let conn;
  try {
    conn = await pool.getConnection();
    let rows = await conn.query("SELECT Name FROM persons");
    console.log(rows);
    console.log("connect to DB");
  } catch (err) {
    console.log("dont connect to DB");
  } finally {
    if (conn) return conn.end();
  }
}
main();
*/
module.exports = connectDB;
