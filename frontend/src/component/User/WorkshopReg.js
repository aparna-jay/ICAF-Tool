import React, {useState, useEffect} from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";

const WorkshopReg = () => {
    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        Email:"",
        Phone:"",
        Password:"",
        Status:"",
        image: "",
    });
    const handleChange = (name) => (e) => {
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value });
    };
    const handleEmail = (Email) => (e) => {
        const value = Email === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [Email]: value });
    };
    const handlePhone = (Phone) => (e) => {
        const value = Phone === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [Phone]: value });
    };
    const handlePassword = (Password) => (e) => {
        const value = Password === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [Password]: value });
    };
    const handleStatus = (Status) => (e) => {
        const value = Status === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [Status]: value });
    };
    const handleSubmit = async () => {
        try {
            let formData = new FormData();
            formData.append("image", data.image);
            formData.append("name", data.name);
            formData.append("Email", data.Email);
            formData.append("Phone", data.Phone);
            formData.append("Password", data.Password);
            formData.append("Status", data.Status);


            const res = await fetch(`http://localhost:8070/workshop`, {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                setData({ name: "",Email: "",Phone: "",Password: "",Status: "", image: "" });
                history.replace("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter name"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange("name")}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Email"
                    type="text"
                    name="Email"
                    value={data.Email}
                    onChange={handleEmail("Email")}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Phone"
                    type="text"
                    name="Phone"
                    value={data.Phone}
                    onChange={handlePhone("Phone")}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Password"
                    type="text"
                    name="Password"
                    value={data.Password}
                    onChange={handlePassword("Password")}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Status"
                    type="text"
                    name="Status"
                    value={data.Status}
                    onChange={handleStatus("Status")}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleChange("image")}
                />
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default WorkshopReg;