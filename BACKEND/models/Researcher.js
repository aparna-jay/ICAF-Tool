//IT19134772
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researcherSchema = new Schema({
    Name : {
        type : String,
        // required: true
    },
    Email: {
        type: String,
        // required: true
    },
    Phone : {
        type : String,
        // required: true
    },
    Password : {
        type : String,
        // required: true
    },
    avatar: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
    Status : {
        type : String,
    },
})

//table and path
const Researcher = mongoose.model("Researcher",researcherSchema);


module.exports = Researcher;