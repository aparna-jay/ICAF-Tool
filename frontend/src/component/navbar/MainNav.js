import React from "react"

const MainNav = () =>{

        return (

   <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="list">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
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
