const router = require("express").Router();
const { request } = require("express");
let Attendee = require("../models/Attendee");

//add data to attendee table
//./attendee/add
//Post request
//http://localhost:8090/attendee/add
router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Password = req.body.Password;
    const Amount = Number(req.body.Amount);

    const newAttendee = new Attendee({
        Name,
        Email,
        Phone,
        Password,
        Amount,
    })

    newAttendee.save().then(()=>{
        res.json("Attendee Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search attendee
//http://localhost:8090/attendee/
//Get Request
router.route("/").get((req,res)=>{
    Attendee.find().then((attendees)=>{
        res.json(attendees)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8090/attendee/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {Name,Email,Phone,Password,Amount} = req.body;
    const updateUser = {
        Name,
        Email,
        Phone,
        Password,
        Amount
    }

    const update = await Attendee.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete user
//http://localhost:8090/attendee/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await Attendee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the attendee
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Attendee.findById(id).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let attendee = await Attendee.findById(req.params.id);
    const data = {
        Name: req.body.Name || attendee.Name,
        Email: req.body.Email || attendee.Email,
        Phone: req.body.Phone || attendee.Phone,
        Password: req.body.Password || attendee.Password,
        Amount: req.body.Amount || attendee.Amount,
    };
    attendee = await Attendee.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(attendee);
});

router.route("/login").post((req, res) => {
    const Password = req.body.Password;
    Attendee.findOne({ Email: req.body.Email }).then(attendee => {
        // Check if admin exists
        if (!attendee) {
            return res.status(404).json({Email: "Email not found"});
        } else {
            // Check password
            if (Password === attendee.Password) {
                res.json(attendee)
            } else {
                return res
                    .status(400)
                    .json({Password: "Password incorrect"});
            }
        }
    });
});
module.exports = router;
