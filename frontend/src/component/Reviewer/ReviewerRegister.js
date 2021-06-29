import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import '../../styles/Admin/adminRegister.css'
import AdminSideNav from "../navbar/AdminSideNav";

const ReviewerRegister = () => {
    const history = useHistory();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Password, setPassword] = useState("");
    const [cPassword, setcPassword] = useState("");

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
    const cpasswordSetter = (e) => {
        setcPassword(e.target.value);
    }
    const DesignationSetter = (e) => {
        setDesignation(e.target.value);
    }

    const validate = () => {
        if (Password == cPassword) {
            return true;
        }
    }

    const onSubmit = () => {
        if (validate() == true) {
            const newReviewer = {
                Name: Name,
                Email: Email,
                Phone: Phone,
                Password: Password,
                Designation: Designation
            };
            history.push('/ManageReviewers')
            axios.post('https://icaf-tool.herokuapp.com/Reviewer/add', newReviewer).then(() => {
                alert("Registered successfully!!!");
            }).catch((err) => {
                alert(err);
            })
        } else {
            alert("Passwords do not match !");
            e.preventDefault();
        }
    }

    return (
        <div>
            <section className="register-photo">
                <div className="row">
                    <div className="col-md-6 col-xl-1">
                        <AdminSideNav/>
                    </div>
                    <div className="col-md-6 col-xl-9">
                        <div className="form-container">
                            <div className="image-holder image"></div>
                            <form>
                                <h2 className="text-center"><strong>Add Reviewer</strong></h2>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Name"
                                           onChange={nameSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Designation"
                                           onChange={DesignationSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="email" placeholder="Email"
                                           onChange={emailSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Phone"
                                           onChange={phoneSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" placeholder="Password"
                                           onChange={passwordSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" placeholder="Password"
                                           onChange={cpasswordSetter}/></div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ReviewerRegister;