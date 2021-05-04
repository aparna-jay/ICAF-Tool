const router = require("express").Router();
let Reviewer = require("../models/Reviewer");

// add data to reviewers table
// ./Reviewer/add
router.route("/add").post((req , res)=>{
    const Name  = req.body.Name;
    const Designation = req.body.Designation;
    const Email = req.body.Email;
    const Phone = Number(req.body.Phone);
    const Password = req.body.Password;

    const newReviewer = new Reviewer({
        Name,
        Designation,
        Email,
        Phone,
        Password
    })

    newReviewer.save().then()

})