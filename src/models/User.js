const mongoose = require("mongoose")

const userCollection = "users"
const userShema = new mongoose.Schema({
    name: { type: String },
    mail: { type: String },
    phone: { type: Number },
    age: { type: Number },
    profile_picture: { type: String },
    cart: { type: Object },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})
const User = mongoose.model(userCollection, userShema)

module.exports = User