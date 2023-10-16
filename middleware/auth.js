const jwt = require('jsonwebtoken');

const Account = require("../models/account");

exports.checkExistAccount = async (req, res, next) => {
    try {
        let account = req.body.account
        Account.findOne({ account })
        .then((data) => {
            if (data) {
                res.json("tài khoản đã tồn tại")
            } else {
                next()
            }
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        
    }
}

exports.checkLoginAccount = async (req, res, next) => {
    try {
        let account = req.body.account
        Account.findOne({ account })
        .then((data) => {
            if (data) {
                next()         
            } else {
                res.json("tài khoản không tồn tại")
            }
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        
    }
}

exports.checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if(!token) return res.status(400).json({message: 'token not found'});

        const data = jwt.verify(token, process.env.JWT);

        req.user = data;
        next();
        
    } catch (error) {
        res.status(500).json({message: 'server error', error});
    }
}