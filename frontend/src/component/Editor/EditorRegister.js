import React, {useState} from 'react';
import axios from "axios";
import '../../styles/Admin/adminRegister.css'
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";
const EditorRegister = () => {
    const[Name , setName] = useState("");
    const[Designation, setDesignation]= useState("");
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
    const[Password, setPassword]= useState("");
    const[CPassword, setCPassword]= useState("");

    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const DesignationSetter = (e) => {
        setDesignation(e.target.value);
    }
    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PhoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }
    const CPasswordSetter = (e) => {
        setCPassword(e.target.value);
    }

    const onSubmit = () => {
        const newEditor = {
            Name: Name,
            Designation:Designation,
            Email: Email,
            Phone: Phone,
            Password:Password
        };
        axios.post('http://localhost:8070/editor/add' , newEditor).then(() =>{
            alert("Editor Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    return(
        <div>

            <section className="register-photo">
                <div className="row">
                    <div className="col-md-6 col-xl-1" >
                        <ConferenceDashboardSideNav />
                    </div>
                    <div className="col-md-6 col-xl-9">

                        <div className="form-container">
                            <div className="image-holder image"></div>
                            <form>
                                <h2 className="text-center"><strong>Add Editor</strong></h2>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Name" onChange={NameSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Designation" onChange={DesignationSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="email" placeholder="Email" onChange={EmailSetter}  /></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Phone" onChange={PhoneSetter} /></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" placeholder="Password" onChange={PasswordSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" placeholder="Confirm password" onChange={CPasswordSetter}/></div>
                                <div className="form-group mb-3">
                                    <button className="btn btn-primary d-block w-100 regButton" type="submit"
                                            onClick={onSubmit}>Add Editor
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

export default EditorRegister;
