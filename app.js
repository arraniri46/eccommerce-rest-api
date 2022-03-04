const { urlencoded } = require('express')
const express = require('express')
require("dotenv").config()
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server Berjalan di ${port}`)
})