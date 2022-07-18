const mongoose = require('mongoose')
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
})

module.exports = mongoose.model("User",schema)