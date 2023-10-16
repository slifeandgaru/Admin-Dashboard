require('dotenv').config();
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const path = require('path')

//local imports
const user = require('./routers/userRoute')
const animalFeed = require('./routers/animalFeedRoute')
const auth = require('./routers/authRoute')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', user)  
app.use('/animalFeed', animalFeed)
app.use('/auth', auth )


//read file
// app.use('/assets', express.static(path.join(__dirname, "/assets")))

app.use(express.static( __dirname + "/public"))

//html
// đi đến trang chủ với đường dẫn như bên
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./public/html/auth-login-basic.html'))
})

app.get('/dashboard', (req,res) => {
    res.sendFile(path.join(__dirname,'./public/html/index.html'))
})

app.get('/animal-feed', (req,res) => { 
    res.sendFile(path.join(__dirname,'./public/html/animal-feed-list.html'))
})

app.get('/account-setting', (req,res) => {
    res.sendFile(path.join(__dirname,'./public/html/pages-account-settings-account.html'))
})

// Chạy (npm start) với localhost:3003
app.listen(process.env.PORT || 3003)