//import router package using constant variable
const router = require("express").Router();
const { request } = require("express");
//use KeyNoteSpeakers.js model
let KeyNoteSpeakers = require("../models/KeyNoteSpeakers");

//Insert data
//http://localhost:8070/KeyNoteSpeakers/add
//arrow function
router.route("/add").post((req,res) => {

    //request data from frontent throught function body

    const Name = req.body.Name;
    const Organization = req.body.Organization;
    const Designation = req.body.Designation;
    const Description = req.body.Description;
    const Conference = req.body.Conference;
    const avatar = req.body.avatar;
    const Status = req.body.Status;
    
    //create an object to insert
    const newKeyNoteSpeakers = new KeyNoteSpeakers({
        //initialize objects
        Name,
        Organization,
        Designation,
        Description,
        Conference,
        avatar,
        Status
    })

    //insert data to the database throught the model
    newKeyNoteSpeakers.save().then(() => {  //js promise
        //send a response using json format to the frontend
        res.json("KeyNoteSpeakers Details Added!!")
    }).catch(() => {
        //display error msg in console
        console.log(err);
    })
})

//Fetch data
//call backend URL
router.route("/").get((req,res)=> {
    //get data from calling KeyNoteSpeakers module
    KeyNoteSpeakers.find().then((Table_KeyNoteSpeakers)=> {

        //send a response using json format to frontend
        res.json(Table_KeyNoteSpeakers)
    }).catch((err)=>{
        console.log(err)
    })
})

//update data
router.route("/update/:id").put(async(req,res)=> {
    //fetch the id from the request parameter
    let KeyNoteSpeakersId = req.params.id; //params = url parameter 
    
    //fetch data from request body
    //destructure
    //pass frontend objects as a object to the backend
    const {Name,Organization, Designation, Description, Conference, avatar, Status} = req.body;

    //create a object for update
    const updateKeyNoteSpeakers = {
        Name,
        Organization,
        Designation,
        Description,
        Conference,
        avatar,
        Status
    }

    //pass KeyNoteSpeakersId,updateKeyNoteSpeakers
    const update = await KeyNoteSpeakers.findByIdAndUpdate(KeyNoteSpeakersId, updateKeyNoteSpeakers)
    .then(()=> {

        //await = according to findByIdAndUpdate function waits.

     //send a response using status to frontend
     //200 = success!
     res.status(200).send({status : "KeyNoteSpeakers Details Updated!"})

    }).catch((err) => {
        console.log(err);  //display error msg in console
        //send response status for frontend
        //500 = internal error!
        res.status(500).send({status: "Error with updating KeyNote Speakers data", error: err.message});
    })
    
})

//delete data

router.route("/delete/:id").delete(async(req,res)=> {
    let KeyNoteSpeakersId = req.params.id;

    await KeyNoteSpeakers.findByIdAndDelete(KeyNoteSpeakersId).then(() => {
        res.status(200).send({status: "KeyNoteSpeakers details deleted Successfully!"});
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with delete Keynotes function", error: err.message});

    })
})

//Fetch only one user

router.route("/get/:id").get(async(req,res)=> {
    
    //fetch KeyNoteSpeakersId
    let KeyNoteSpeakersId = req.params.id;

    const user = await KeyNoteSpeakers.findById(KeyNoteSpeakersId).then((keyNoteSpeakers)=> {
        res.status(200).send({staus: "KeyNote Speakers Details Fetched", keyNoteSpeakers})
    }).catch((err) => {
        console.log(err);
        res.staus(500).send({msg:"Error with get KeyNote Speakers Details!!", error: err.message});
    })
});

// //Update Request
// router.route("/update/:id").put(async (req,res)=>{
//     let userId = req.params.id;
//     const {Name,Organization, Designation, Description, Conference, avatar, Status} = req.body;
//     const updateUser = {
//         Name,
//         Organization,
//         Designation,
//         Description,
//         Conference,
//         avatar,
//         Status
//     }
//
//     const update = await Researcher.findByIdAndUpdate(userId,updateUser).then(()=>{
//         res.status(200).send({status: "User Updated"})
//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status: "Error with updating data"});
//     })
// })
//Updateone
// router.route("/updateOne/:id").put(async (req, res) => {
//     let KeyNoteSpeakers = await KeyNoteSpeakers.findById(req.params.id);
//     const data = {
//         Name: req.body.Name || KeyNoteSpeakers.Name,
//         Email: req.body.Email || KeyNoteSpeakers.Email,
//         Phone: req.body.Phone || KeyNoteSpeakers.Phone,
//         Password: req.body.Password || KeyNoteSpeakers.Password,
//     };
//     KeyNoteSpeakers = await KeyNoteSpeakers.findByIdAndUpdate(req.params.id, data, { new: true });
//     res.json(KeyNoteSpeakers);
// });

router.route("/updateOneStatus/:id").put(async (req, res) => {
    let KeyNoteSpeakers = await KeyNoteSpeakers.findById(req.params.id);
    const data = {
        avatar: req.body.avatar || KeyNoteSpeakers.avatar,
        Status: req.body.Status || KeyNoteSpeakers.Status,
    };KeyNoteSpeakers = await KeyNoteSpeakers.findByIdAndUpdate(req.params.id, data, {
        new: true });res.json(KeyNoteSpeakers);});

//export the moduls
module.exports = router;