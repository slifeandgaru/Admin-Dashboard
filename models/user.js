const mongoose = require('../config/connectDB')

let userSchema = mongoose.Schema({
    username: String,
    age: String
},{
    collection: 'users'
})

// tạo model
const user = mongoose.model("users", userSchema);

// export 
module.exports = user;

