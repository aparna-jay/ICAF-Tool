import React, {useState} from 'react';
import '../../styles/Keynotes/Keynotes-profile.css'
import axios from 'axios';
import ProgressBar from '../../component/comps/ProgressBar';
import {Link} from "react-router-dom";

const Keyprofile = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, seturl] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image (png/jpeg/jpg)');
        }
    };

    const[Name , setName] = useState("");
    const[Organization, setOrganization]= useState("");
    const[Designation, setDesignation]= useState("");
    const[Description, setDescription]= useState("");
    const[Conference, setConference]= useState("");
    const[Status, setStatus]= useState("Pending");

    const nameSetter = (e) => {
        setName(e.target.value);
    }
    const organizationSetter = (e) => {
        setOrganization(e.target.value);
    }
    const designationSetter = (e) => {
        setDesignation(e.target.value);
    }
    const descriptionSetter = (e) => {
        setDescription(e.target.value);
    }
    const conferenceSetter = (e) => {
        setConference(e.target.value);
    }
    const onSubmit = () => {
        const newKeynoteSpeaker= {
            Name: Name,
            Organization: Organization,
            Designation: Designation,
            Description:Description,
            Conference: Conference,
            avatar:url,
            Status:Status,
        };
        axios.post('https://icaf-tool.herokuapp.com/KeyNoteSpeakers/add' , newKeynoteSpeaker).then(() =>{
            alert("Added successfully!!!");
        }).catch((err) =>{
            alert(err); //error
        })
    }
    console.log(url);

    return(
        <div>
            <div className="row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-12 " id="key">
                    <main className="page">
                        <section className="clean-block about-us">
                            <div className="row justify-content-center">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="card clean-card text-center">
                                        <div className="card-body info">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="labels"><strong>Name</strong></p>
                                                        </div>
                                                        <div className="col">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Name"
                                                                type="text"
                                                                name="name"
                                                                onChange={nameSetter}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="labels"><strong>Organization</strong></p>
                                                        </div>
                                                        <div className="col">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Organization"
                                                                type="text"
                                                                name="Organization"
                                                                onChange={organizationSetter}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="labels"><strong>Designation</strong></p>
                                                        </div>
                                                        <div className="col">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Designation"
                                                                type="text"
                                                                name="Designation"
                                                                onChange={designationSetter}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="labels"><strong>Description</strong></p>
                                                        </div>
                                                        <div className="col">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Description"
                                                                type="text"
                                                                name="Description"
                                                                onChange={descriptionSetter}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="labels"><strong>Conference</strong></p>
                                                        </div>
                                                        <div className="col">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Conference"
                                                                type="text"
                                                                name="Description"
                                                                onChange={conferenceSetter}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Profile Picture</strong></p>
                                                    </div>
                                                        <div className="col">
                                                        <label className={"mylabel"}>
                                                            <input type="file" onChange={handleChange} />
                                                            <span>+</span>
                                                        </label>
                                                        <div className="output">
                                                            { error && <div className="error">{ error }</div>}
                                                            { file && <div>{ file.name }</div> }
                                                            { file && <ProgressBar file={file} setFile={setFile} seturl={seturl}/> }
                                                            {file && <div> {file.url}</div>}
                                                        </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-primary" role="button" type = "submit" onClick={onSubmit}>
                                                                <b>Submit</b>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <div className="col-md-10">
                <button className="btn btn-primary">
                    <Link to="/Editor">+ Back to Dashboard</Link>
                </button>
                </div>
            </div>
        </div>
    );
}
export default Keyprofile;
