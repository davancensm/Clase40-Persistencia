const { logConsole, logWarn } = require("../services/users.services.js")

const getHome = async(req, res) => {
    res.render("index.ejs")
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getLogin = async(req, res) => {
    if (req.isAuthenticated()) return res.redirect('/profile')
    res.render('login.ejs')
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getSignup = async(req, res) => {
    if (req.isAuthenticated()) return res.redirect('/profile')
    res.render('signup.ejs')
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getProfile = async(req, res) => {
    res.render("profile.ejs", { user: req.session.passport.user.username })
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}

const getLogout = async(req, res) => {
    if (req.isAuthenticated()) {
        req.logOut()
        res.render('logout.ejs')
    } else {
        res.redirect('/')
    }
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getUserExist = async(req, res) => {
    res.render("userExists.ejs")
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getInvalidPassword = async(req, res) => {
    res.render("invalidPass.ejs")
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}

const postSignup = async(req, res) => {
    res.redirect("/profile")
    req.session.isAuth = true
    req.session.user = req.body
    res.render("profile.ejs", {
        user: req.body.username
    })
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const postLogin = async(req, res) => {
    res.redirect('/profile')
    req.session.isAuth = true
    req.session.user = req.body
    res.render("profile.ejs", {
        user: req.body.username
    })
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getWrong = async(req, res) => {
    logConsole.warn(`${req.method} to ${req.get('host')}${req.originalUrl}`)
    logWarn.warn(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}

module.exports = { getHome, getInvalidPassword, getLogin, getLogout, getProfile, getSignup, getUserExist, getWrong, postLogin, postSignup }