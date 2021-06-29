const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Reviewerschema = new schema({
    Name :{
        type : String
    },
    Designation : {
        type : String,
        required : true
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
const Reviewer = mongoose.model("reviewers",Reviewerschema);


//must export this file.
module.exports = Reviewer;
