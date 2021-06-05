import React,{ useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const EditRPaper = ({ match }) => {
    console.log( match.params.id);
    const history = useHistory();
    const [data, setData] = useState({
        Status: "",
        image: "",
    });
    useEffect(() => {
        fetch(`http://localhost:8070/researcher/${match.params.id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const handleChange = (name) => (e) => {
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            let formData = new FormData();
            formData.append("image", data.image);
            formData.append("Status", data.Status);

            const res = await fetch(`http://localhost:8070/researcher/${match.params.id}`, {
                method: "PUT",
                body: formData,
            });
            if (res.ok) {
                setData({ Status: "", image: "" });
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
                    type="text"
                    name="name"
                    value={data.Status}
                    onChange={handleChange("Status")}
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
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditRPaper;
