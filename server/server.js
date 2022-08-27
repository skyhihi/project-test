const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
//const dotenv = require('dotenv')
require("dotenv").config(); //.env เก็บ pathหรือตัวแปรต่างๆ
const { readdirSync } = require("fs");
//import การ connect database
const connectDB = require("./config/conDB");

const app = express();

//connectDB
connectDB();
