import React from "react"
import '../../styles/Admin/table.css'
import AdminSideNav from "../navbar/AdminSideNav";
import img from "../../img.jpg";

const AdminHome = () => {
    return (
        <div>
            <section>
                <div className="row">
                    <div className="col-md-6 col-xl-4" >
                        <AdminSideNav />
                    </div>
                    <div className="col-md-6 col-xl-3" >
                        <center><h1>Welcome Admin</h1></center>
                        <br />
                    <main className="page">
                        <section className="clean-block about-us">
                            <div className="row justify-content-center">

                                <div className="card clean-card text-center">
                                    <img className="card-img-top w-100 d-block" src={img}/>
                                    <div className="card-body info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Name</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <input className="labels" ></input>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Email</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels"></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Phone</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels"></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <a className="btn btn-success" role="button" href="#">
                                                            <i className="fas fa-pencil-alt"></i>&nbsp;Update</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </main>
                    </div>
                </div>
            </section>
            <br /> <br />
        </div>
    );
}
export default AdminHome;