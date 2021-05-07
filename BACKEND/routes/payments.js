const router = require("express").Router();
const { request } = require("express");
let Payment = require("../models/Payment");

//add data to payment table
//Post request
//http://localhost:8090/payment/add
router.route("/add").post((req,res)=>{
    const Date = req.body.Date;
    const Time = req.body.Time;
    const BankName = req.body.BankName;
    const CardType = req.body.CardType;
    const CCNumber = req.body.CCNumber;
    const CVV = req.body.CVV;

    const newPayment = new Payment({
        Date,
        Time,
        BankName,
        CardType,
        CCNumber,
        CVV
    })

    newPayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search payment
//http://localhost:8090/payment/
//Get Request
router.route("/").get((req,res)=>{
    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })
})

//update payment 
//http://localhost:8090/payment/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let paymentId = req.params.id;
    const {Date,Time,BankName,CardType,CCNumber,CVV} = req.body;
    const updatePayment = {
        Date,
        Time,
        BankName,
        CardType,
        CCNumber,
        CVV
    }

    const update = await Payment.findByIdAndUpdate(paymentId,updatePayment).then(()=>{
        res.status(200).send({status: "Payment Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete Payment
//http://localhost:8090/payment/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let paymentId = req.params.id;

    await Payment.findByIdAndDelete(paymentId).then(()=>{
        res.status(200).send({status: "Payment deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the payment
//http://localhost:8090/payment/get/:id
//Get Request
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Payment.findById(id).then((payment)=>{
        res.status(200).send({status:"Payment fetched", payment})
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;