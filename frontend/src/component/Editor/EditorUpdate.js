import React, { useState, useEffect }  from 'react'
import '../../styles/Editor/EditorProfile.css'
import img from '../../armaan.jpg'
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";
import axios from "axios";
import {useHistory} from "react-router-dom";


const EditorUpdate = () =>{
    let his = useHistory();

    const [Editor , setEditor] = useState( []);

    //get logged Editor
    useEffect(()=>{
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        function getEditor(){
            axios.get("http://localhost:8070/editor/get/"+ loggedInUser).then((res)=>{
                setEditor(res.data.editor);
                console.log(res.data.editor);
            }).catch((err)=>{
            })
        }
        getEditor();
    },[]);

    //updateOne
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

        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.put('http://localhost:8070/editor/updateOne/'+ loggedInUser , newEditor).then(() =>{
            alert("Updated successfully!!!");
            his.push('/Editor')

        }).catch((err) =>{
            alert(err);
        })
    }
    return(
        <div>
            <div className="editorProfile">
                <div>
                    <div >
                        <div>
                            <ConferenceDashboardSideNav/>
                        </div>
                        <section></section>
                        <div>
                            <section className="login-dark">

                                <form method="post">
                                    <h2 className="visually-hidden">Editor Profile Update</h2>
                                    <div className="illustration">
                                        <i className="icon ion-ios-locked-outline"></i>
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="name-input-field">Name </label>
                                        <input className="form-control"
                                               type="text"
                                               name="Name"
                                               placeholder={Editor.Name}
                                               onChange={NameSetter}
                                               />

                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="name-input-field">Designation </label>
                                        <input className="form-control"
                                               type="text"
                                               name="Designation"
                                               placeholder={Editor.Designation}
                                               onChange={DesignationSetter}

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="name-input-field">Email </label>
                                        <input className="form-control"
                                               type="email"
                                               name="Email"
                                               placeholder={Editor.Email}
                                               onChange={EmailSetter}

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="name-input-field">Phone </label>
                                        <input className="form-control"
                                               type="text"
                                               name="Phone"
                                               placeholder={Editor.Phone}
                                               onChange={PhoneSetter}

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="name-input-field">Password </label>
                                        <input className="form-control"
                                               type="password"
                                               name="Password"
                                               placeholder={Editor.Password}
                                               onChange={PasswordSetter}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <button className="btn btn-warning form-btn" type="reset" onClick={onSubmit}>Update Profile</button>

                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorUpdate;