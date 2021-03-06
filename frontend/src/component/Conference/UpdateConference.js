import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from "react-router";
import '../../styles/ConferenceDashboard/Conference.css';
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";
import axios from "axios";

const UpdateConference = ({match}) => {

    console.log(match.params.id);
    let his = useHistory();
    const {ConferenceId} = useParams();
    const [Conference, setConference] = useState([]);
    const [Title, setTitle] = useState("");
    const [Start_date, setStart_date] = useState("");
    const [End_Date, setEnd_Date] = useState("");
    const [Organization, setOrganization] = useState("");
    const [Description, setDescription] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Status, setStatus] = useState("Pending");

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
        // if (validate() == true) {
            const id = match.params.id;
            e.preventDefault();
            const newConference = {
                Title: Title,
                Start_date: Start_date,
                End_Date: End_Date,
                Organization: Organization,
                Description: Description,
                Phone: Phone,
                Email: Email,
                Status: Status
            };
            axios.put('http://localhost:8070/Conference/updateOne/' + id, newConference).then(() => {
                alert("Conference updated successfully!!!");
                his.push('/ConferenceDashboard');
            }).catch((err) => {
                alert(err);
            })
       // }
    }

    useEffect(() => {
        const loadConference = async () => {
            const id = match.params.id;
            await axios
                .get(`http://localhost:8070/Conference/get/` + id)
                .then((res) => {
                    console.log(res.data.conference);
                    setTitle(res.data.conference.Title);
                    setStart_date(res.data.conference.Start_date);
                    setEnd_Date(res.data.conference.End_Date);
                    setOrganization(res.data.conference.Organization);
                    setDescription(res.data.conference.Description);
                    setPhone(res.data.conference.Phone);
                    setEmail(res.data.conference.Email);
                })
                .catch((err) => {
                    alert(err.message);
                });
        };
        loadConference();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-lg-2">
                    <div>
                        <ConferenceDashboardSideNav/>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-auto">
                    <section className="frm">
                        <form className="card" id="c">
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
                                       value={Title}
                                       onChange={TitleSetter}/>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Start Date </label>
                                <input className="form-control"
                                       type="text"
                                       name="Start_date"
                                       placeholder="Start Date"
                                       value={Start_date}
                                       onChange={Start_dateSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">End Date </label>
                                <input className="form-control"
                                       type="text"
                                       name="End_Date"
                                       placeholder="End Date"
                                       value={End_Date}
                                       onChange={End_DateSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Organization </label>
                                <input className="form-control"
                                       type="text"
                                       name="Organization"
                                       placeholder="Organization"
                                       value={Organization}
                                       onChange={OrganizationSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Description </label>
                                <input className="form-control"
                                       type="text"
                                       name="Description"
                                       placeholder="Description"
                                       value={Description}
                                       onChange={DescriptionSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Phone </label>
                                <input className="form-control"
                                       type="text"
                                       name="Phone"
                                       placeholder="Phone"
                                       pattern="[0-9]{9}"
                                       value={Phone}
                                       onChange={PhoneSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Email </label>
                                <input className="form-control"
                                       type="email"
                                       name="Email"
                                       value={Email}
                                       placeholder="Email"
                                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
                                       onChange={EmailSetter}
                                />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" role="button" type="submit" onClick={onSubmit}>
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
