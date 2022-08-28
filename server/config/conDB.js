const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  port: process.env.PORTMR,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "POTOCOL_CONNECTION_LOST") {
      console.error("Database connection lost");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connection");
    }
    if (err.code === "ECONNREFUED") {
      console.error("Database connection was refused");
    }
  }
  if (connection) {
    connection.release();
  }
});

/*
const connectDB = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    //let rows = await conn.query("SELECT Name FROM persons");
    //console.log(rows);
    console.log("connect to DB");
  } catch (err) {
    console.log("can not connect to DB");
    process.exit(1);
  } finally {
    if (conn) return conn.end();
  }
};
*/

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
module.exports = pool;
