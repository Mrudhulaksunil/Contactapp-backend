//Node + MongoDB connection

//import mongoose

const mongoose=require('mongoose')

//connection string

mongoose.connect('mongodb://localhost:27017/CONTACT-APP-WEBSITE')

//create a model

const person=mongoose.model('persons',{         //persons-collection name
    id:String,
    name:String,
    address:String,
    email:String,
    username:String,
    password:String,
    phone:String
})


//export model

module.exports={
    person
}