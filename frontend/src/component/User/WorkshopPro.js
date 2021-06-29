import React, {useState,useEffect} from "react";
import axios from "axios";

import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const WorkshopPro = ()=>{

    const [Workshop , setWorkshop] = useState( []);

    const history = useHistory();
    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

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

    function deleteWorkshop(){
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.delete('http://localhost:8070/workshop/delete/' + loggedInUser).then(()=>{
            localStorage.clear();
            history.push('/login');
        }).catch((err)=>{
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
                <div className="row text-capitalize text-left justify-content-center profile-row">
                    <div className="col-md-8 ">
                        <div className="text-center">
                            <h1>Hello {Workshop.Name}</h1>
                        </div>
                        <hr></hr>

                        <div className="form-group mb-3">
                            <label className="form-label">Name</label>
                            <input className="form-control" type="Name" autoComplete="off" required="" name="Name" value={Workshop.Name}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email </label>
                            <input className="form-control" type="Email" autoComplete="off" required="" name="Email" value={Workshop.Email}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Phone</label>
                            <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone" value={Workshop.Phone}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input className="form-control" type="name" autoComplete="off" required="" name="Password" value={Workshop.Password}/>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center content-right">
                                <a href={"/WorkshopStatus"} className="btn btn-success form-btn" type="submit">Check Status</a>
                                <a href={"/WorkshopUpdate"} className="btn btn-warning form-btn" type="reset">Update Profile</a>
                                <button onClick={Logout} className="btn btn-success form-btn" type="submit">Logout</button>
                                <button className="btn btn-danger form-btn" type="reset" onClick={()=>{if(window.confirm("Are you sure you want to delete your Profile?")){deleteWorkshop()};}}>Delete Profile</button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}
export default WorkshopPro;