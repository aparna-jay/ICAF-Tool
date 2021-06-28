import React, {useState, useEffect} from "react"
import axios from "axios";
import AdminProfile from "./AdminProfile";
import AdminSideNav from "../navbar/AdminSideNav";

const ManageUsers = ()=>{

    const[userId, setUserID] = useState('');
    const[userType, setUserType] = useState('');

    const [Researcher, setResearcher] = useState([]);
    const [WorkshopPresenter, setWorkshopPresenter] = useState([]);
    const [Attendee, setAttendee] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8070/researcher/').then((response)=>{
            setResearcher(response.data);
        });
        axios.get('http://localhost:8070/workshop/').then((response)=>{
            setWorkshopPresenter(response.data);
        });
        axios.get('http://localhost:8070/attendee/').then((response)=>{
            setAttendee(response.data);
        });
    }, [])

    const onEditClick = (id, userType) =>{
        setUserID(id);
        setUserType(userType);
        console.log(userId);
    }

    const deleteUser = (id,userType) =>{
        if(userType === "Researcher") {
            axios.delete('http://localhost:8070/researcher/delete/' + id).then(() => {
            }).catch((err) => {
                alert(err);
            })
        }
        else if(userType === "WorkShopPresenter") {
            axios.delete('http://localhost:8070/workshop/delete/' + id).then(() => {
            }).catch((err) => {
                alert(err);
            })
        }
        else if(userType === "Attendee") {
            axios.delete('http://localhost:8070/sttendee/delete/' + id).then(() => {
            }).catch((err) => {
                alert(err);
            })
        }

    };
    return(
        <div>
            <div className="row">
                <div className="col-md-6 col-xl-2 position-sticky" >
                    <AdminSideNav />
                </div>
                <div className="col-md-6 col-xl-6 " >
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                        rel='stylesheet' type='text/css' />

                    <div className="container adminAdmin">
                        <br />
                        <div className="row">
                            <p></p>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="panel panel-default panel-table">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-xs-6">
                                                <h3 className="panel-title">Researchers</h3>
                                            </div>
                                            <div className="col col-xs-6 text-right">

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
                                                <th>Email</th>
                                                <th>Phone</th>
                                            </tr>
                                            </thead>
                                            {
                                                Researcher.map(researcher=>(
                                                    <tbody key={researcher._id}>
                                                    <tr>
                                                        <td key={"adminSettings"} align="center">
                                                            <a className="btn btn-default"><em
                                                                className="fa fa-pencil"  onClick={()=>onEditClick(researcher._id, "Researcher")}></em></a>
                                                            <a className="btn btn-danger"><em
                                                                className="fa fa-trash" onClick={()=>{if(window.confirm("Are you sure you want to delete this admin?")){deleteUser(researcher._id, "Researcher")};}}></em></a>
                                                        </td>
                                                        <td key={"admin.Name"} className="hidden-xs">{researcher.Name}</td>
                                                        <td key={researcher.Email}>{researcher.Email}</td>
                                                        <td key={researcher.Phone}>{researcher.Phone}</td>
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
                <div className="col-md-6 col-xl-3 " >
                    <AdminProfile adminId={userId} userType={userType}></AdminProfile>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xl-2 " >

                </div>
                <div className="col-md-6 col-xl-6" >
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                        rel='stylesheet' type='text/css' />

                    <div className="container adminAdmin">
                        <br />
                        <div className="row">
                            <p></p>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="panel panel-default panel-table">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-xs-6">
                                                <h3 className="panel-title">Workshop Presenters</h3>
                                            </div>
                                            <div className="col col-xs-6 text-right">

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
                                                <th>Email</th>
                                                <th>Phone</th>
                                            </tr>
                                            </thead>
                                            {
                                                WorkshopPresenter.map(workshopPresenter=>(
                                                    <tbody key={workshopPresenter._id}>
                                                    <tr>
                                                        <td key={"adminSettings"} align="center">
                                                            <a className="btn btn-default"><em
                                                                className="fa fa-pencil"  onClick={()=>onEditClick(workshopPresenter._id, "WorkshopPresenter")}></em></a>
                                                            <a className="btn btn-danger"><em
                                                                className="fa fa-trash" onClick={()=>{if(window.confirm("Are you sure you want to delete this admin?")){deleteUser(workshopPresenter._id, "WorkShopPresenter")};}}></em></a>
                                                        </td>
                                                        <td key={"admin.Name"} className="hidden-xs">{workshopPresenter.Name}</td>
                                                        <td key={workshopPresenter.Email}>{workshopPresenter.Email}</td>
                                                        <td key={workshopPresenter.Phone}>{workshopPresenter.Phone}</td>
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
            <div className="row">
                <div className="col-md-6 col-xl-2" >

                </div>
                <div className="col-md-6 col-xl-6" >
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                        rel='stylesheet' type='text/css' />

                    <div className="container adminAdmin">
                        <br />
                        <div className="row">
                            <p></p>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="panel panel-default panel-table">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-xs-6">
                                                <h3 className="panel-title">Attendees</h3>
                                            </div>
                                            <div className="col col-xs-6 text-right">

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
                                                <th>Email</th>
                                                <th>Phone</th>
                                            </tr>
                                            </thead>
                                            {
                                                Attendee.map(attendee=>(
                                                    <tbody key={attendee._id}>
                                                    <tr>
                                                        <td key={"adminSettings"} align="center">
                                                            <a className="btn btn-default"><em
                                                                className="fa fa-pencil"  onClick={()=>onEditClick(attendee._id, "Attendee")}></em></a>
                                                            <a className="btn btn-danger"><em
                                                                className="fa fa-trash" onClick={()=>{if(window.confirm("Are you sure you want to delete this admin?")){deleteUser(attendee._id, "Attendee")};}}></em></a>
                                                        </td>
                                                        <td key={"admin.Name"} className="hidden-xs">{attendee.Name}</td>
                                                        <td key={attendee.Email}>{attendee.Email}</td>
                                                        <td key={attendee.Phone}>{attendee.Phone}</td>
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
export default ManageUsers;
