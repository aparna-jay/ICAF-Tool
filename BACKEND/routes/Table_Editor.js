//import router package using constant variable
const router = require("express").Router();
const { request } = require("express");
//use Editor.js model
let Editor = require("../models/Editor");

//Insert data
//http://localhost:8030/editor/add
//arrow function
router.route("/add").post((req,res) => {

    //request data from frontent throught function body
    const Name = req.body.Name;
    const Designation = req.body.Designation; 
    const Email = req.body.Email;
    const Phone = Number(req.body.Phone); //cast for number format
    const Password = req.body.Password;

    //create an object to insert
    const newEditor = new Editor({
        //initialize objects
        Name,
        Designation,
        Email,
        Phone,
        Password
    })

    //insert data to the database throught the model
    newEditor.save().then(() => {  //js promise
        //send a response using json format to the frontend
        res.json("Editor Added!!")
    }).catch(() => {
        //display error msg in console
        console.log(err);
    })
})

//Fetch data
//call backend URL
router.route("/").get((req,res)=> {
    //get data from calling Editor module
    Editor.find().then((Table_Editor)=> {

        //send a response using json format to frontend
        res.json(Table_Editor)
    }).catch((err)=>{
        console.log(err)
    })
})

//update data
router.route("/update/:id").put(async(req,res)=> {
    //fetch the id from the request parameter
    let editorId = req.params.id; //params = url parameter 
    
    //fetch data from request body
    //destructure
    //pass frontend objects as a object to the backend
    const {Name, Designation, Email, Phone, Password} = req.body;

    //create a object for update
    const updateEditor = {
        Name,
        Designation,
        Email,
        Phone,
        Password
    }

    //pass editorId,updateStudent
    const update = await Editor.findByIdAndUpdate(editorId, updateEditor)
    .then(()=> {

        //await = according to findByIdAndUpdate function waits.

     //send a response using status to frontend
     //200 = success!
     res.status(200).send({status : "Editor Updated!"})

    }).catch((err) => {
        console.log(err);  //display error msg in console
        //send response status for frontend
        //500 = internal error!
        res.status(500).send({status: "Error with updating Editors' data", error: err.message});
    })
    
})

//delete data

router.route("/delete/:id").delete(async(req,res)=> {
    let editorId = req.params.id;

    await Editor.findByIdAndDelete(editorId).then(() => {
        res.status(200).send({status: "Editor deleted Successfully!"});
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with delete editor function", error: err.message});

    })
})

//Fetch only one user

router.route("/get/:id").get(async(req,res)=> {
    
    //fetch editorId
    let editorId = req.params.id;

    const user = await Editor.findById(editorId).then((editor)=> {
        res.status(200).send({staus: "Editor Fetched", editor})
    }).catch((err) => {
        console.log(err);
        res.staus(500).send({msg:"Error with get Editor", error: err.message});
    })
})

//export the moduls
module.exports = router;