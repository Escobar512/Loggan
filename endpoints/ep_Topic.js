const express = require("express");
const router = express.Router();



const {createTopic, getTopic} = require("../controllers/c_Topic");
const e = require("express");



router.post("/", createTopic);

router.get("/", getTopic);




 

module.exports = router