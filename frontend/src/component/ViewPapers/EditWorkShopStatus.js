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


    const onSubmit = () => {
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
            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder={data.Status}
                    onChange={statusSetter}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    name="image"
                    // onChange={handleChange("image")}
                />
            </div>
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

export default EditWorkShopStatus;