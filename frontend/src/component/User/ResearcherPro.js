import React, {useState,useEffect} from "react";
import axios from "axios";

import '../../styles/Researcher/Profile-Edit-Form.css';

const ResearcherPro = ()=>{

    const id = "60be68d8d0d3003a943e0707"
    const [Researcher , SetResearcher] = useState( []);


    //get all Researcher
    useEffect(()=>{
        function getResearcher(){
            axios.get("http://localhost:8070/researcher/get/"+id).then((res)=>{

                SetResearcher(res.data);
                // setName(res.data.name);
                console.log(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getResearcher();
    },[]);



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
                            <h1>User Profile</h1>
                            <hr></hr>

                            <div className="form-group mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="Name" autoComplete="off" required="" name="Name" value={Researcher.Name}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email </label>
                                <input className="form-control" type="Email" autoComplete="off" required="" name="Email" value={Researcher.Email}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Phone</label>
                                <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone" value={Researcher.Phone}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="name" autoComplete="off" required="" name="Password" value={Researcher.Password}/>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center content-right">
                                    <a href={"/ResearcherStatus"} className="btn btn-success form-btn" type="submit">Working Panel</a>
                                    <a href={"/ResearcherUpdate"} className="btn btn-warning form-btn" type="reset">Update Profile</a>
                                    <button className="btn btn-danger form-btn" type="reset">Delete Profile</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
                </div>
);
}
export default ResearcherPro;
