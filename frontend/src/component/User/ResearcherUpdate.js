import React, {useState,useEffect} from "react";
import axios from "axios";

import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const ResearcherUpdate = ()=>{
    let his = useHistory();

    const [Researcher , setResearcher] = useState( []);

    //get logged admin
    useEffect(()=>{
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        function getResearcher(){
            axios.get("http://localhost:8070/researcher/get/"+ loggedInUser).then((res)=>{
                setResearcher(res.data);
                console.log(res.data);
            }).catch((err)=>{
            })
        }
        getResearcher();
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
        const newResearcher= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
        };

        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.put('http://localhost:8070/researcher/updateOne/'+ loggedInUser , newResearcher).then(() =>{
            alert("Updated successfully!!!");
            his.push('/UserProfile')

        }).catch((err) =>{
            alert(err);
        })
    }



    return(
        <div className={"row-cols-3"}>
            <div className="container profile profile-view " id="profile">
                <br />
                <a href={"/UserProfile"} className="btn btn-success form-btn" type="submit">Back to Profile</a>
                {/*<div className="row">*/}
                {/*    <div className="col-md-12 alert-col relative">*/}
                {/*        <div className="alert alert-info alert-dismissible absolue center" role="alert">*/}
                {/*            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/}
                {/*            <span>Profile save with success</span></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <form className="card qwerty col-xl-9">
                    <div className="row text-capitalize text-left justify-content-center profile-row">
                        <div className="">
                            <div className="text-center">
                                <h1>Update Profile</h1>
                            </div>
                        <hr></hr>

                        <div className="form-group mb-3">
                            <label className="form-label">Name</label>
                            <input className="form-control" type="Name" autoComplete="off" required="" name="Name" onChange={nameSetter} placeholder={Researcher.Name}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email </label>
                            <input className="form-control" type="Email" autoComplete="off" required="" name="Email" onChange={emailSetter} placeholder={Researcher.Email}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Phone</label>
                            <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone" onChange={phoneSetter} placeholder={Researcher.Phone}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input className="form-control" type="name" autoComplete="off" required="" name="Password" onChange={passwordSetter} placeholder={Researcher.Password}/>
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
            </div>
    );
}
export default ResearcherUpdate;
