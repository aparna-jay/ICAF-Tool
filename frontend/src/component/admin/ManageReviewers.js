import React, {useState, useEffect} from "react"
import axios from "axios";
import AdminProfile from "./AdminProfile";
import AdminSideNav from "../navbar/AdminSideNav";

const ManageReviewers = ()=>{
    const[adminId, setReviewerId] = useState('');
    const [Reviewers, setReviewers] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8070/Reviewer/').then((response)=>{
            setReviewers(response.data);
        });
    }, [Reviewers])

    const onEditClick = (id) =>{
        setReviewerId(id);
        console.log(adminId);
    }

    const deleteReviewer = (id) =>{
        axios.delete('http://localhost:8070/Reviewer/delete/' + id).then(()=>{
        }).catch((err)=>{
            alert(err);
        })
    };

    return(
        <div>
            <div className="row">
                <div className="col-md-6 col-xl-2" >
                    <AdminSideNav />
                </div>
                <div className="col-md-6 col-xl-6" >
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                        rel='stylesheet' type='text/css' />

                    <div className="container adminReviewer">
                        <br />
                        <div className="row">
                            <p></p>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="panel panel-default panel-table">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-xs-6">
                                                <h3 className="panel-title">Reviewers</h3>
                                            </div>
                                            <div className="col col-xs-6 text-right">
                                                <a type="button"
                                                        className="btn btn-sm btn-success btn-create" href="/ReviewerRegister">Add
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <table
                                            className="table table-striped table-bordered table-list">
                                            <thead>
                                            <tr>
                                                <th><em className="fa fa-cog"></em></th>
                                                <th className="hidden-xs">Name</th>
                                                <th>Designation</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                            </tr>
                                            </thead>
                                            {
                                                Reviewers.map(reviewer=>(
                                                    <tbody key={reviewer._id}>
                                                    <tr>
                                                        <td key={"adminSettings"} align="center">
                                                            <a className="btn btn-default"><em
                                                                className="fa fa-pencil"  onClick={()=>onEditClick(reviewer._id)} /></a>
                                                            <a className="btn btn-danger"><em
                                                                className="fa fa-trash" onClick={()=>{if(window.confirm("Are you sure you want to delete this reviewer?")){deleteReviewer(reviewer._id)};}}></em></a>
                                                        </td>
                                                        <td key={"reviewer.Name"} className="hidden-xs">{reviewer.Name}</td>
                                                        <td key={reviewer.Designation}>{reviewer.Designation}</td>
                                                        <td key={reviewer.Email}>{reviewer.Email}</td>
                                                        <td key={reviewer.Phone}>{reviewer.Phone}</td>
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
                <div className="col-md-6 col-xl-3" >
                    <AdminProfile adminId={adminId} userType={"Reviewer"}></AdminProfile>
                </div>
            </div>
        </div>
    )
}
export default ManageReviewers;
