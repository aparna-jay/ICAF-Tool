import React from "react"
import downloadPapers from "../User/downoadPapers";

const MainNav = () =>{

        return (

   <div className="container">

       {/*<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">*/}
       {/*    <div className="container"><a className="navbar-brand" href="#page-top">Brand</a>*/}
       {/*        <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive"*/}
       {/*                className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive"*/}
       {/*                aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>*/}
       {/*        <div className="collapse navbar-collapse" id="navbarResponsive">*/}
       {/*            <ul className="navbar-nav ms-auto text-uppercase">*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/Home">Home</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="Keynotes">Keynote</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/Conference">Conference</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/admin">Admin</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/reviewer">reviewer</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/Editor">Editor</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/user">User</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/downloadPapers">Download Papers</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/UserProfile">UserProfile</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/WorkshopProfile">WorkshopProfile</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/AttendeeProfile">AttendeeProfile</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/Keynotes-profile">Keynotes Profile</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/ConferenceDashboard">Conference Dashboard</a></li>*/}
       {/*                <li className="nav-item"><a className="nav-link" href="/KeynoteDashboard">Keynote Dashboard</a></li>*/}
       {/*            </ul>*/}
       {/*        </div>*/}
       {/*    </div>*/}
       {/*</nav>*/}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="list">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="Keynotes">Keynote</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Conference">Conference</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Workshops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" id="author">for authors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" id="contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/admin">Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/reviewer">reviewer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Editor">Editor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/user">User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/downloadPapers">Download Papers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/UserProfile">UserProfile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/WorkshopProfile">WorkshopProfile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/AttendeeProfile">AttendeeProfile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Keynotes-profile">Keynotes Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/ConferenceDashboard">Conference Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/KeynoteDashboard">Keynote Dashboard</a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" />
                            <button className="btn btn-outline-success" type="submit" id="btn">Search</button>
                    </form>
                </div>
            </div>
        </nav>
</div>
        );

}
export default  MainNav;
