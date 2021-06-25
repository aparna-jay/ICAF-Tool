//assign it to variable & import mongoose variable
const mongoose = require('mongoose');

//create a schema (database document template)
const Schema = mongoose.Schema;

//create an object
const ConferenceSchema = new Schema({
    //create attributes
    Title : {
        type : String,
        required : true //backend validation
    },
    Start_date : {
        type : Date,
        required : true
    },
    End_Date : {
        type : Date,
        required : true
    },
    Organization : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Phone : {
        type : Number,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Status : {
        type : String,
        required: true
    },
})

//create a table to pass the schema
//using document name(table), schema
const Conference = mongoose.model("Table_Conference", ConferenceSchema);

//export the module (for routing)
module.exports = Conference;