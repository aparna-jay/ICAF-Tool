import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../../styles/Admin/adminRegister.css'
import AdminSideNav from "../navbar/AdminSideNav";
import {useHistory} from "react-router-dom";

const ViewConference = ({conId}) => {

    const history = useHistory();
    const[conference, setConference] = useState([]);
    const[title , setTitle] = useState("");
    const[startDate, setStartDate]= useState("");
    const[endDate, setEndDate]= useState("");
    const[organization, setOrganization]= useState("");
    const[description, setDescription]= useState("");
    const[phone, setPhone]= useState("");
    const[email, setEmail]= useState("");

    const titleSetter = (e) => {
        setTitle(e.target.value);
    }
    const startDateSetter = (e) => {
        setStartDate(e.target.value);
    }
    const endDateSetter = (e) => {
        setEndDate(e.target.value);
    }
    const organizationSetter = (e) => {
        setOrganization(e.target.value);
    }
    const descriptionSetter = (e) => {
        setDescription(e.target.value);
    }
    const phoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const emailSetter = (e) => {
        setEmail(e.target.value);
    }

    useEffect(()=>{
            axios.get("http://localhost:8070/Conference/get/"+conId).then((res)=>{

                setConference(res.data.conference);
                // setName(res.data.name);
                console.log(res.data.conference);
            }).catch((err)=>{
            })
    },[conId]);


    const UpdateStatus = (status) => {
        const newConference= {
            Title: title,
            Start_date: startDate,
            End_Date: endDate,
            Organization:organization,
            Description:description,
            Phone:phone,
            Email:email,
            Status:status
        };
        axios.put('http://localhost:8070/Conference/updateOne/'+ conId , newConference).then(() =>{
        }).catch((err) =>{
        });
        history.push('/ManageConference');

    }

    return(
        <div>

            <section className="register-photo">
                <div className="row">
                    <div className="col-md-6 col-xl-1" >
                        <AdminSideNav />
                    </div>
                    <div className="col-md-6 col-xl-9">

                        <div className="form-container">
                            <div className="image-holder image">
                            </div>
                            <form>
                                <h2 className="text-center"><strong>Conference Details</strong></h2>
                                <div className="form-group mb-3">
                                    <label className="float-left font-weight-bolder">Title</label>
                                    <input className="form-control" type="text" placeholder={conference.Title} onChange={titleSetter}/></div>
                                <div className="form-group mb-3">
                                    <label className="float-left font-weight-bolder">Start Date</label>
                                    <input className="form-control" type="text" placeholder={conference.Start_date} onChange={startDateSetter}/></div>
                                <div className="form-group mb-3">
                                    <label className="float-left font-weight-bolder">End Date</label>
                                    <input className="form-control" type="text" placeholder={conference.End_Date} onChange={endDateSetter}/></div>
                                <div className="form-group mb-3">
                                    <label className="float-left font-weight-bolder">Organization</label>
                                    <input className="form-control" type="text" placeholder={conference.Organization} onChange={organizationSetter}/></div>
                                <div className="form-group mb-3">
                                    <label className="float-left font-weight-bolder">Description</label>
                                    <input className="form-control" type="text" placeholder={conference.Description} onChange={descriptionSetter}/></div>
                                <div className="form-group mb-3">
                                    <label className="float-left font-weight-bolder">Phone</label>
                                    <input className="form-control" type="text" placeholder={conference.Phone} onChange={phoneSetter}/></div>
                                <div className="form-group mb-3">
                                    <label className="float-left font-weight-bolder">Email</label>
                                    <input className="form-control" type="email" placeholder={conference.Email} onChange={emailSetter}  /></div>
                                <div className="form-group mb-3">
                                    <button className="btn btn-primary d-block w-100 regButton" type="submit"
                                            onClick={()=>UpdateStatus("Approved")}>Approve
                                    </button>
                                    <button className="btn btn-primary d-block w-100 regButton" type="submit"
                                            onClick={()=>UpdateStatus("Rejected")}>Reject
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

export default ViewConference;
