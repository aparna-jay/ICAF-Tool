import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/Researcher/Profile-Edit-Form.css';
import {useHistory} from "react-router-dom";

const WorkshopUpdate = () => {

    let his = useHistory();
    const [Workshop, setWorkshop] = useState([]);

    //get logged workshop
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);

        function getWorkshop() {
            axios.get("https://icaf-tool.herokuapp.com/workshop/get/" + loggedInUser).then((res) => {
                setWorkshop(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getWorkshop();
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
        const newWorkshop = {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password: Password,
        };

        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.put('https://icaf-tool.herokuapp.com/workshop/updateOne/' + loggedInUser, newWorkshop).then(() => {
            alert("Updated successfully!!!");
            his.push('/WorkshopProfile')

        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className={"row-cols-3"}>
            <div className="container profile profile-view " id="profile">
                <br/>
                <a href={"/WorkshopProfile"} className="btn btn-success form-btn" type="submit">Back to Profile</a>
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
                                       onChange={nameSetter} placeholder={Workshop.Name}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email </label>
                                <input className="form-control" type="Email" autoComplete="off" required="" name="Email"
                                       onChange={emailSetter} placeholder={Workshop.Email}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Phone</label>
                                <input className="form-control" type="Phone" autoComplete="off" required="" name="Phone"
                                       onChange={phoneSetter} placeholder={Workshop.Phone}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="name" autoComplete="off" required=""
                                       name="Password" onChange={passwordSetter} placeholder={Workshop.Password}/>
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
export default WorkshopUpdate;