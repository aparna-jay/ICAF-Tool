import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const ResearcherStatus = () => {

    const history = useHistory();
    const [Researcher, SetResearcher] = useState([]);
    const [state, setState] = useState(true);

    //get all Researcher
    useEffect(() => {
        function getResearcher() {
            const loggedInUser = localStorage.getItem("user");
            console.log(loggedInUser);
            axios.get("http://localhost:8070/researcher/get/" + loggedInUser).then((res) => {
                SetResearcher(res.data);
                // setName(res.data.name);
                console.log(res.data);
                console.log(res.data.Status);
                if (res.data.Status == "Approved") {
                    setState(false);
                    console.log(state);
                }
            }).catch((err) => {
                alert(err.message);
            })
        }

        getResearcher();
    }, []);

    const routeChange = () => {
        let path = `/Payment`;
        history.push(path);
    }

    return (
        <div className="container profile profile-view" id="profile">
            <a href={"/UserProfile"} className="btn btn-success form-btn" type="submit">Back to Profile</a>
            <form>
                <div className="row text-capitalize text-start justify-content-center profile-row">
                    <div className="col-md-8">
                        <h1></h1>
                        <hr></hr>
                        <div className="form-group mb-3">
                            <label className="form-label">Research Paper Status</label>
                            <input className="form-control" type="Status" autoComplete="off" required="" name="Status"
                                   value={Researcher.Status}/>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center content-right">
                                <button className="btn btn-success form-btn" disabled={state} onClick={routeChange}
                                        type="submit">Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
export default ResearcherStatus;