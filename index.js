require('dotenv').config();
const express = require("express")
const createCommands = require('./db/dbCommands/createCommands')
const app = express();

app.use(express.json())

//routes
const authRoutes = require('./routes/authRoutes')

app.use(authRoutes)

app.get("/", (req, res) => {
    res.send({
        info: "works"
    })
})


app.listen('3000', async () => {
    createCommands.createUserTableIfDoesntExist();
    console.log("server started")
})