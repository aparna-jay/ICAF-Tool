const router = require("express").Router();
const { request } = require("express");
let Workshop = require("../models/Workshop");

//add data to user table
//./Researcher/add
//Post request
//http://localhost:8070/workshop/add
router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Password = req.body.Password;
    const Status = req.body.Status;
    const avatar = req.body.avatar;

    const newWorkshop = new Workshop({
        Name,
        Email,
        Phone,
        Password,
        Status,
        avatar
    })

    newWorkshop.save().then(()=>{
        res.json("Workshop Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search Researcher
//http://localhost:8090/workshop/
//Get Request
router.route("/").get((req,res)=>{
    Workshop.find().then((workshops)=>{
        res.json(workshops)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8090/workshop/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {Name,Email,Phone,Password,Status,avatar} = req.body;
    const updateUser = {
        Name,
        Email,
        Phone,
        Password,
        Status,
        avatar
    }

    const update = await Workshop.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete researcher
//http://localhost:8090/workshop/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await Workshop.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Workshop deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the user
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Workshop.findById(id).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let workshop = await Workshop.findById(req.params.id);
    const data = {
        Name: req.body.Name || workshop.Name,
        Email: req.body.Email || workshop.Email,
        Phone: req.body.Phone || workshop.Phone,
        Password: req.body.Password || workshop.Password,
    };
    workshop = await Workshop.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(workshop);
});

//UpdateStatus
router.route("/updateOneStatus/:id").put(async (req, res) => {
    let workshop = await Workshop.findById(req.params.id);
    const data = {
        Status: req.body.Status || workshop.Status,
        avatar: req.body.avatar || workshop.avatar,
    };workshop = await Workshop.findByIdAndUpdate(req.params.id, data, {
        new: true });res.json(workshop);});


module.exports = router;