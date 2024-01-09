require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./DB/mongo')
const app = express()
const path = require('path');


app.use(cors())
app.use(express.json())

const port = 8080

app.use("", require("./endpoints/ep_index"))

app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
}
)

dbConnect()