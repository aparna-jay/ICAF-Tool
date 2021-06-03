import React, {useState, useEffect} from "react"
import axios from "axios";
import '../../styles/Admin/table.css'
import AdminSideNav from "../navbar/AdminSideNav";

const AdminHome = ({setAdminId}) => {
    const [Reviewers , setReviewers] = useState([]);
    const [Users , setUsers] = useState([]);
    const [Editors, setEditors] = useState([]);
    const [Admins, setAdmins] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8070/Reviewer/').then((response)=>{
            setReviewers(response.data);
        });
        axios.get('http://localhost:8070/user/').then((response)=>{
            setUsers(response.data);
        });
        axios.get('http://localhost:8070/KeyNoteSpeakers/').then((response)=>{
            setEditors(response.data);
        });
        axios.get('http://localhost:8070/admin/').then((response)=>{
            setAdmins(response.data);
        });
    }, [])


    const deleteUser = (id) =>{
        axios.delete('http://localhost:8070/user/delete/' + id).then(()=>{
            alert("User deleted!!!");
        }).catch((err)=>{
            alert(err);
        })
    };

    const setAdmin = (id) =>{
        setAdminId(id);
    }

    const deleteAdmin = (id) =>{
        axios.delete('http://localhost:8070/admin/delete/' + id).then(()=>{
            alert("Admin deleted!!!");
        }).catch((err)=>{
            alert(err);
        })
    };

        return (
            <div >
                <section>
                    <div className="row">
                        <div className="col-md-6 col-xl-3" >
                            <AdminSideNav />
                        </div>
                    <div className="container">

                            <div className="col-md-6 col-xl-9">
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
                                                                <th className="hidden-xs">ID</th>
                                                                <th>Name</th>
                                                                <th>Email</th>
                                                            </tr>
                                                            </thead>
                                                                {
                                                                    Reviewers.map(reviewer=>(
                                                            <tbody key={reviewer._id}>
                                                            <tr>
                                                                <td key={"reviewerSettings"} align="center">
                                                                    <a className="btn btn-default"><em
                                                                        className="fa fa-pencil"></em></a>
                                                                    <a className="btn btn-danger"><em
                                                                        className="fa fa-trash"></em></a>
                                                                </td>
                                                                <td key={reviewer.Name} className="hidden-xs">{reviewer.Name}</td>
                                                                <td key={"reviewerName"}>{reviewer.Name}</td>
                                                                <td key={"reviewerEmail"}>{reviewer.Email}</td>
                                                            </tr>
                                                            </tbody>
                                                                ))}
                                                        </table>

                                                    </div>
                                                    <br />

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                <br/> <br/>

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
                                                                    <th>Organization</th>
                                                                    <th>Designation</th>
                                                                </tr>
                                                                </thead>
                                                                {
                                                                    Editors.map(editor=>(

                                                                <tbody key={editor._id}>
                                                                <tr>
                                                                    <td key={"editorSettings"} align="center">
                                                                        <a className="btn btn-default"><em
                                                                            className="fa fa-pencil"></em></a>
                                                                        <a className="btn btn-danger"><em
                                                                            className="fa fa-trash"></em></a>
                                                                    </td>
                                                                    <td key={editor.Name} className="hidden-xs">{editor.Name}</td>
                                                                    <td key={editor.Organization}>{editor.Organization}</td>
                                                                    <td key={editor.Designation}>{editor.Designation}</td>
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
                                <br/> <br/>
                                <link
                                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                                            rel='stylesheet' type='text/css' />

                                            <div className="container adminUser">
                                                <br />
                                                <div className="row">

                                                    <p></p>


                                                    <div className="col-md-10 col-md-offset-1">

                                                        <div className="panel panel-default panel-table">
                                                            <div className="panel-heading">
                                                                <div className="row">
                                                                    <div className="col col-xs-6">
                                                                        <h3 className="panel-title">Users</h3>
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
                                                                        <th className="hidden-xs">ID</th>
                                                                        <th>Name</th>
                                                                        <th>Email</th>
                                                                    </tr>
                                                                    </thead>
                                                                    {
                                                                        Users.map(user=>(
                                                                    <tbody key={user._id}>
                                                                    <tr>
                                                                        <td key={"userSettings"} align="center">
                                                                            <a className="btn btn-default"><em
                                                                                className="fa fa-pencil"></em></a>
                                                                            <a className="btn btn-danger"><em
                                                                                className="fa fa-trash" onClick={()=>deleteUser(user._id)}></em></a>
                                                                        </td>
                                                                        <td key={user.Phone} className="hidden-xs">{user.Name}</td>
                                                                        <td key={user.Name}>{user.Name}</td>
                                                                        <td key={user.Email}>{user.Email}</td>
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

                                <br/> <br/>
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
                                                            <h3 className="panel-title">Admins</h3>
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
                                                            <th className="hidden-xs">ID</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                        </tr>
                                                        </thead>
                                                        {
                                                            Admins.map(admin=>(
                                                                <tbody key={admin._id}>
                                                                <tr>
                                                                    <td key={"adminSettings"} align="center">
                                                                        <a className="btn btn-default"><em
                                                                            className="fa fa-pencil" onClick={()=>setAdmin(admin._id)}></em></a>
                                                                        <a className="btn btn-danger"><em
                                                                            className="fa fa-trash" onClick={()=>deleteAdmin(admin._id)}></em></a>
                                                                    </td>
                                                                    <td key={"admin.Phone"} className="hidden-xs">{admin.Name}</td>
                                                                    <td key={admin.Name}>{admin.Name}</td>
                                                                    <td key={admin.Email}>{admin.Email}</td>
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

                            </div>
                        </div>
                    </div>
                </section>
                <br /> <br />
            </div>
        );

}

export default AdminHome;
