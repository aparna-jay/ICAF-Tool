import React, {useState} from "react";
import axios from "axios";

const ReviewerRegister = ()=>{

    const[Name , setName] = useState("");
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
    const[Designation, setDesignation]= useState("");
    const[Password, setPassword]= useState("");
    const nameSetter = (e) => {
        setName(e.target.value);
    }
    const emailSetter = (e) => {
        setEmail(e.target.value);
    }
    const phoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const passwordSetter = (e) => {
        setPassword(e.target.value);
    }
    const DesignationSetter = (e) => {
        setDesignation(e.target.value);
    }
    const onSubmit = () => {
        const newReviewer= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
            Designation:Designation
        };
        axios.post('http://localhost:8070/Reviewer/add' , newReviewer).then(() =>{
            alert("Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }
    return(
        <div className="col-9">

            <form className ="bg-danger">
                <br />
                <div className="col-md-auto">
                    <h1 className="text-light bg-dark">Reviewer Registry Form</h1>
                    <br />
                    <label htmlFor="exampleInputName" className="form-label">Ful name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputFullname"
                        onChange={nameSetter} />
                </div>
                <div className="col-md-auto">
                    <label htmlFor="exampleInputDesignation" className="form-label">Designation</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={DesignationSetter} />
                </div>
                <div className="col-md-auto">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={emailSetter}/>
                </div>
                <div className="col-md-auto">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputPhone"
                        onChange={phoneSetter} />
                </div>
                <div className="col-md-auto">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={passwordSetter}/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}>Submit</button>
                <br /><br />
            </form>
        </div>
    )

}
export default ReviewerRegister;