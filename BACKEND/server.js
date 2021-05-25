const express = require("express"); //using the json file dependencies(node_modules)
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();



//declare a constant variable
const app = express();
//require  for read variables(MONGODB_URL)
require("dotenv").config();



app.use(cors());
app.use(bodyParser.json());

//database link
const URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 8070;
//create mongo configurations

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const connectio = mongoose.connection;
connectio.once("open",()=>{
    console.log("mongoDB connection successful !!!");
})

//User
const userRouter = require("./routes/users.js");
app.use("/user",userRouter);

//Payment
const paymentRouter = require("./routes/payments.js");
app.use("/payment",paymentRouter);



const ReviewerRouter = require("./routes/Reviewers.js");
app.use("/Reviewer",ReviewerRouter);



//create a access for rotes Editor.js file
const editorRouter = require("./routes/Table_Editor.js");

//create a access for rotes Conference.js file
const ConferenceRouter = require("./routes/Table_Conference.js");

//create a access for rotes KeyNoteSpeakers.js file
const KeyNoteSpeakersRouter = require("./routes/Table_KeyNoteSpeakers.js");


//use Table_Editor.js
//http://localhost:8030/editor (Editor.js file loaded.)
app.use("/editor", editorRouter);

//use Table_Confeence.js
//http://localhost:8030/conference (Editor.js file loaded.)
app.use("/conference", ConferenceRouter);

//use Table_Confeence.js
//http://localhost:8030/KeyNoteSpeakers (Editor.js file loaded.)
app.use("/KeyNoteSpeakers", KeyNoteSpeakersRouter);



//run the app using port
app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);
    

})