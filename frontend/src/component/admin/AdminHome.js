import React, {Component} from "react"
import '../../styles/Admin/table.css'
import AdminSideNav from "../navbar/AdminSideNav";

export default class AdminHome extends Component {

    render() {
        return (
            <div >
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-3" >
                                  <AdminSideNav />
                            </div>
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
                                                            <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <a className="btn btn-default"><em
                                                                        className="fa fa-pencil"></em></a>
                                                                    <a className="btn btn-danger"><em
                                                                        className="fa fa-trash"></em></a>
                                                                </td>
                                                                <td className="hidden-xs">1</td>
                                                                <td>John Doe</td>
                                                                <td>johndoe@example.com</td>
                                                            </tr>
                                                            </tbody>
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
                                                                    <th className="hidden-xs">ID</th>
                                                                    <th>Name</th>
                                                                    <th>Email</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td align="center">
                                                                        <a className="btn btn-default"><em
                                                                            className="fa fa-pencil"></em></a>
                                                                        <a className="btn btn-danger"><em
                                                                            className="fa fa-trash"></em></a>
                                                                    </td>
                                                                    <td className="hidden-xs">1</td>
                                                                    <td>John Doe</td>
                                                                    <td>johndoe@example.com</td>
                                                                </tr>
                                                                </tbody>
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
                                                                    <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            <a className="btn btn-default"><em
                                                                                className="fa fa-pencil"></em></a>
                                                                            <a className="btn btn-danger"><em
                                                                                className="fa fa-trash"></em></a>
                                                                        </td>
                                                                        <td className="hidden-xs">1</td>
                                                                        <td>John Doe</td>
                                                                        <td>johndoe@example.com</td>
                                                                    </tr>
                                                                    </tbody>
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
            </div>
        );
    }
}
