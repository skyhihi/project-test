const { enabled } = require("express/lib/application");
const mariadb = require("mariadb");

const connectDB = require("./config/conDB");

connectDB();

let rows = await connectDB.query("SELECT * FROM user");
console.log(rows);
