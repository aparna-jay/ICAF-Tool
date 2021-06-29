import React, {useState, useEffect} from "react"
import axios from "axios";
import AdminProfile from "./AdminProfile";
import AdminSideNav from "../navbar/AdminSideNav";

const ManageEditors = () => {

    const [adminId, setEditorId] = useState('');
    const [Editors, setEditors] = useState([]);

    useEffect(() => {
        axios.get('https://icaf-tool.herokuapp.com/editor/').then((response) => {
            setEditors(response.data);
        });
    }, [Editors])

    const onEditClick = (id) => {
        setEditorId(id);
    }

    const deleteEditor = (id) => {
        axios.delete('https://icaf-tool.herokuapp.com/editor/delete/' + id).then(() => {
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
                    <div className="container adminEditor">
                        <br/>
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
                                                <a type="button"
                                                   className="btn btn-sm btn-success btn-create" href="/EditorRegister">Add
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
                                                Editors.map(editor => (
                                                    <tbody key={editor._id}>
                                                    <tr>
                                                        <td key={"adminSettings"} align="center">
                                                            <a className="btn btn-default"><em
                                                                className="fa fa-pencil"
                                                                onClick={() => onEditClick(editor._id)}></em></a>
                                                            <a className="btn btn-danger"><em
                                                                className="fa fa-trash" onClick={() => {
                                                                if (window.confirm("Are you sure you want to delete this editor?")) {
                                                                    deleteEditor(editor._id)
                                                                }
                                                                ;
                                                            }}></em></a>
                                                        </td>
                                                        <td key={"editor.Name"} className="hidden-xs">{editor.Name}</td>
                                                        <td key={editor.Designation}>{editor.Designation}</td>
                                                        <td key={editor.Email}>{editor.Email}</td>
                                                        <td key={editor.Phone}>{editor.Phone}</td>
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
                    <AdminProfile adminId={adminId} userType={"Editor"}></AdminProfile>
                </div>
            </div>
        </div>
    );
}
export default ManageEditors;
