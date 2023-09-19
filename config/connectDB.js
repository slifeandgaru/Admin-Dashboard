
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://thstoremedicines:Truong0989@cluster0.2643pl2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports = mongoose