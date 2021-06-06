import React from 'react';
import '../../styles/ConferenceDashboard/Conference.css';
import C from "./ConferenceDashboard";
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";

const Conference = () => {
    return(
        <div>
        <div className="ConferenceDashboard">
            <div>
                <ConferenceDashboardSideNav/>
            </div>
            <section></section>
            <div>
                <section className="login-dark">

                    <form method="post">
                        <h2 className="visually-hidden">Conference Details</h2>
                        <div className="illustration">
                            <i className="icon ion-ios-locked-outline"></i>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label" htmlFor="name-input-field">Name </label>
                            <input className="form-control" type="email" name="email" placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label" htmlFor="name-input-field">Start Date </label>
                            <input className="form-control" type="email" name="email" placeholder="Start Date"/>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label" htmlFor="name-input-field">End Date </label>
                            <input className="form-control" type="email" name="email" placeholder="End Date"/>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label" htmlFor="name-input-field">Organization </label>
                            <input className="form-control" type="email" name="email" placeholder="Organization"/>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label" htmlFor="name-input-field">Description </label>
                            <input className="form-control" type="email" name="email" placeholder="Description"/>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label" htmlFor="name-input-field">Phone </label>
                            <input className="form-control" type="email" name="email" placeholder="Phone"/>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label" htmlFor="name-input-field">Email </label>
                            <input className="form-control" type="email" name="email" placeholder="Email"/>
                        </div>

                        <div className="mb-3">
                            <a href="ConferenceDashboard.js">
                            <button className="btn btn-primary d-block w-100" type="submit">Submit</button>
                            </a>
                        </div>
                    </form>
                </section>
            </div>
        </div>
        </div>
    );
}

export default Conference;