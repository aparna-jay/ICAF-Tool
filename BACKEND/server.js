//declare constant variables
const express = require("express"); //using the json file dependencies(node_modules)
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
//declare a constant variable
const app = express();
//require  for read variables(MONGODB_URL)
require("dotenv").config();


//define the port
const PORT = process.env.PORT || 8030;

app.use(cors());
app.use(bodyParser.json());

//database link
const URL = process.env.MONGODB_URL;

//create mongo configurations
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//connection
const connection = mongoose.connection;
//open this event("open") once (arrow function)
connection.once("open", () =>{
    console.log("Mongodb Connection Success!!") //console msg

}) 

//create a access for rotes Editor.js file
const editorRouter = require("./routes/Table_Editor.js");

//use students.js
//http://localhost:8030/editor (Editor.js file loaded.)
app.use("/editor", editorRouter);

//run the app using port
app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);
    
})