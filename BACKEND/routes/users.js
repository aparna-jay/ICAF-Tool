const router = require("express").Router();
const { request } = require("express");
let User = require("../models/User");

//add data to user table
//./User/add
//Post request
//http://localhost:8090/user/add
router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = Number(req.body.Phone);
    const Password = req.body.Password;
    const UserType = req.body.UserType;
    const Document = req.body.Document;

    const newUser = new User({
        Name,
        Email,
        Phone,
        Password,
        UserType,
        Document
    })

    newUser.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search user
//http://localhost:8090/user/
//Get Request
router.route("/").get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8090/user/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {Name,Email,Phone,Password,UserType,Document} = req.body;
    const updateUser = {
        Name,
        Email,
        Phone,
        Password,
        UserType,
        Document
    }

    const update = await User.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete user
//http://localhost:8090/user/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the user
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    User.findById(id).then((user)=>{
        res.status(200).send({status:"User fetched", user})
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;