import React, {useState} from 'react';
import '../../styles/Keynotes/Keynotes-profile.css'
import axios from 'axios';
import ProgressBar from '../../component/comps/ProgressBar';

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
    const conferenceSetter = (e) => {
        setConference(e.target.value);
    }
    const onSubmit = () => {
        const newKeynoteSpeaker= {
            Name: Name,
            Organization: Organization,
            Designation: Designation,
            Conference: Conference,
            avatar:url,
            Status:Status,
        };
        axios.post('http://localhost:8070/KeyNoteSpeakers/add' , newKeynoteSpeaker).then(() =>{
            alert("Added successfully!!!");
        }).catch((err) =>{
            alert(err); //error
        })
    }
    console.log(url);

    return(
        <div>
            <div>
                <div >

                    <section></section>
                    <main className="page">
                        <section className="clean-block about-us">
                            <div className="row justify-content-center">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="card clean-card text-center">
                                        {/*<img className="card-img-top w-100 d-block" src={img}/>*/}
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
                                                                placeholder="Enter Name"
                                                                type="text"
                                                                name="name"
                                                                // value={data.name}
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
                                                                placeholder="Enter Organization"
                                                                type="text"
                                                                name="Organization"
                                                                // value={data.name}
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
                                                                placeholder="Enter Designation"
                                                                type="text"
                                                                name="Designation"
                                                                // value={data.name}
                                                                onChange={designationSetter}
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
                                                                placeholder="Enter Description"
                                                                type="text"
                                                                name="Description"
                                                                // value={data.name}
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
                                                                Submit
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
            </div>
        </div>
    );
}
export default Keyprofile;