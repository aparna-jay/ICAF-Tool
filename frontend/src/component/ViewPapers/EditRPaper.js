import React,{ useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditRPaper = ({ match }) => {
    console.log( match.params.id);

    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(()=>{
        function getResearcher(){
            axios.get(`http://localhost:8070/researcher/get/${match.params.id}`).then((res)=>{

                setData(res.data);
                // setName(res.data.name);
                console.log(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getResearcher();
    },[]);


    const[status , setStatus] = useState('');

    const statusSetter = (e) => {
        setStatus(e.target.value);
    }


    const onSubmit = () => {
        const newResearcher= {
            Status: status,
        };
        history.push('/allResearchPapers')
        axios.put(`http://localhost:8070/researcher/updateOneStatus/${match.params.id}`, newResearcher).then(() =>{
            alert("Updated successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder={data.Status}
                    onChange={statusSetter}
                />
            </div>
            <button className="btn btn-primary d-block w-100 regButton" type="submit"
                    onClick={onSubmit}>Approve
            </button>
            <button className="btn btn-primary d-block w-100 regButton" type="submit"
                    onClick={onSubmit}>Reject
            </button>
            <div className="text-center">
                <button className="btn btn-primary"
                        onClick={onSubmit}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditRPaper;
