const express = require("express")
const sql = require('./db/databaseConfig')
const app = express();
app.use(express.json())

//routes
const authRoutes = require('./routes/authRoutes')


console.log(sql());

app.use(authRoutes)

app.get("/", (req, res) => {
    res.send({
        info: "works"
    })
})

app.listen('3000', () => {
    console.log("server started")
})