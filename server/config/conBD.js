const fs = require("fs");
const mariadb = require("mariadb");
require("dotenv").config();

const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];

async function main() {
  let conn;

  try {
    conn = await mariadb.createConnection({
      host: "test-maria-db00007419.mdb0002418.db.skysql.net",
      port: 5015,
      user: "DB00007419",
      password: "hv4^zjfWyC1Bb56T:125PKOwbK",
      ssl: { ca: serverCert },
      database: "demo",
    });

    await print_contacts(conn);
  } catch (err) {
    // Manage Errors
    console.log(err);
  } finally {
    // Close Connection
    if (conn) conn.close();
  }
}

// Print list of contacts
function print_contacts(conn) {
  return new Promise((resolve, reject) => {
    resolve(
      conn
        .queryStream("SELECT * FROM Persons")
        .on("error", (err) => {
          //console.error("Issue retrieving contact information", err);
        })
        .on("fields", (meta) => {
          //console.error("Field Metadata:", meta);
        })
        .on("data", (row) => {
          console.log(`${row.FirstName} ${row.LastName}`);
        })
    );
  });
}

main();
