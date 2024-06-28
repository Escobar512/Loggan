const express = require("express");
const router = express.Router();



const {createTopic} = require("../controllers/c_Topic");
const e = require("express");



router.post("/", createTopic);




 

module.exports = router