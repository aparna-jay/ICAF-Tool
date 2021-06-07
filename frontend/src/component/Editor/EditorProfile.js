import React from 'react'
import '../../styles/Editor/EditorProfile.css'
import img from '../../armaan.jpg'
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";
// import EditorSideNav from "../navbar/EditorSideNav";

const EditorProfile = () =>{
    return(
        <div>
            <div className="editorProfile">
                <div>
                    <div >
                        <div>
                            <ConferenceDashboardSideNav/>
                        </div>
                <section></section>
                <main className="page">
                    <section className="clean-block about-us">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-4">
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
                                                        <p className="labels">Armaan Malik</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Designation</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">Editor</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Email</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">armaan@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Phone</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">0112345678</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Password</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">ar123$</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <a className="btn btn-success" role="button" href="#">
                                                            <i className="fas fa-pencil-alt"></i>&nbsp;Submit</a></div>
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
        </div>
    );
}
export default EditorProfile;