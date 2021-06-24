const router = require("express").Router();
const { request } = require("express");
let Admin = require("../models/Admin");

//add data to admin table
//./Admin/add
//Post request
//http://localhost:8070/admin/add
router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Password = req.body.Password;

    const newAdmin = new Admin({
        Name,
        Email,
        Phone,
        Password
    })

    newAdmin.save().then(()=>{
        res.json("Admin Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search admin
//http://localhost:8070/admin/
//Get Request
router.route("/").get((req,res)=>{
    Admin.find().then((admins)=>{
        res.json(admins)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8070/admin/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let adminId = req.params.id;
    const {Name,Email,Phone,Password} = req.body;
    const updateAdmin = {
        Name,
        Email,
        Phone,
        Password
    }

    const update = await Admin.findByIdAndUpdate(adminId,updateAdmin).then(()=>{
        res.status(200).send({status: "Admin Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete admin
//http://localhost:8070/admin/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let adminId = req.params.id;

    await Admin.findByIdAndDelete(adminId).then(()=>{
        res.status(200).send({status: "Admin deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the admins
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Admin.findById(id).then((admin)=>{
        res.json(admin)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/login").post((req, res) => {
    const Password = req.body.Password;
    Admin.findOne({ Email: req.body.Email }).then(admin => {
        // Check if admin exists
        if (!admin) {
            return res.status(404).json({Email: "Email not found"});
        } else {
            // Check password
            if (Password === admin.Password) {
                res.json(admin)
            } else {
                return res
                    .status(400)
                    .json({Password: "Password incorrect"});
            }
        }
    });
});

router.route("/updateOne/:id").put(async (req, res) => {
    let admin = await Admin.findById(req.params.id);
    const data = {
        Name: req.body.Name || admin.Name,
        Email: req.body.Email || admin.Email,
        Phone: req.body.Phone || admin.Phone,
        Password: req.body.Password || admin.Password,
    };
    admin = await Admin.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(admin);
});


module.exports = router;
