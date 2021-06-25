//assign it to variable & import mongoose variable
const mongoose = require('mongoose');

//create a schema (database document template)
const Schema = mongoose.Schema;

//create an object
const KeyNoteSpeakersSchema = new Schema({
    //create attributes
    Name : {
        type : String,
        required : true //backend validation
    },
    Organization : {
        type : String,
        required : true
    },
    Designation : {
        type : String,
        required : true
    },
    Conference : {
        type : String,
        required : true
    },
    avatar: {
        type: String,
        required: true
    },
    Status : {
        type : String,
        required: true
    },
})

//create a table to pass the schema
//using document name(table), schema
const KeyNoteSpeakers = mongoose.model("Table_KeyNoteSpeakers", KeyNoteSpeakersSchema);

//export the module (for routing)
module.exports = KeyNoteSpeakers;