import React, {useState, useEffect} from "react"
import axios from "axios";
import '../../styles/Attendee/Contact-Form-Clean.css'

const AttendeeReg=()=>{

    const[Name , setName] = useState("");
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
    const[Password, setPassword]= useState("");
    const[Amount, setAmount]= useState("");

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
    const AmountSetter = (e) => {
        setAmount(e.target.value);
    }


    const onSubmit = () => {
        const newReviewer= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
            Amount:Amount,

        };
        axios.post('http://localhost:8070/attendee/add' , newReviewer).then(() =>{
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
                        <div className="col"><label>Enter Amount(RS.)</label><input className="form-control" type="text" onChange={AmountSetter}/></div>
                        <button className="btn btn-primary" type="submit" onClick={onSubmit}>&nbsp;Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AttendeeReg;