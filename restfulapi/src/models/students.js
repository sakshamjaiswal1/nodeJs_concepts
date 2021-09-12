const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email id already present'],
        // validate(value){
        //     if(!validator.isEmail()){
        //           throw new Error('Invalid Email')  
        //     }
        // }
    },
    phone:{
        type:Number,
        min:10,
        
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }

})

// creating new collection using models

const Students = new mongoose.model("Student",studentSchema);

module.exports=Students