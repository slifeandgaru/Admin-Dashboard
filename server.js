const express = require('express')
const app = express()
// const router = require('./router/index')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//read file
app.use('/assets', express.static(path.join(__dirname, "/assets")))

//html
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./html/index.html'))
})

// Chạy (npm start) với localhost:3003
app.listen(process.env.PORT || 3003)