const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

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

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!");
});

const ReviewerRouter = require("./routes/Reviewers.js");
app.use("/Reviewer",ReviewerRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})