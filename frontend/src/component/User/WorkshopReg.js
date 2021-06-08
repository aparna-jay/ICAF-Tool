import React, {useState, useEffect} from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";

import ProgressBar from '../../component/comps/ProgressBar';
import useStorage from "../../hooks/useStorage";
import '../../styles/Researcher/index.css'

const WorkshopReg = () => {



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

    //

    const[Name , setName] = useState("");
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
    const[Password, setPassword]= useState("");
    const[Status, setStatus]= useState("Pending");

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
    const onSubmit = () => {
        const newResearcher= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
            Status:Status,
            avatar:url
        };
        axios.post('http://localhost:8070/workshop/add' , newResearcher).then(() =>{
            alert("Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

//
//     const history = useHistory();
//     const [data, setData] = useState({
//         name: "sasa",
//         Email:"sasa",
//         Phone:"12365",
//         Password:"sasa",
//         Status:"sasa",
//         url:url,
//     });
    // const handleChange = (name) => (e) => {
    //     const value = name === "image" ? e.target.files[0] : e.target.value;
    //     setData({ ...data, [name]: value });
    // };
    // const handleEmail = (Email) => (e) => {
    //     const value = Email === "image" ? e.target.files[0] : e.target.value;
    //     setData({ ...data, [Email]: value });
    // };
    // const handlePhone = (Phone) => (e) => {
    //     const value = Phone === "image" ? e.target.files[0] : e.target.value;
    //     setData({ ...data, [Phone]: value });
    // };
    // const handlePassword = (Password) => (e) => {
    //     const value = Password === "image" ? e.target.files[0] : e.target.value;
    //     setData({ ...data, [Password]: value });
    // };
    // const handleStatus = (Status) => (e) => {
    //     const value = Status === "image" ? e.target.files[0] : e.target.value;
    //     setData({ ...data, [Status]: value });
    // };
    // const handleSubmit = async () => {
    //     try {
    //         let formData = new FormData();
    //         formData.append("image", data.url);
    //         formData.append("name", data.name);
    //         formData.append("Email", data.Email);
    //         formData.append("Phone", data.Phone);
    //         formData.append("Password", data.Password);
    //         formData.append("Status", data.Status);
    //
    //
    //         const res = await fetch(`http://localhost:8070/researcher/add`, {
    //             method: "POST",
    //             body: formData,
    //         });
    //         if (res.ok) {
    //             setData({ name: "",Email: "",Phone: "",Password: "",Status: "", image: "" });
    //             history.replace("/");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    console.log(url);

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter name"
                    type="text"
                    name="name"
                    // value={data.name}
                    onChange={nameSetter}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Email"
                    type="text"
                    name="Email"
                    // value={data.Email}
                    onChange={emailSetter}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Phone"
                    type="text"
                    name="Phone"
                    // value={data.Phone}
                    onChange={phoneSetter}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Password"
                    type="text"
                    name="Password"
                    // value={data.Password}
                    onChange={passwordSetter}
                />
            </div>

            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} seturl={seturl}/> }
                {file && <div> {file.url}</div>}
            </div>



            <div className="text-center">
                <button className="btn btn-primary" type = "submit" onClick={onSubmit}>
                    Submit
                </button>
            </div>

        </div>

    );
};

export default WorkshopReg;