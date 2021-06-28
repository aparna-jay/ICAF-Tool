import React, {useState,useEffect} from 'react';
import { useParams } from "react-router";
import '../../styles/ConferenceDashboard/Conference.css';
import '../../styles/ConferenceDashboard/ViewOneConference.css';
// import C from "./ConferenceDashboard";
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";
import axios from "axios";
import {Link} from "react-router-dom";

const ViewOneConference = ({match}) => {
    console.log( match.params.id);

    const {conferenceId} = useParams();

    const [Conference, setConference] = useState([]);

    useEffect(() => {
        loadConference();
    }, []);

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


    const loadConference = async () => {
        const id = match.params.id;
        await axios
            .get('http://localhost:8070/Conference/get/' +id)
            .then((res) => {
                console.log(res.data.conference);
                setConference(res.data.conference);
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
                                <li className="list-group-item" onChange={TitleSetter}>{Conference.Title}</li>
                                {/*<input className="form-control"*/}
                                {/*       type="text"*/}
                                {/*       name="Title"*/}
                                {/*       placeholder="Title"*/}
                                {/*       onChange={TitleSetter}*/}
                                {/*/>*/}
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Start Date </label>
                                <li className="list-group-item"  onChange={Start_dateSetter}>{Conference.Start_date}</li>
                                {/*<input className="form-control"*/}
                                {/*       type="text"*/}
                                {/*       name="Start_date"*/}
                                {/*       placeholder="Start Date" */}
                                {/*       onChange={Start_dateSetter}*/}
                                {/*/>*/}
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">End Date </label>
                                <li className="list-group-item" onChange={End_DateSetter}>{Conference.End_Date}</li>
                                {/*<input className="form-control"*/}
                                {/*       type="text"*/}
                                {/*       name="End_Date"*/}
                                {/*       placeholder="End Date"*/}
                                {/*       onChange={End_DateSetter}*/}
                                {/*/>*/}
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Organization </label>
                                <li className="list-group-item" onChange={OrganizationSetter}>{Conference.Organization}</li>
                                {/*<input className="form-control"*/}
                                {/*       type="text"*/}
                                {/*       name="Organization"*/}
                                {/*       placeholder="Organization"*/}
                                {/*       onChange={OrganizationSetter}*/}
                                {/*/>*/}
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Description </label>
                                <li className="list-group-item" onChange={DescriptionSetter}>{Conference.Description}</li>
                                {/*<input className="form-control"*/}
                                {/*       type="text"*/}
                                {/*       name="Description"*/}
                                {/*       placeholder="Description"*/}
                                {/*       onChange={DescriptionSetter}*/}
                                {/*/>*/}
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Phone </label>
                                <li className="list-group-item" onChange={PhoneSetter}>{Conference.Phone}</li>
                                {/*<input className="form-control"*/}
                                {/*       type="text"*/}
                                {/*       name="Phone"*/}
                                {/*       placeholder="Phone"*/}
                                {/*       onChange={PhoneSetter}*/}
                                {/*/>*/}
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Email </label>
                                <li className="list-group-item" onChange={EmailSetter}>{Conference.Email}</li>
                                {/*<input className="form-control"*/}
                                {/*       type="email"*/}
                                {/*       name="Email"*/}
                                {/*       placeholder="Email"*/}
                                {/*       onChange={EmailSetter}*/}
                                {/*/>*/}
                            </div>
                            <button className="btn btn-primary">
                                <Link to="/ConferenceDashboard">+ Back to Conference details</Link>
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ViewOneConference;