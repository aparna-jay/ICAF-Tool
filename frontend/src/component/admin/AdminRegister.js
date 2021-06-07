import React, {useState} from 'react';
import axios from "axios";
import '../../styles/Admin/adminRegister.css'
import AdminSideNav from "../navbar/AdminSideNav";
const AdminRegister = () => {
    const[Name , setName] = useState("");
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
    const[Password, setPassword]= useState("");
    const[cPassword, setcPassword]= useState("");

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

    const onSubmit = () => {
        const newAdmin = {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password
        };
        axios.post('http://localhost:8070/admin/add' , newAdmin).then(() =>{
            alert("Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    return(
        <div>

            <section className="register-photo">
                <div className="row">
                    <div className="col-md-6 col-xl-3" >
                        <AdminSideNav />
                    </div>
                    <div className="col-md-6 col-xl-9">

                <div className="form-container">
                    <div className="image-holder image"></div>
                    <form>
                        <h2 className="text-center"><strong>Register</strong></h2>
                        <div className="form-group mb-3">
                            <input className="form-control" type="text" placeholder="Name" onChange={nameSetter}/></div>
                        <div className="form-group mb-3">
                            <input className="form-control" type="email" placeholder="Email" onChange={emailSetter}  /></div>
                        <div className="form-group mb-3">
                            <input className="form-control" type="text" placeholder="Phone" onChange={phoneSetter} /></div>
                        <div className="form-group mb-3">
                            <input className="form-control" type="password" placeholder="Password" onChange={passwordSetter}/></div>
                        <div className="form-group mb-3">
                            <input className="form-control" type="password" placeholder="Confirm password" onChange={cPasswordSetter}/></div>
                        <div className="form-group mb-3">
                            <div className="form-check"><label className="form-check-label"><input
                                className="form-check-input" type="checkbox" />I agree to the terms and conditions</label>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn btn-primary d-block w-100 regButton" type="submit"
                                    onClick={onSubmit}>Register
                            </button>
                        </div>
                        <a className="already" href="login.html">Already have an account? Login.</a>
                    </form>
                </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdminRegister;
