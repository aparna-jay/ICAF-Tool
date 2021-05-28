import React from "react"
import img from "../../img.jpg"
import AdminSideNav from "../navbar/AdminSideNav";


const AdminProfile = () => {

        return (
            <div >

                <div className="row">
                    <div className="col-md-6 col-xl-3" >
                        <AdminSideNav />
                    </div>
                    <div className="col-md-6 col-xl-9">
                <section></section>
                <main className="page" >
                    <section className="clean-block about-us">
                        <div className="row" >
                            <div className="col-md-12"
                                 ><a
                                className="anone" href="profile.html"></a></div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="text-info">User's Name</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center" >
                            <div className="col-sm-6 col-lg-4" >
                                <div className="card clean-card text-center"><img className="card-img-top w-100 d-block"
                                                                                  src={img} />
                                    <div className="card-body info">
                                        <div className="row" >
                                            <div className="col-md-12" >
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Name</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">usuarioPrueba</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels">Phone number</p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">6622971893</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Email</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">México</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12"><a className="btn btn-info"
                                                                                  role="button" href="editProfile.html"><i
                                                        className="fas fa-pencil-alt"></i>&nbsp;Edit</a></div>
                                                </div>
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
            </div>
        );

}
export default AdminProfile;
