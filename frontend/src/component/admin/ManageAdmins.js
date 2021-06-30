import React, {useState, useEffect} from "react"
import axios from "axios";
import AdminProfile from "./AdminProfile";
import AdminSideNav from "../navbar/AdminSideNav";

const ManageAdmins = () => {

    const [adminId, setAdminId] = useState('');

    const [Admins, setAdmins] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8070/admin/').then((response) => {
            setAdmins(response.data);
        });
    }, [Admins])

    const onEditClick = (id) => {
        setAdminId(id);
        console.log(adminId);
    }

    const deleteAdmin = (id) => {
        axios.delete('http://localhost:8070/admin/delete/' + id).then(() => {
        }).catch((err) => {
            alert(err);
        })
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-6 col-xl-2">
                    <AdminSideNav/>
                </div>
                <div className="col-md-6 col-xl-6">
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                        rel='stylesheet' type='text/css'/>

                    <div className="container adminAdmin">
                        <br/>
                        <div className="row">
                            <p></p>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="panel panel-default panel-table">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-xs-6">
                                                <h3 className="panel-title">Admins</h3>
                                            </div>
                                            <div className="col col-xs-6 text-right">
                                                <a type="button"
                                                   className="btn btn-sm btn-success btn-create" href="/AdminRegister">Add
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <table
                                            className="table table-striped table-bordered table-list">
                                            <thead>
                                            <tr>
                                                <th><em className="fa fa-cog"/></th>
                                                <th className="hidden-xs">Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                            </tr>
                                            </thead>
                                            {
                                                Admins.map(admin => (
                                                    <tbody key={admin._id}>
                                                    <tr>
                                                        <td key={"adminSettings"} align="center">
                                                            <a className="btn btn-default"><em
                                                                className="fa fa-pencil"
                                                                onClick={() => onEditClick(admin._id)}/></a>
                                                            <a className="btn btn-danger"><em
                                                                className="fa fa-trash" onClick={() => {
                                                                if (window.confirm("Are you sure you want to delete this admin?")) {
                                                                    deleteAdmin(admin._id)
                                                                }
                                                                ;
                                                            }}/></a>
                                                        </td>
                                                        <td key={"admin.Name"} className="hidden-xs">{admin.Name}</td>
                                                        <td key={admin.Email}>{admin.Email}</td>
                                                        <td key={admin.Phone}>{admin.Phone}</td>
                                                    </tr>
                                                    </tbody>
                                                ))}
                                        </table>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                </div>
                <div className="col-md-6 col-xl-3">
                    <AdminProfile adminId={adminId} userType={"Admin"}></AdminProfile>
                </div>
            </div>
        </div>
    )
}
export default ManageAdmins;
