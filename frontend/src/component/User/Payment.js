import React, {useState, useEffect} from "react"
import axios from "axios";
import '../../styles/Payment/Bootstrap-4---Payment-Form.css'

const Payment=()=>{

    const[Date , setDate] = useState("");
    const[Time, setTime]= useState("");
    const[BankName, setBankName]= useState("");
    const[CardType, setCardType]= useState("");
    const[CCNumber, setCCNumber]= useState("");
    const[CVV, setCVV]= useState("");
    const DateSetter = (e) => {
        setDate(e.target.value);
    }
    const TimeSetter = (e) => {
        setTime(e.target.value);
    }
    const BankNameSetter = (e) => {
        setBankName(e.target.value);
    }
    const CardTypeSetter = (e) => {
        setCardType(e.target.value);
    }
    const CCNumberSetter = (e) => {
        setCCNumber(e.target.value);
    }
    const CVVSetter = (e) => {
        setCVV(e.target.value);
    }
    const onSubmit = () => {
        const newReviewer= {
            Date: Date,
            Time: Time,
            BankName: BankName,
            CardType:CardType,
            CCNumber:CCNumber,
            CVV:CVV
        };
        axios.post('http://localhost:8070/payment/add' , newReviewer).then(() =>{
            alert("Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    return(
        <div className="container"  >
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                            <div className="tab-content">
                                <div id="nav-tab-card" className="tab-pane fade show active">
                                    <h2>Payment Details</h2>
                                    <form role="form">
                                        <div className="form-group">
                                            <label htmlFor="username">Select Date </label>
                                            <input type="date" name="username" onChange={DateSetter} required className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">Select Time </label>
                                            <input type="time" name="username" onChange={TimeSetter} required className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">Bank Name </label>
                                            <input type="text" name="username" onChange={BankNameSetter} required className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">Card Type </label>
                                            <input type="text" name="username" onChange={CardTypeSetter} required className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">Card Number </label>
                                            <input type="text" name="username" onChange={CCNumberSetter} required className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">CV Number </label>
                                            <input type="text" name="username" onChange={CVVSetter} required className="form-control"/>
                                        </div>
                                        <button type="button" onClick={onSubmit}
                                                className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )}
    export default Payment;
