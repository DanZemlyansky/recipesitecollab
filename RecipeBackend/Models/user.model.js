const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        username: {type: String, required:true},
        firstName:{type: String},
        lastName:{type: String},
        email:{type: String, required:true},
        password:{type: String, required:true},
            role:{
            type: String,
            enum:["user","chef","admin"],
            default:"user"},
            imageUrl: {type:String},
        publicId:{type:String}
    }
)

const User = mongoose.model("Users", userSchema);

module.exports = { User }
