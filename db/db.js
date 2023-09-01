const mongoose = require("mongoose") 
const db = mongoose.connect("mongoose://localhost/pagination")

module.exports = db ;