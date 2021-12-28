const mongoose = require("mongoose");
 const validation = require("validation");
const studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // minlength: 5
    },

    email: {
        type: String,
        required: true,
        unique: [true, "email is alredy "]
    },
    phoneno: {
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type:String,
        required:true
    }

})
// we will create a new Collection
const student=new mongoose.model('Student',studentschema)
module.exports= student;