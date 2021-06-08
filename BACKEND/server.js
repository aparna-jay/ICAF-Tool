const express = require("express"); //using the json file dependencies(node_modules)
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

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

// // Route
// const userrRouter = require("./routes/user.js");
// app.use("/user",userrRouter);

//Researcher
const researcherRouter = require("./routes/researchers.js");
app.use("/researcher",researcherRouter);

//Workshop
// const workshopRouter = require("./routes/workshops.js");
// app.use("/workshop",workshopRouter);

//Attendee
const attendeeRouter = require("./routes/attendees.js");
app.use("/attendee",attendeeRouter);

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
//http://localhost:8070/editor (Editor.js file loaded.)
app.use("/editor", editorRouter);

//use Table_Conference.js
//http://localhost:8070/conference (conference.js file loaded.)
app.use("/conference", ConferenceRouter);

//use Table_Conference.js
//http://localhost:8070/KeyNoteSpeakers (Editor.js file loaded.)
app.use("/KeyNoteSpeakers", KeyNoteSpeakersRouter);

//Admin
const adminRouter = require("./routes/admins.js");
app.use("/admin",adminRouter);

//run the app using port
app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);

})
