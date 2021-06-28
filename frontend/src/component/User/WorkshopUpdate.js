import React, {useState,useEffect} from "react";
import axios from "axios";

import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const WorkshopUpdate = ()=>{
    let his = useHistory();

    // const id = "60be61ea64d7e1246cc7357b"
    const [Workshop , setWorkshop] = useState( []);

    //get logged workshop
    useEffect(()=>{
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        function getWorkshop(){
            axios.get("http://localhost:8070/workshop/get/"+ loggedInUser).then((res)=>{
                setWorkshop(res.data);
                console.log(res.data);
            }).catch((err)=>{
            })
        }
        getWorkshop();
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
        const newWorkshop= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
        };

        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.put('http://localhost:8070/workshop/updateOne/'+ loggedInUser , newWorkshop).then(() =>{
            alert("Updated successfully!!!");
            his.push('/WorkshopProfile')

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
                        <h2>Update Workshop Presenter Profile</h2>
                        <hr></hr>

                        <div className="form-group mb-3">
                            <label className="form-label">Name</label>
                            <input className="form-control" type="Name" autoComplete="off" required="" name="Name" onChange={nameSetter} placeholder={Workshop.Name}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email </label>
                            <input className="form-control" type="Email" autoComplete="off" required="" name="Email" onChange={emailSetter} placeholder={Workshop.Email}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Phone</label>
                            <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone" onChange={phoneSetter} placeholder={Workshop.Phone}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input className="form-control" type="name" autoComplete="off" required="" name="Password" onChange={passwordSetter} placeholder={Workshop.Password}/>
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
export default WorkshopUpdate;