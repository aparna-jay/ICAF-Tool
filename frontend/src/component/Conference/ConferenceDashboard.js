import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";


const ConferenceDashboard = () => {
    const {ConferenceId} = useParams();

    const [Conference, setConference] = useState([]);

    function getConference() {
        axios
            .get("http://localhost:8070/Conference/")
            .then((res) => {
                console.log(res.data);
                setConference(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    const deleteConference = (id) =>{
        axios.delete('http://localhost:8070/Conference/delete/' + id).then(()=>{
            confirm("Do you want to delete this Conference?");
            alert("Conference deleted successfully!!");
        }).catch((err)=>{
            alert(err);
        })
    };


    useEffect(() => {
        getConference();
    }, [Conference]);

    return(
        <div>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                rel='stylesheet' type='text/css' />
            <div>
                <div className="container-fluid">
                    <div className="row">


                    </div>
                    <div className="card" id="TableSorterCard">

                        <div className="row">
                            <div className="col-12">

                                <div className="table-responsive">

                                    <table className="table table-striped table tablesorter" id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Title</th>
                                            <th className="text-center">Start Date</th>
                                            <th className="text-center">End Date</th>
                                            <th className="text-center">Organization</th>
                                            <th className="text-center">Description</th>
                                            <th className="text-center">Phone</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center filter-false sorter-false">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {Conference.map((Conference) => {
                                            return (
                                                <tr>
                                                    <td>{Conference.Title}</td>
                                                    <td>{Conference.Start_date}</td>
                                                    <td>{Conference.End_Date}</td>
                                                    <td>{Conference.Organization}</td>
                                                    <td>{Conference.Description}</td>
                                                    <td>{Conference.Phone}</td>
                                                    <td>{Conference.Email}</td>

                                                    <Link class="btn btn-primary" role="button" to={`/get/${Conference._id}`}>
                                                        <em className="fa fa-eye" id="icon"></em>
                                                    </Link>
                                                    <Link class="btn btn-success" role="button" to={`/update/${Conference._id}`}>
                                                        <em className="fa fa-edit" id="icon"></em>
                                                    </Link>
                                                    <a className="btn btn-danger" id="icon"><em
                                                        className="fa fa-trash"
                                                        onClick={()=>{if(window.confirm("Are you sure you want to delete this Editor?")){deleteConference(Conference._id)};}} /></a>
                                                    {/*<Link class="btn btn-danger" onClick={() => deleteConference(Conference._id)} role="button">*/}
                                                    {/*    <em className="fa fa-edit"></em>*/}
                                                    {/*</Link>*/}
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary">
                                        <Link to="/Conference/add">+ Back to Conference details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConferenceDashboard;
