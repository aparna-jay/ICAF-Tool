const router = require("express").Router();
const { request } = require("express");
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
    newReviewer.save().then(()=>{
       res.json("added to database") 
    }).catch((err)=>{
        console.log(err);
    })
})

//search
router.route("/").get((req , res)=>{
    Reviewer.find().then((Reviewer)=>{
        res.json(Reviewer)
    }).catch((err)=>{
        console.log(err)
    })
})



//update
router.route("/update/:idofre").put(async(req ,res)=>{
    let id = req.params.idofre;
    const {
        Name,
        Designation,
        Email,
        Phone,
        Password  
    }= req.body;
    const updateReviewer = {
        Name,
        Designation,
        Email,
        Phone,
        Password 
    }
     const update = await Reviewer.findByIdAndUpdate(id , updateReviewer).then(()=>{
        res.status(200).send({status:"Updated"})
     }).catch((err)=>{
         console.log(err);
         res.status(500).send({
             status:"error with updating data"
         })
     })
    })


//delete
router.route("/delete/:idofre").delete(async(req,res)=>{
    let id = req.params.idofre;
    await  Reviewer.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status:"deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})


//find one
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    const R = Reviewer.findById(id).then((reviewer)=>{
        res.json(reviewer)
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/updateOne/:id").put(async (req, res) => {
    let reviewer = await Reviewer.findById(req.params.id);
        const data = {
            Name: req.body.Name || reviewer.Name,
            Designation: req.body.Designation || reviewer.Designation,
            Email: req.body.Email || reviewer.Email,
            Phone: req.body.Phone || reviewer.Phone,
            Password: req.body.Password || reviewer.Password,
        };
    reviewer = await Reviewer.findByIdAndUpdate(req.params.id, data, { new: true });
        res.json(reviewer);
});


module.exports = router;