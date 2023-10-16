
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://thstoremedicines:Truong0989@cluster0.2643pl2.mongodb.net/THStore?retryWrites=true&w=majority&appName=AtlasApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((e) => console.log("Connect successful"))
.catch((e) => console.log("Connect fail"))

module.exports = mongoose