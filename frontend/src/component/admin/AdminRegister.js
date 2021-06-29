import React, {useState} from 'react';
import axios from "axios";
import '../../styles/Admin/adminRegister.css'
import AdminSideNav from "../navbar/AdminSideNav";
import {useHistory} from "react-router-dom";

const AdminRegister = () => {

    const history = useHistory();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
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
    const cPasswordSetter = (e) => {
        setcPassword(e.target.value);
    }

    const onSubmit = (e) => {
        if (validate() == true) {
            e.preventDefault();
            const newAdmin = {
                Name: Name,
                Email: Email,
                Phone: Phone,
                Password: Password
            };
            axios.post('https://icaf-tool.herokuapp.com/admin/add', newAdmin).then(() => {
                alert("Registered successfully!!!");
                history.push('/ManageAdmins');
            }).catch((err) => {
                alert(err);
            })
        } else {
            alert("Passwords do not match!");
            e.preventDefault();

        }
    }

    const validate = () => {
        if (Password == cPassword) {
            return true;
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
                                <h2 className="text-center"><strong>Add Admin</strong></h2>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Name"
                                           onChange={nameSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="email" placeholder="Email"
                                           onChange={emailSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="number" placeholder="Phone"
                                           onChange={phoneSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" placeholder="Password"
                                           onChange={passwordSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" placeholder="Confirm password"
                                           onChange={cPasswordSetter}/></div>
                                <div className="form-group mb-3">
                                    <button className="btn btn-primary d-block w-100 regButton" type="submit"
                                            onClick={onSubmit}>Add Admin
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

export default AdminRegister;
