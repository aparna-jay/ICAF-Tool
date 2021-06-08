const router = require("express").Router();
const { request } = require("express");
let Researcher = require("../models/Researcher");

//add data to user table
//./Researcher/add
//Post request
//http://localhost:8070/researcher/add
router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Password = req.body.Password;
    const Status = req.body.Status;
    const avatar = req.body.avatar;

    const newResearcher = new Researcher({
        Name,
        Email,
        Phone,
        Password,
        Status,
        avatar
    })

    newResearcher.save().then(()=>{
        res.json("Researcher Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search Researcher
//http://localhost:8070/researcher/
//Get Request
router.route("/").get((req,res)=>{
    Researcher.find().then((researchers)=>{
        res.json(researchers)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8090/researcher/update/:id
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

    const update = await Researcher.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete researcher
//http://localhost:8090/researcher/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await Researcher.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Researcher deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the user
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Researcher.findById(id).then((user)=>{
            res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let researcher = await Researcher.findById(req.params.id);
    const data = {
        Name: req.body.Name || researcher.Name,
        Email: req.body.Email || researcher.Email,
        Phone: req.body.Phone || researcher.Phone,
        Password: req.body.Password || researcher.Password,
    };
    researcher = await Researcher.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(researcher);
});

router.route("/login").post((req, res) => {
    const Password = req.body.Password;
    Researcher.findOne({ Email: req.body.Email }).then(researcher => {
        // Check if researcher exists
        if (!researcher) {
            return res.status(404).json({Email: "Email not found"});
        } else {
            // Check password
            if (Password === researcher.Password) {
                res.json(researcher)
            } else {
                return res
                    .status(400)
                    .json({Password: "Password incorrect"});
            }
        }
    });
});

router.route("/updateOneStatus/:id").put(async (req, res) => {
    let researchers = await Researcher.findById(req.params.id);
    const data = {
        Status: req.body.Status || researchers.Status,
        avatar: req.body.avatar || researchers.avatar,
    };researchers = await Researcher.findByIdAndUpdate(req.params.id, data, {
         new: true });res.json(researchers);});




module.exports = router;
