import React from 'react'
import "../../styles/Navbar/ConferenceDashboardSideNav.css"

const ConferenceDashboardSideNav =() =>{
    return (
        <div>

            <div id="sidebarEd" className="activeEd active">

                <ul>
                    <h4>Editor Profile</h4>
                    <li><a className="here" href="#"></a></li>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Editor">Editor</a></li>
                    <li><a href="Conference">Conference</a></li>
                    <li><a href="Keynotes">Keynotes</a></li>
                    <li><a href="ConferenceDashboard">Conference Dashboard</a></li>
                    <li><a href="Keynotes-profile">Keynotes Profile</a></li>
                    <li><a href="Home">Log Out</a></li>
                    <p className="text-centerEd social-linksEd">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i></p>
                </ul>
            </div>


        </div>
    );
}
export default ConferenceDashboardSideNav;
