import React, {useState, useEffect} from "react"
import axios from "axios";
import AdminProfile from "./AdminProfile";
import AdminSideNav from "../navbar/AdminSideNav";

const ManageEditors = ({setAdminId, adminId})=>{



    const [Editors, setEditors] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8070/editor/').then((response)=>{
            setEditors(response.data);
        });
    }, [])

    // const onEditClick = (id) =>{
    //     setAdminId(id);
    // }

    const deleteEditor = (id) =>{
        axios.delete('http://localhost:8070/editor/delete/' + id).then(()=>{
            confirm("Do you want to delete this user?");
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

                    <div className="container adminEditor">
                        <br />
                        <div className="row">
                            <p></p>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="panel panel-default panel-table">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-xs-6">
                                                <h3 className="panel-title">Editors</h3>
                                            </div>
                                            <div className="col col-xs-6 text-right">
                                                <button type="button"
                                                        className="btn btn-sm btn-primary btn-create">Add
                                                </button>
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
                                                Editors.map(editor=>(
                                                    <tbody key={editor._id}>
                                                    <tr>
                                                        <td key={"adminSettings"} align="center">
                                                            <a className="btn btn-default"><em
                                                                className="fa fa-pencil" to="/adminProfile" onClick={()=>onEditClick(editor._id)}></em></a>
                                                            <a className="btn btn-danger"><em
                                                                className="fa fa-trash" onClick={()=>deleteAdmin(editor._id)}></em></a>
                                                        </td>
                                                        <td key={"editor.Name"} className="hidden-xs">{editor.Name}</td>
                                                        <td key={editor.Designation}>{editor.Designation}</td>
                                                        <td key={editor.Email}>{editor.Email}</td>
                                                        <td key={editor.Phone}>{editor.Phone}</td>
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
                    <AdminProfile adminId={adminId}></AdminProfile>
                </div>
            </div>
        </div>
    )
}
export default ManageEditors;
