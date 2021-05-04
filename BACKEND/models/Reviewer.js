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
        type : Number,
        required : true
    },
     Password : {
        type : String,
        required : true
    }
})

// table and path
const reviewer = mongoose.model("reviewers",Reviewerschema);


//must export this file.
module.exports = Reviewer;
