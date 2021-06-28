import React, {useState,useEffect} from 'react';
import { useParams, useHistory } from "react-router";
import '../../styles/ConferenceDashboard/Conference.css';
// import C from "./ConferenceDashboard";
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";
import axios from "axios";

const UpdateConference = () => {
    const {ConferenceId} = useParams();

    const[Title , setTitle] = useState("");
    const[Start_date, setStart_date]= useState("");
    const[End_Date, setEnd_Date]= useState("");
    const[Organization, setOrganization]= useState("");
    const[Description, setDescription]= useState("");
    const[Phone, setPhone]= useState("");
    const[Email, setEmail]= useState("");
    const[Status, setStatus]= useState("Pending");

    const TitleSetter = (e) => {
        setTitle(e.target.value);
    }
    const Start_dateSetter = (e) => {
        setStart_date(e.target.value);
    }
    const End_DateSetter = (e) => {
        setEnd_Date(e.target.value);
    }
    const OrganizationSetter = (e) => {
        setOrganization(e.target.value);
    }
    const DescriptionSetter = (e) => {
        setDescription(e.target.value);
    }
    const PhoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const newConference= {
            Title: Title,
            Start_date: Start_date,
            End_Date: End_Date,
            Organization:Organization,
            Description:Description,
            Phone:Phone,
            Email:Email,
            Status: Status

        };
        axios.put(`http://localhost:8070/Conference/update/${ConferenceId}` , newConference).then(() =>{
            alert("Conference updated successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    };
    const loadConference = async (id) => {
        await axios
            .get(`http://localhost:8070/Conference/get/` +id)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.Conference.Title);
                setStart_date(res.data.Conference.Start_date);
                setEnd_Date(res.data.Conference.End_Date);
                setOrganization(res.data.Conference.Organization);
                setDescription(res.data.Conference.Description);
                setPhone(res.data.Conference.Phone);
                setEmail(res.data.Conference.Email);

            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return(
        <div>
            <div className="ConferenceDashboard">
                <div>
                    <ConferenceDashboardSideNav/>
                </div>
                <section></section>
                <div>
                    <section className="login-dark">

                        <form method="post">
                            <h2 className="visually-hidden">Conference Details</h2>
                            <div className="illustration">
                                <i className="icon ion-ios-locked-outline"></i>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Title </label>
                                <input className="form-control"
                                       type="text"
                                       name="Title"
                                       placeholder="Title"
                                       onChange={TitleSetter}/>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Start Date </label>
                                <input className="form-control"
                                       type="text"
                                       name="Start_date"
                                       placeholder="Start Date"
                                       onChange={Start_dateSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">End Date </label>
                                <input className="form-control"
                                       type="text"
                                       name="End_Date"
                                       placeholder="End Date"
                                       onChange={End_DateSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Organization </label>
                                <input className="form-control"
                                       type="text"
                                       name="Organization"
                                       placeholder="Organization"
                                       onChange={OrganizationSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Description </label>
                                <input className="form-control"
                                       type="text"
                                       name="Description"
                                       placeholder="Description"
                                       onChange={DescriptionSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Phone </label>
                                <input className="form-control"
                                       type="text"
                                       name="Phone"
                                       placeholder="Phone"
                                       onChange={PhoneSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Email </label>
                                <input className="form-control"
                                       type="email"
                                       name="Email"
                                       placeholder="Email"
                                       onChange={EmailSetter}
                                />
                            </div>

                            <div className="mb-3">

                                <button className="btn btn-primary" role="button" type = "submit" >
                                    Update
                                </button>

                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UpdateConference;