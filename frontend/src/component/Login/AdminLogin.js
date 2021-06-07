import React, {useState} from "react";
import "../../styles/Login/Login-Form-Dark.css"
import axios from "axios";
import {useHistory} from "react-router-dom";
const AdminLogin = ({loggedUser, setLoggedUser})=>{
    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const EmailSetter = (e) =>{
        setEmail(e.target.value);
    }
    const PasswordSetter = (e) =>{
        setPassword(e.target.value);
    }
    const userSetter = (e) =>{
        setUserType(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(userType === "Admin" ) {
            const newAdmin = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/admin/login', newAdmin).then((res) => {
                history.push('/admin');
                setLoggedUser(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        else if(userType === "Reviewer" ) {
            const newReviewer = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/Reviewer/login', newReviewer).then((res) => {
                history.push('/reviewer');
                setLoggedUser(res.data);
                console.log(loggedUser);
            }).catch((err) => {
                alert(err);
            })
        }
        else if(userType === "Editor" ) {
            const newEditor = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/editor/login', newEditor).then((res) => {
                history.push('/Editor');
                setLoggedUser(res.data);
                console.log(loggedUser);
            }).catch((err) => {
                alert(err);
            })
        } else if(userType === "Attendee" ) {
            const newAttendee = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/attendee/login', newAttendee).then((res) => {
                history.push('/Attendee');
                setLoggedUser(res.data);
                console.log(loggedUser);
            }).catch((err) => {
                alert(err);
            })
        } else if(userType === "Researcher" ) {
            const newResearcher = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/researcher/login', newResearcher).then((res) => {
                history.push('/Researcher');
                setLoggedUser(res.data);
                console.log(loggedUser);
            }).catch((err) => {
                alert(err);
            })
        }

    }
    return(
        <div>

                <section className="login-dark">
                    <form>
                        <h2 className="visually-hidden">Login Form</h2>
                        <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                        <div className="mb-3">
                        <select className="form-control" onChange={userSetter}>
                            <option className="dropdown-content">Choose user type</option>
                            <option className="dropdown-content" value="Reviewer">Reviewer</option>
                            <option className="dropdown-content" value="Editor">Editor</option>
                            <option className="dropdown-content" value="Researcher">Researcher</option>
                            <option className="dropdown-content" value="Workshop Presenter">Workshop Presenter</option>
                            <option className="dropdown-content" value="Attendee">Attendee</option>
                            <option className="dropdown-content" value="Admin">Admin</option>
                        </select>
                        </div>
                        <div className="mb-3"><input className="form-control" type="email" name="email"
                                                     placeholder="Email" onChange={EmailSetter} /></div>
                        <div className="mb-3"><input className="form-control" type="password" name="password"
                                                     placeholder="Password" onChange={PasswordSetter} /></div>
                        <div className="mb-3">
                            <button className="btn btn-primary d-block w-100" onClick={onSubmit} type="submit">Log In</button>
                        </div>
                        <a className="forgot" href="#">Forgot your email or password?</a>
                    </form>
                </section>
        </div>
    )
}
export default AdminLogin;
