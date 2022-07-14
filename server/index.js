require('dotenv').config();
const express = require("express")
const createCommands = require('./db/dbCommands/createCommands')
const authRoutes = require('./routes/authRoutes')
const newsRoutes = require('./routes/blogsRoutes')
const userRoutes = require('./routes/userRoutes')
const authMiddleware = require('./middlewares/authMiddleware')
const cors= require('cors')
const app = express();

app.use(express.json())
app.use(cors())

app.use(authRoutes)
app.use('/news',
    authMiddleware.protectRoute, newsRoutes)

app.use('/user', authMiddleware.protectRoute, userRoutes)


app.listen('8080', async () => {
    await createCommands.createUserTableIfDoesntExist();
    await createCommands.createBlogsTableIfDoesntExist()
    console.log("server started")
})

