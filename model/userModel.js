const mongoose = require('../config/connectDB')

let userSchema = mongoose.Schema({
    username: String,
    password: String,
    phone:String,
    cartID: String,
    listBill: [{
        type: String,
        ref: 'bill'
    }]
},{
    collection: 'user'
})

// tạo model
const userModel = mongoose.model("user", userSchema);

// export
module.exports = userModel;

