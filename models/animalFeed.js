const mongoose = require('../config/connectDB')

let animalFeedSchema = mongoose.Schema({
    productname: String,
    price: String,
    classifyID: String,
    description: String,
    weight: String,
    unit: String,
    amount: String,
    listPicture:[]
},{
    collection: 'animalFeed'
})

// tạo model
const animalFeed = mongoose.model("animalFeed", animalFeedSchema);

// export
module.exports = animalFeed;

