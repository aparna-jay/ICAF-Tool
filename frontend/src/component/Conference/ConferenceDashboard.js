import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ConferenceDashboard = () => {

    const [Conference, setConference] = useState([]);

    const deleteConference = async (Title) => {
        await axios.delete(`http://localhost:8070/Conference/delete/${Title}`);
        alert("Conference deleted!!");
        getConference();
    };

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

    useEffect(() => {
        getConference();
    }, []);

    return(
        <div>
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

                                                    <Link class="btn btn-primary" role="button" to={`/gets/${Conference.Title}`}>
                                                        View
                                                    </Link>
                                                    <Link class="btn btn-warning" role="button" to={`/updates/${Conference.Title}`}>
                                                        Update
                                                    </Link>
                                                    <Link class="btn btn-danger" onClick={() => deleteConference(Conference.Title)} role="button">
                                                        Delete
                                                    </Link>
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </table>
                                    <button className="btn btn-back">
                                        <Link to="/adds">+ Back to Conference details</Link>
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