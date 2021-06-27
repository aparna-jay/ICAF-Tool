import React, {useEffect, useState} from "react"
import AdminSideNav from "../navbar/AdminSideNav";
import axios from "axios";
import AdminProfile from "./AdminProfile";

const ManageConferences = ()=>{

    const[conId, setConId] = useState('');
    const[conferences, setConferences] = useState([]);

    useEffect( ()=>{
        axios.get('http://localhost:8070/Conference/').then((response)=>{
            setConferences(response.data);
        });
    }, [])


    return(
        <div>
            <div className="row">
                <div className="col-md-6 col-xl-2" >
                    <AdminSideNav />
                </div>
                <div className="col-md-9 col-xl-9" >
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                        rel='stylesheet' type='text/css' />

                    <div className="container adminConference">
                        <br />
                        <div className="row">
                            <p></p>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="panel panel-default panel-table">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-xs-6">
                                                <h3 className="panel-title">Conferences</h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <table
                                            className="table table-striped table-bordered table-list">
                                            <thead>
                                            <tr>
                                                <th className="hidden-xs">Title</th>
                                                <th>Start date</th>
                                                <th>End date</th>
                                                <th>Organization</th>
                                                <th>Description</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th><em className="fa fa-cog"></em></th>
                                            </tr>
                                            </thead>
                                            {
                                                conferences.map(conference=>(
                                                    <tbody key={conference._id}>
                                                    <tr>
                                                        <td key={"conference.Title"} className="hidden-xs">{conference.Title}</td>
                                                        <td key={conference.Start_date}>{conference.Start_date}</td>
                                                        <td key={conference.End_Date}>{conference.End_Date}</td>
                                                        <td key={conference.Organization}>{conference.Organization}</td>
                                                        <td key={conference.Description}>{conference.Description}</td>
                                                        <td key={conference.Phone}>{conference.Phone}</td>
                                                        <td key={conference.Email}>{conference.Email}</td>
                                                        <td><button>Approve</button></td>
                                                    </tr>
                                                    </tbody>
                                                ))}
                                        </table>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>

            </div>
        </div>
    )
}
export default ManageConferences;
