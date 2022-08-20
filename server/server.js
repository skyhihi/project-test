const express = require("express");
const app = express();
const port = 5015;
const path = require("path");
const bodyParser = require("body-parser");

const locationRoutes = require("./routes/locationRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/locations", locationRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/show"));
});
