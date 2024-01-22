//import express and cors
const express=require('express')
const cors=require('cors')

const logic=require('./services/logics')

//create a backend application using express
const contactServer=express()

//using cors to connect frontend port
contactServer.use(cors({
    origin:'http://localhost:3000'
}))

//create a middleware for parsing json data
contactServer.use(express.json())

//Define a port number
contactServer.listen(8000,()=>{
    console.log('contactServer  listening  on port 8000'
    );
})

//API call for get all person details

contactServer.get('/get-all-contacts',(req,res)=>{
    logic.getAllContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


//API call for add a contact

contactServer.post('/add-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.name,req.body.address,req.body.email,req.body.username,req.body.password,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
  
    })
})


//Api call for delete

contactServer.delete('/delete-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
 
    })
})


//Api call for view

contactServer.get('/view-contact/:id',(req,res)=>{
    logic.getAcontact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


//Api call for edit

contactServer.post('/edit-contact/:id',(req,res)=>{
    logic.editContact(req.params.id,req.body.name,req.body.address,req.body.email,req.body.username,req.body.password,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})




