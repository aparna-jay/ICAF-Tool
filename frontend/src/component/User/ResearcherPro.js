import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const ResearcherPro = () => {
    const [Researcher, setResearcher] = useState([]);

    const history = useHistory();
    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    //get logged researcher
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);

        function getResearcher() {
            axios.get("http://localhost:8070/researcher/get/" + loggedInUser).then((res) => {
                setResearcher(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getResearcher();
    }, []);

    function deleteResearcher() {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.delete('http://localhost:8070/researcher/delete/' + loggedInUser).then(() => {
            localStorage.clear();
            history.push('/login');
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className={"row-cols-2"}>
            <div className="container profile profile-view " id="profile">
                <form className="card qwerty col-xl-9">
                    <div className="row text-capitalize text-left justify-content-center profile-row">
                        <div className="">
                            <div className="text-center">
                                <h1>Hello {Researcher.Name}</h1>
                            </div>
                            <hr></hr>
                            <div className="form-group mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="Name" autoComplete="off" required="" name="Name"
                                       value={Researcher.Name}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email </label>
                                <input className="form-control" type="Email" autoComplete="off" required="" name="Email"
                                       value={Researcher.Email}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Phone</label>
                                <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone"
                                       value={Researcher.Phone}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="name" autoComplete="off" required=""
                                       name="Password" value={Researcher.Password}/>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center content-right">
                                    <a href={"/ResearcherStatus"} className="btn btn-success form-btn" type="submit">Check
                                        Status</a>
                                    <a href={"/ResearcherUpdate"} className="btn btn-warning form-btn" type="reset">Update
                                        Profile</a>
                                    <button onClick={Logout} className="btn btn-success form-btn" type="submit">Logout
                                    </button>
                                    <button className="btn btn-danger form-btn" type="reset" onClick={() => {
                                        if (window.confirm("Are you sure you want to delete your Profile?")) {
                                            deleteResearcher()
                                        }
                                        ;
                                    }}>Delete Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ResearcherPro;
