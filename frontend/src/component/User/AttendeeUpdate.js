import React, {useState,useEffect} from "react";
import axios from "axios";

import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const AttendeeUpdate = ()=>{
    let his = useHistory();

    const id = "60bb2823255db134d4d352ff"
    const [Attendee , SetAttendee] = useState( []);

    //get all Researcher
    useEffect(()=>{
        function getAttendee(){
            axios.get("http://localhost:8070/attendee/get/"+id).then((res)=>{

                SetAttendee(res.data);
                // setName(res.data.name);
                console.log(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getAttendee();
    },[]);

    //updateOne
    const[Name , setName] = useState('');
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
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

    const onSubmit = () => {
        const newAttendee= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
        };

        axios.put('http://localhost:8070/attendee/updateOne/'+ id , newAttendee).then(() =>{
            alert("Updated successfully!!!");
            his.push('/AttendeeProfile')

        }).catch((err) =>{
            alert(err);
        })
    }




    return(
        <div className="container profile profile-view" id="profile">
            <div className="row">
                <div className="col-md-12 alert-col relative">
                    <div className="alert alert-info alert-dismissible absolue center" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <span>Profile save with success</span></div>
                </div>
            </div>
            <form>
                <div className="row text-capitalize text-start justify-content-center profile-row">
                    <div className="col-md-8">
                        <h1>Update Attendee Profile</h1>
                        <hr></hr>

                        <div className="form-group mb-3">
                            <label className="form-label">Name</label>
                            <input className="form-control" type="Name" autoComplete="off" required="" name="Name" onChange={nameSetter} placeholder={Attendee.Name}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email </label>
                            <input className="form-control" type="Email" autoComplete="off" required="" name="Email" onChange={emailSetter} placeholder={Attendee.Email}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Phone</label>
                            <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone" onChange={phoneSetter} placeholder={Attendee.Phone}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input className="form-control" type="name" autoComplete="off" required="" name="Password" onChange={passwordSetter} placeholder={Attendee.Password}/>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center content-right">
                                <button className="btn btn-warning form-btn" type="reset" onClick={onSubmit}>Update Profile</button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}
export default AttendeeUpdate;