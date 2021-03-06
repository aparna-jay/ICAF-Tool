//import router package using constant variable
const router = require("express").Router();
const { request } = require("express");
//use Conference.js model
let Conference = require("../models/Conference");

//Insert data
//http://localhost:8070/Conference/add
//arrow function
router.route("/add").post((req,res) => {

    //request data from frontent throught function body
    const Title = req.body.Title;
    const Start_date = req.body.Start_date; 
    const End_Date = req.body.End_Date;
    const Organization = req.body.Organization;
    const Description = req.body.Description;
    const Phone = Number(req.body.Phone);
    const Email = req.body.Email;
    const Status = req.body.Status;


    //create an object to insert
    const newConference = new Conference({
        //initialize objects
        Title,
        Start_date,
        End_Date,
        Organization,
        Description,
        Phone,
        Email,
        Status
    })

    //insert data to the database throught the model
    newConference.save().then(() => {  //js promise
        //send a response using json format to the frontend
        res.json("Conference Details Added!!")
    }).catch((err) => {
        //display error msg in console
        console.log(err);
    })
})

//Fetch data
//call backend URL
router.route("/").get((req,res)=> {
    //get data from calling Conference module
    Conference.find().then((Table_Conference)=> {

        //send a response using json format to frontend
        res.json(Table_Conference)
    }).catch((err)=>{
        console.log(err)
    })
})

//update data
router.route("/update/:id").put(async(req,res)=> {
    //fetch the id from the request parameter
    let conferenceId = req.params.id; //params = url parameter 
    
    //fetch data from request body
    //destructure
    //pass frontend objects as a object to the backend
    const {Title, Start_date, End_Date, Organization, Description, Phone, Email, Status} = req.body;

    //create a object for update
    const updateConference = {
        Title,
        Start_date,
        End_Date,
        Organization,
        Description,
        Phone,
        Email,
        Status

    }

    //pass conferenceId,updateConference
    const update = await Conference.findByIdAndUpdate(conferenceId, updateConference)
    .then(()=> {

        //await = according to findByIdAndUpdate function waits.

     //send a response using status to frontend
     //200 = success!
     res.status(200).send({status : "Conference Details Updated!"})

    }).catch((err) => {
        console.log(err);  //display error msg in console
        //send response status for frontend
        //500 = internal error!
        res.status(500).send({status: "Error with updating Conference data", error: err.message});
    })
    
})

//delete data

router.route("/delete/:id").delete(async(req,res)=> {
    let conferenceId = req.params.id;

    await Conference.findByIdAndDelete(conferenceId).then(() => {
        res.status(200).send({status: "Conference details deleted Successfully!"});
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with delete Conference function", error: err.message});

    })
})

//Fetch only one user

router.route("/get/:id").get(async(req,res)=> {
    
    //fetch conferenceId
    let conferenceId = req.params.id;

    const user = await Conference.findById(conferenceId).then((conference)=> {
        res.status(200).send({staus: "Conference Details Fetched", conference})
    }).catch((err) => {
        console.log(err);
        res.staus(500).send({msg:"Error with get Conference Details!!", error: err.message});
    })
})

//UPDATE ONE
router.route("/updateOne/:id").put(async (req, res) => {
    let conferenceId = await Conference.findById(req.params.id);
    const data = {
        Title:req.body.Title || conferenceId.Title,
        Start_date:req.body.Start_date || conferenceId.Start_date,
        End_Date:req.body.End_Date || conferenceId.End_Date,
        Organization:req.body.Organization || conferenceId.Organization,
        Description:req.body.Description || conferenceId.Description,
        Phone:req.body.Phone || conferenceId.Phone,
        Email:req.body.Email || conferenceId.Email,
        Status: req.body.Status || conferenceId.Status,
    };conferenceId = await Conference.findByIdAndUpdate(req.params.id, data, {
        new: true });res.json(conferenceId);});
//home
router.get("/sort", async (req, res) =>{

    let query;
    const reqQuery = { ...req.query};
    const removeFields = ["sort"];
    removeFields.forEach(params => delete reqQuery[params]);
    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);
    console.log(queryStr);
    try {

        const conference = await Conference.find(JSON.parse(queryStr));
        res.status(200).json({
            status: 'success',
            // results: items.length,
            data: {
                conference
            }
        });
    }catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }});

//export the moduls
module.exports = router;
