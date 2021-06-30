import React from "react"

const MainNav = () => {
    return (
        <div>
            <nav className=" navbar-expand-lg navbar-light bg-light abcd">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="list">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="Keynotes">Keynotes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/WorkShopAll">Workshops</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/ResearcherAll">Research Areas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/downloadPapers">Download Papers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/user">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default MainNav;
