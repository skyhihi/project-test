const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "demodb",
  connectionLimit: 5,
});
pool
  .getConnection()
  .then((conn) => {
    console.log("Database connected!");
    conn.query("SELECT * FROM persons").then((rows) => {
      console.log(rows);
    });
  })
  .catch((err) => {
    console.log(err);
  });
