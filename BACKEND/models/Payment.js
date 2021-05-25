const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    Date : {
        type : String,
         
    },
    Time: {
        type: String,
         
    },
    BankName : {
        type : String,
         
    },
    CardType : {
        type : String,
         
    },
    CCNumber : {
        type : String,
         
    },
    CVV : {
        type : String,
         
    },

})

//payment table and path
const Payment = mongoose.model("Payment",paymentSchema);


module.exports = Payment;