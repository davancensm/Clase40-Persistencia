const passport = require("passport")
const express = require("express")
const router = express.Router()
const { isAuth } = require("../services/users.services.js")
const { getHome, getInvalidPassword, getLogin, getLogout, getProfile, getSignup, getUserExist, getWrong, postLogin, postSignup } = require("../controllers/users.controller.js")

router.get('/', getHome)

router.get('/signup', getSignup)

router.get('/login', getLogin)

router.get('/profile', isAuth, getProfile)

router.get('/logout', isAuth, getLogout)

router.get('/userExist', getUserExist)

router.get('/invalidPassword', getInvalidPassword)

router.get('*', getWrong)

router.post("/signupForm", passport.authenticate('signup', {
    failureRedirect: '/invalidPass',
}), postSignup)
router.post("/loginForm", passport.authenticate("login", {
    failureRedirect: "/userExists",
}), postLogin)

module.exports = { router }