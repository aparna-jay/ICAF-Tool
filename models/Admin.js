const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Adminschema = new schema({
    Name :{
        type : String,
        required: true
    },
    Email : {
        type : String,
        required : true
    },
    Phone : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})

// table and path
const Admin = mongoose.model("admins",Adminschema);


//must export this file.
module.exports = Admin;
