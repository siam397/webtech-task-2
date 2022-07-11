require('dotenv').config();
const express = require("express")
const createCommands = require('./db/dbCommands/createCommands')
const authRoutes = require('./routes/authRoutes')
const newsRoutes = require('./routes/newsRoutes')
const userRoutes = require('./routes/userRoutes')
const authMiddleware = require('./middlewares/authMiddleware')
const app = express();

app.use(express.json())

app.get("/sample-docker", (req, res) => {

    res.send({
        name: "Maliketh",
        title:"Black Blade"
    })
})


app.use(authRoutes)
app.use('/news',
    authMiddleware.protectRoute, newsRoutes)

app.use('/user', authMiddleware.protectRoute, userRoutes)


app.listen('3000', async () => {
    await createCommands.createUserTableIfDoesntExist();
    await createCommands.createNewsTableIfDoesntExist()
    console.log("server started")
})

