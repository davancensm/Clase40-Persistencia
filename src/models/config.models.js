const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { logConsole, logError } = require("../services/users.services.js")

dotenv.config()

const URL = process.env.URL

const mongoConfig = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    try {
        if (err) throw new Error("Unable to Connect")
        logConsole.info("Connect to DB")
    } catch (error) {
        logError.error(error)
        logConsole.error(error)
    }
})

module.exports = mongoConfig