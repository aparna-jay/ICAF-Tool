import React, {useState, useEffect} from "react"
import axios from "axios";
import '../../styles/Attendee/Contact-Form-Clean.css'

const AttendeeReg=()=>{

    //attendee
    const[Name , setName] = useState("");
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
    const[Password, setPassword]= useState("");

    //payment
    const[Date , setDate] = useState("");
    const[Time, setTime]= useState("");
    const[BankName, setBankName]= useState("");
    const[CardType, setCardType]= useState("");
    const[CCNumber, setCCNumber]= useState("");
    const[CVV, setCVV]= useState("");

    //attendee
    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PhoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }

    //payment
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
        const newAttendee= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
        };
        axios.post('http://localhost:8070/attendee/add' , newAttendee).then(() =>{
            alert("Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    //payment
    const onPayment = () => {
        const newPayment= {
            Date: Date,
            Time: Time,
            BankName: BankName,
            CardType:CardType,
            CCNumber:CCNumber,
            CVV:CVV
        };
        axios.post('http://localhost:8070/payment/add' , newPayment).then(() =>{
            alert("Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }


    return(
        <div>
            <div className="contact-clean">
                <form>
                    <h2 className="text-center">Attendee Registration</h2>
                    <div className="col"><label>Enter Name</label><input className="form-control" type="text" onChange={NameSetter}/></div>
                    <div className="form-group">
                        <div className="col"><label>Enter Email</label><input className="form-control" type="text" onChange={EmailSetter}/>
                        </div>
                        <div className="col"><label>Enter Phone</label><input className="form-control" type="text" onChange={PhoneSetter}/>
                        </div>
                        <div className="col"><label>Enter Password</label><input className="form-control" type="text" onChange={PasswordSetter}/>
                        </div>

                        <h5>*You should pay Rs:800 for the Registration.Please Fill the below Payment details*</h5>

                        <div className="col"><label>Enter Date</label><input className="form-control" type="date" onChange={DateSetter}/>
                        </div>
                        <div className="col"><label>Enter Time</label><input className="form-control" type="time" onChange={TimeSetter}/>
                        </div>
                        <div className="col"><label>Enter BankName</label><input className="form-control" type="text" onChange={BankNameSetter}/>
                        </div>
                        <div className="col"><label>Enter CardType</label><input className="form-control" type="text" onChange={CardTypeSetter}/>
                        </div>
                        <div className="col"><label>Enter CCNumber</label><input className="form-control" type="text" onChange={CCNumberSetter}/>
                        </div>
                        <div className="col"><label>Enter CVV</label><input className="form-control" type="text" onChange={CVVSetter}/>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={() => {
                            onSubmit();
                            onPayment();
                        }}>&nbsp;Pay & Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AttendeeReg;