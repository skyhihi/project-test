const mariadb = require("mariadb/callback");
const dotenv = require("dotenv");
const fs = require("fs");
var serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];
dotenv.config();

function main() {
  let conn;

  try {
    conn = mariadb.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.PORT,
      password: process.env.DB_PASS,
      ssl: { ca: serverCert },
      database: process.env.DB_DATABASE,
    });

    conn.query("SELECT LastName FROM demo.Persons", (err, res, meta) => {
      if (err) {
        console.error("Error querying data: ", err);
      } else {
        console.log(res);
      }
    });
  } catch (err) {
    // Manage Errors
    console.error("Error connecting to the database and querying data: ", err);
  } finally {
    if (conn)
      conn.end((err) => {
        if (err) {
          console.log("SQL error in closing connection: ", err);
        }
      });
  }
}

main();
