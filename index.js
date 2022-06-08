require('dotenv').config();
const express = require("express")
const createCommands = require('./db/dbCommands/createCommands')
const authRoutes = require('./routes/authRoutes')
const newsRoutes = require('./routes/newsRoutes')
const userRoutes = require('./routes/userRoutes')
const authMiddleware = require('./middlewares/authMiddleware')
const app = express();

app.use(express.json())



app.use(authRoutes)
app.use('/news',
    authMiddleware.protectRoute, newsRoutes)

app.use('/user', authMiddleware.protectRoute, userRoutes)


app.listen('3000', async () => {
    createCommands.createUserTableIfDoesntExist();
    createCommands.createNewsTableIfDoesntExist()
    console.log("server started")
})