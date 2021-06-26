import React from 'react';


const ConferenceDashboard = () => {
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
                                            <th className="text-center">Number</th>
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
                                        <tr className="tab">
                                            <td>Ana</td>
                                            <td>Diseñador</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td className="text-center">
                                                <a className="btn btn-primary" role="button">
                                                    <i className="far fa-eye">View</i>
                                                </a>
                                                <a className="btn btn-success" role="button">
                                                    <i className="fas fa-pencil-alt">Update</i>
                                                </a>
                                                <a className="btn btn-danger" role="button"
                                                ><i className="fas fa-trash">Delete</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Fer<br/></td>
                                            <td>Desarrollador</td>
                                            <td>Development</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td>Diseño</td>
                                            <td className="text-center"><a className="btn btn-primary" role="button">
                                                <i className="far fa-eye">View</i>
                                            </a>
                                                <a className="btn btn-success" role="button">
                                                    <i className="fas fa-pencil-alt">Update</i>
                                                </a>
                                                <a className="btn btn-danger" role="button">
                                                    <i className="fas fa-trash">Delete</i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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