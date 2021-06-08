import React, {useState,useEffect} from "react";
import axios from "axios";

import '../../styles/Researcher/Profile-Edit-Form.css';
import { useHistory } from "react-router-dom";
const ResearcherStatus = ()=>{
    const history = useHistory();

    const id = "60be68d8d0d3003a943e0707"
    const [Researcher , SetResearcher] = useState( []);
    const [state, setState] = useState(true);


    //get all Researcher
    useEffect(()=>{
        function getResearcher(){
            axios.get("http://localhost:8070/researcher/get/"+id).then((res)=>{

                SetResearcher(res.data);
                // setName(res.data.name);
                console.log(res.data);
                console.log(res.data.Status);
                if(res.data.Status == "Approved"){
                    setState(false);
                    console.log(state);
                }
                // setStatus(res.data.Status);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getResearcher();
    },[]);

    const routeChange = () =>{
        let path = `/Payment`;
        history.push(path);
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
                        <h1> </h1>
                        <hr></hr>

                        <div className="form-group mb-3">
                            <label className="form-label">Research Paper Status</label>
                            <input className="form-control" type="Status" autoComplete="off" required="" name="Status" value={Researcher.Status}/>

                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center content-right">
                                <button className="btn btn-success form-btn" disabled={state} onClick={routeChange} type="submit">Payment</button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    );
}
export default ResearcherStatus;