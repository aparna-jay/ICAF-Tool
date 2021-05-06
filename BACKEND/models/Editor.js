//assigne it to variable & import mongoose variable
const mongoose = require('mongoose');

//create a schema (database document template)
const Schema = mongoose.Schema;

//create an object
const editorDetailSchema = new Schema({
    //create attributes
    Name : {
        type : String,
        required : true //backend validation
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

//create a table to pass the schema
//using document name(table), schema
const Editor = mongoose.model("Table_Editor", editorDetailSchema);

//export the module (for routing)
module.exports = Editor;