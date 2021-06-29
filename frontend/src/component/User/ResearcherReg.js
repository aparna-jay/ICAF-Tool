import React, {useState} from "react"
import axios from "axios";
import {useHistory} from "react-router-dom";
import ProgressBar from '../../component/comps/ProgressBar';
import '../../styles/Researcher/index.css'


const ResearcherReg = () => {

    let his = useHistory();

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, seturl] = useState(null);
    const types = ["application/pdf",
        "application/x-zip-compressed",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.ms-powerpoint",];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select a file (pdf or docx)');
        }
    };

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");
    const [Status, setStatus] = useState("Pending");
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
            const newResearcher = {
                Name: Name,
                Email: Email,
                Phone: Phone,
                Password: Password,
                Status: Status,
                avatar: url
            };
            axios.post('https://icaf-tool.herokuapp.com/researcher/add', newResearcher).then(() => {
                alert("Registered successfully!!!");
                his.push('/user');
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
            <br/>
            <div style={{maxWidth: 500, margin: "auto"}} className="card qwerty">
                <br></br>
                <h2><b>Researcher Registration</b></h2>
                <hr></hr>
                <br></br>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Enter name"
                        type="text"
                        name="name"
                        onChange={nameSetter}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Enter Email"
                        type="text"
                        name="Email"
                        onChange={emailSetter}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Enter Phone"
                        type="text"
                        name="Phone"
                        pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
                        onChange={phoneSetter}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Enter Password"
                        type="text"
                        name="Password"
                        onChange={passwordSetter}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Enter Password"
                        type="text"
                        name="Password"
                        onChange={cPasswordSetter}
                        required
                    />
                </div>
                <h5>Attach your Research Paper</h5>
                <label className={"mylabel"}>
                    <input type="file" onChange={handleChange}/>
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} seturl={seturl}/>}
                    {file && <div> {file.url}</div>}
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>

    );
};
export default ResearcherReg;
