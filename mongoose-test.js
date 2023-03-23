const mongoose = require('mongoose')


const uri = "mongodb+srv://fbsroot:fbs%40123@cluster0.dtzgtou.mongodb.net/UsersDB"

mongoose.connect(uri)
.then(()=>{
    console.log("Connection established successfully")
})