const Account = require("../models/account");

const { checkAccountAndPassword } = require("../services/authService");

// const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.createNewAccount = async (req, res) => {
    let account = req.body.account
    let password = req.body.password
    let role = req.body.role
    try {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                Account.create({ account, password: hash, role })
                    .then((data) => {
                        res.json({
                            error: false,
                            message: "create successful",
                            data: data
                        })
                    }).catch((err) => {
                        res.json({
                            error: true,
                            message: "create fail " + err
                        })
                    })
            })
        })
        // const newAccount = await Account.create(req.body);
        // res.status(200).json({ newAccount });
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ message: 'this user is used' });
        res.status(500).json({ message: 'server error', error });
    }
}

exports.getAllAccount = async (req, res) => {
    try {
        const account = await Account.find();
        res.status(200).json({ account });
    } catch (error) {
        res.status(500).json({ message: 'server error', error });
    }

}

exports.loginUser = async (req, res) => {
    try {
        console.log(18, req.body);
        const account = await checkAccountAndPassword(req, res);
        console.log(58, account);
        if(account.error) return res.status(400).json({message: account.error});

        const payload = {
            account: account.account,
            role: account.role
        }

        const token = jwt.sign({ payload }, process.env.JWT, { expiresIn: process.env.JWT_EXPIRE_IN });

        console.log(token)

        res.status(200).json({message: 'login success', token});
    } catch (error) {
        res.status(500).json({message: 'abc server error', error});
    }
}