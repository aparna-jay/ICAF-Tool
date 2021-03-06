import React, {useState} from "react";
import "../../styles/Login/Login-Form-Dark.css"
import axios from "axios";
import {useHistory} from "react-router-dom";

const AdminLogin = () => {

    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }
    const userSetter = (e) => {
        setUserType(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (userType === "Admin") {
            const newAdmin = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/admin/login', newAdmin).then((res) => {
                history.push('/admin');
                localStorage.setItem('user', res.data._id);
            }).catch((err) => {
                alert(err);
            })
        } else if (userType === "Reviewer") {
            const newReviewer = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/Reviewer/login', newReviewer).then((res) => {
                history.push('/reviewer');
                localStorage.setItem('user', res.data._id);
            }).catch((err) => {
                alert(err);
            })
        } else if (userType === "Editor") {
            const newEditor = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/editor/login', newEditor).then((res) => {
                history.push('/Editor');
                localStorage.setItem('user', res.data._id);
            }).catch((err) => {
                alert(err);
            })
        } else if (userType === "Attendee") {
            const newAttendee = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/attendee/login', newAttendee).then((res) => {
                history.push('/AttendeeProfile');
                localStorage.setItem('user', res.data._id);
            }).catch((err) => {
                alert(err);
            })
        } else if (userType === "Researcher") {
            const newResearcher = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/researcher/login', newResearcher).then((res) => {
                history.push('/UserProfile');
                localStorage.setItem('user', res.data._id);
            }).catch((err) => {
                alert(err);
            })
        } else if (userType === "Workshop") {
            const newWorkshop = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/workshop/login', newWorkshop).then((res) => {
                history.push('/WorkshopProfile');
                localStorage.setItem('user', res.data._id);
            }).catch((err) => {
                alert(err);
            })
        }
    }

    return (
        <div>
            <form className="login-dark">
                <br/><br/><br/>
                <div className="container logForm col-md-6 col-xl-4">
                    <br/>
                    <h2 className="visually-hidden"> Login Form</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="mb-3">
                        <select className="form-control" onChange={userSetter}>
                            <option className="dropdown-content">Choose user type</option>
                            <option className="dropdown-content" value="Reviewer">Reviewer</option>
                            <option className="dropdown-content" value="Editor">Editor</option>
                            <option className="dropdown-content" value="Researcher">Researcher</option>
                            <option className="dropdown-content" value="Workshop">Workshop Presenter</option>
                            <option className="dropdown-content" value="Attendee">Attendee</option>
                            <option className="dropdown-content" value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="mb-3"><input className="form-control" type="email" name="email"
                                                 placeholder="Email" onChange={EmailSetter}/></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password"
                                                 placeholder="Password" onChange={PasswordSetter}/></div>
                    <div className="mb-3">
                        <button className="btn btn-primary d-block w-100" onClick={onSubmit} type="submit">Log In
                        </button>
                    </div>
                    <br/>
                </div>
            </form>
        </div>
    );
}
export default AdminLogin;
