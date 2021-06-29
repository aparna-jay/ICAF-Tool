import React,{ useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditWorkShopStatus = ({ match }) => {
    console.log( match.params.id);

    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(()=>{
        function getResearcher(){
            axios.get(`http://localhost:8070/workshop/get/${match.params.id}`).then((res)=>{

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


    const onSubmit = (status) => {
        const newResearcher= {
            Status: status,
        };
        history.push('/WorkShopHome')
        axios.put(`http://localhost:8070/workshop/updateOneStatus/${match.params.id}`, newResearcher).then(() =>{
            alert("Updated successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <br/><br/><br/><br/>
            <lable> STATUS</lable><br/>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder={data.Status}
                    onChange={statusSetter}
                />
            </div>
            <br/>
            <button className="btn btn-primary d-block w-100 regButton" type="submit"
                    onClick={()=>onSubmit("Approved")}>Approve
            </button>
            <br />
            <button className="btn btn-danger d-block w-100 regButton" type="submit"
                    onClick={()=>onSubmit("Rejected")}>Reject
            </button>
        </div>
    );
};

export default EditWorkShopStatus;