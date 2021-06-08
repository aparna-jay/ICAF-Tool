import React, {useState,useEffect} from "react";
import axios from "axios";

import '../../styles/Researcher/Profile-Edit-Form.css';

const WorkshopStatus = ()=>{

    const id = "60be61ea64d7e1246cc7357b"
    const [Workshop , SetWorkshop] = useState( []);


    //get all Researcher
    useEffect(()=>{
        function getWorkshop(){
            axios.get("http://localhost:8070/workshop/get/"+id).then((res)=>{

                SetWorkshop(res.data);
                // setName(res.data.name);
                console.log(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getWorkshop();
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
                            <input className="form-control" type="Name" autoComplete="off" required="" name="Name" value={Workshop.Status}/>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center content-right">
                                <a className="btn btn-success form-btn" href="/Payment" type="submit">Payment</a>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}
export default ResearcherStatus;