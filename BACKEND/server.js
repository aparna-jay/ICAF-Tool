const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();


const port = process.env.port || 8090;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex :true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
} );

const connectio = mongoose.connection;
connectio.once("open",()=>{
    console.log("mongoDB connection successful !!!");
})

const ReviewerRouter = require("./routes/Reviewers.js");
app.use("/Reviewer",ReviewerRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})