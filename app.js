const express = require("express")
const session = require("express-session")
const dotenv = require("dotenv")
const passport = require("passport")
const { logConsole } = require("./src/services/users.services.js")
const { router } = require("./src/router/users.routes.js")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    logConsole.info(`Listening on port ${PORT}`)
})
app.set("views", __dirname + "/src/views")
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/", router)