import React from 'react';


const ConferenceDashboard = () => {
    return(
        <div>
            <div>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-6 text-end"><a className="btn btn-primary" role="button"><i
                            className="fa fa-plus"></i>&nbsp;Agregar colaborador</a></div>
                    </div>
                    <div className="card" id="TableSorterCard">
                        <div className="card-header py-3">
                            <div className="row table-topper align-items-center">
                                <div className="col-12 col-sm-5 col-md-6 text-start">
                                    <p className="text-primary m-0 fw-bold">Colaboradores</p>
                                </div>
                                <div className="col-12 col-sm-7 col-md-6 text-end">
                                    <button className="btn btn-primary btn-sm reset" type="button">Borrar Filtros
                                    </button>
                                    <button className="btn btn-warning btn-sm" id="zoom_in" type="button"
                                            zoomclick="ChangeZoomLevel(-10);">
                                        <i className="fa fa-search-plus"></i>
                                    </button>
                                    <button className="btn btn-warning btn-sm" id="zoom_out" type="button"
                                            zoomclick="ChangeZoomLevel(-10);">
                                        <i className="fa fa-search-minus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table table-striped table tablesorter" id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Puesto</th>
                                            <th className="text-center">Departamento</th>
                                            <th className="text-center filter-false sorter-false">Acciones</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td>Ana</td>
                                            <td>Diseñador</td>
                                            <td>Diseño</td>
                                            <td className="text-center">
                                                <a className="btn btn-primary" role="button">
                                                    <i className="far fa-eye"></i>
                                                </a>
                                                <a className="btn btn-success" role="button">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                                <a className="btn btn-danger" role="button"
                                                ><i className="fas fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Fer<br/>
                                            </td>
                                            <td>Desarrollador</td>
                                            <td>Development</td>
                                            <td className="text-center"><a className="btn btn-primary" role="button">
                                                <i className="far fa-eye"></i>
                                            </a>
                                                <a className="btn btn-success" role="button">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                                <a className="btn btn-danger" role="button"><i className="fas fa-trash">
                                                </i>
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