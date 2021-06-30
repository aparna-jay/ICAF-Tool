import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const AttendeePro = () => {

    const [Attendee, setAttendee] = useState([]);
    const history = useHistory();

    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    //get logged Attendee
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);

        function getAttendee() {
            axios.get("http://localhost:8070/attendee/get/" + loggedInUser).then((res) => {
                setAttendee(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getAttendee();
    }, []);

    function deleteAttendee() {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.delete('http://localhost:8070/attendee/delete/' + loggedInUser).then(() => {
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
                                <h1>Hello {Attendee.Name}</h1>
                            </div>
                            <hr></hr>
                            <div className="form-group mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="Name" autoComplete="off" required="" name="Name"
                                       value={Attendee.Name}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email </label>
                                <input className="form-control" type="Email" autoComplete="off" required="" name="Email"
                                       value={Attendee.Email}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Phone</label>
                                <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone"
                                       value={Attendee.Phone}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="name" autoComplete="off" required=""
                                       name="Password" value={Attendee.Password}/>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center content-right">
                                    <a href={"/AttendeeUpdate"} className="btn btn-warning form-btn" type="reset">Update
                                        Profile</a>
                                    <button onClick={Logout} className="btn btn-success form-btn" type="submit">Logout
                                    </button>
                                    <button className="btn btn-danger form-btn" type="reset" onClick={() => {
                                        if (window.confirm("Are you sure you want to delete your Profile?")) {
                                            deleteAttendee()
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
export default AttendeePro;
