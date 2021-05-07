const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name : {
        type : String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone : {
        type : Number,
        required: true
    },
    Password : {
        type : String,
        required: true
    },
    UserType : {
        type : String,
        required: true
    },
    Document : {
        type : String,
        required: true
    },

})

//table and path
const User = mongoose.model("User",userSchema);


module.exports = User;