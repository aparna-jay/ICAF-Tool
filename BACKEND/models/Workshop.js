//IT19134772
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    Name : {
        type : String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone : {
        type : String,
        required: true
    },
    Password : {
        type : String,
        required: true
    },
    Status : {
        type : String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
})

//table and path
const Workshop = mongoose.model("Workshop",workshopSchema);


module.exports = Workshop;
