const User = require("../models/user");
// const multer  = require('multer');
const path = require('path');
const fs = require('fs');


exports.createNewUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({ newUser });
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ message: 'this user is used' });
        res.status(500).json({ message: 'server error', error });
    }
}