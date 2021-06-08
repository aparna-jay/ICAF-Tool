//IT19134772
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
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
    Amount : {
        type : Number,
        required: true
    },
})

//table and path
const Attendee = mongoose.model("Attendee",attendeeSchema);


module.exports = Attendee;