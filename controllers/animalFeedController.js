const animalFeed = require("../models/animalFeed");
// const multer  = require('multer');
const path = require('path');
const fs = require('fs');


exports.createNewAnimalFeed = async (req, res) => {
    try {
        let productname = req.body.productname
        console.log(productname)
        // const feed = await animalFeed.create({feedName});
        // res.status(200).json({ feed });
        animalFeed.create({ productname })
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

    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ message: 'this brand is used' });
        res.status(500).json({ message: 'server error', error });
    }
}

exports.getAllNewAnimalFeed = async (req, res) => {
    try {
        const feed = await animalFeed.find();
        res.status(200).json({ feed });
    } catch (error) {
        res.status(500).json({ message: 'server error', error }); 
    }

}