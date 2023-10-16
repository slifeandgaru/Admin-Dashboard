const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const mongoose = require('../config/connectDB')

const accountSchema = mongoose.Schema({
    account: String,
    password: String,
    role: String
},{
    collection: 'accounts'
})

accountSchema.methods.verifyPassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
}

accountSchema.methods.verifyRole = async function (role) {
    return await role === this.role;
}

accountSchema.methods.createToken = function () {
    const payload = {
        account: this.account,
        role: this.role
    }
    
    const token = jwt.sign(payload, process.env.JWT, {expiresIn: process.env.JWT_EXPIRE_IN});
    console.log(token)
    // this.save();

    return token
}

// tạo model
const account = mongoose.model("accounts", accountSchema);

// export 
module.exports = account;

