import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const AttendeeUpdate = () => {

    let his = useHistory();

    const [Attendee, setAttendee] = useState([]);

    //get logged admin
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

    //updateOne
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");

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
        const newAttendee = {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password: Password,
        };

        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.put('http://localhost:8070/attendee/updateOne/' + loggedInUser, newAttendee).then(() => {
            alert("Updated successfully!!!");
            his.push('/AttendeeProfile')

        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className={"row-cols-3"}>
            <div className="container profile profile-view " id="profile">
                <br/>
                <a href={"/AttendeeProfile"} className="btn btn-success form-btn" type="submit">Back to Profile</a>
                <form className="card qwerty col-xl-9">
                    <div className="row text-capitalize text-left justify-content-center profile-row">
                        <div className="">
                            <div className="text-center">
                                <h1>Update Profile</h1>
                            </div>
                            <hr></hr>
                            <div className="form-group mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="Name" autoComplete="off" required="" name="Name"
                                       onChange={nameSetter} placeholder={Attendee.Name}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email </label>
                                <input className="form-control" type="Email" autoComplete="off" required="" name="Email"
                                       onChange={emailSetter} placeholder={Attendee.Email}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Phone</label>
                                <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone"
                                       onChange={phoneSetter} placeholder={Attendee.Phone}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="name" autoComplete="off" required=""
                                       name="Password" onChange={passwordSetter} placeholder={Attendee.Password}/>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center content-right">
                                    <button className="btn btn-warning form-btn" type="reset" onClick={onSubmit}>Update
                                        Profile
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
export default AttendeeUpdate;