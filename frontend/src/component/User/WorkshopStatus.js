import React, {useState,useEffect} from "react";
import axios from "axios";
import '../../styles/Researcher/Profile-Edit-Form.css';
import { useHistory } from "react-router-dom";
const WorkshopStatus = ({match})=>{

    console.log( match.params.id);
    const history = useHistory();
    const [Workshop , SetWorkshop] = useState( []);
    const [state, setState] = useState(true);

    //get all Workshop
    useEffect(()=>{
        function getWorkshop(){
            const loggedInUser = localStorage.getItem("user");
            console.log(loggedInUser);
            const id = match.params.id;
            axios.get("http://localhost:8070/workshop/get/"+loggedInUser).then((res)=>{
                SetWorkshop(res.data);

                console.log(res.data);
                console.log(res.data.Status);
                if(res.data.Status == "Approved"){
                    setState(false);
                    console.log(state);
                }
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getWorkshop();
    },[]);

    return(
        <div className="container profile profile-view" id="profile">
            <a href={"/WorkshopProfile"} className="btn btn-success form-btn" type="submit">Back to Profile</a>

            <form>
                <div className="row text-capitalize text-start justify-content-center profile-row">
                    <div className="col-md-8">
                        <h1> </h1>
                        <hr></hr>
                        <div className="form-group mb-3">
                            <label className="form-label">Document Status</label>
                            <input className="form-control" type="Status" autoComplete="off" required="" name="Status" value={Workshop.Status}/>
                        </div>
                    </div>
                </div>
            </form>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}
export default WorkshopStatus;