const express = require("express");
const router = express.Router();
const connectDB = require("../config/conDB");

const { details_type, createDetail_type } = require("../controllers/details_type");

router.post("/details_type", details_type);

router.post("/createDetails-type", createDetail_type);

module.exports = router;
