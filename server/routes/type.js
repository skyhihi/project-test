const express = require("express");
const router = express.Router();
const connectDB = require("../config/conDB")

const {
    type
} = require("../controllers/type");

router.post("/type", type);

module.exports = router;