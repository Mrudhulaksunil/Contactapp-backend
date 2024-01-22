//import db.js
const db=require('../services/db')

//logic for get all persons from the db
const getAllContacts=()=>{
    return db.person.find().then(

        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    persons:result//array
                }
            }else{
                return{
                    statusCode:404,
                    message:'Contacts not found'
                }
            }
        }
    )
}




//logic for add a contact

const addContact=(id,name,address,email,username,password,phone)=>{
    return db.person.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Contact already exists"
            }
        }else{
            const newContact=new db.person({id,name,address,email,username,password,phone})
            newContact.save()
            return{
                statusCode:200,
                message:"Contact added successfully..."
            }
        }
    })
}

//delete

const deleteContact=(id)=>{
    return db.person.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Contact deleted successfully"
            }
        }else{
            return{
                statusCode:404,
                message:"Can't find contact"
            }
        }
    })
}

//view

const getAcontact=(id)=>{
    return db.person.findOne({id}).then(

        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    persons:result//object(since detail of a single person)
                }
            }else{
                return{
                    statusCode:404,
                    message:'Contact not found'
                }
            }
        }
    )
}

//edit logic

const editContact=(id,name,address,email,username,password,phone)=>{//edited details
    return db.person.findOne({id}).then(

        (result)=>{
            if(result){

                //assign updated details to mongodb
                result.id=id;
                result.name=name;
                result.address=address;
                result.email=email;
                result.username=username;
                result.password=password;
                result.phone=phone

                //save to mongo db
                result.save()
                return{
                    statusCode:200,
                    message:'Contact details edited successfully'//object(since detail of a single person)
                }
            }else{
                return{
                    statusCode:404,
                    message:'Contact not found'
                }
            }
        }
    )

}


module.exports={
    getAllContacts,
    addContact,
    deleteContact,
    getAcontact,
    editContact
    
}