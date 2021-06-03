import React from "react"

const MainNav = ({text}, {setText}) =>{

        return (

   <div >

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
                            <a className="nav-link active" aria-current="page" href="#">Workshops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" id="author">for authors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" id="contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/admin">Admin</a>
                    </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/user">User</a>
                        </li>


                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" />
                            <button className="btn btn-outline-success" type="submit" id="btn">Search</button>
                    </form>
<h1>{text}</h1>
                </div>
            </div>
        </nav>
</div>
        );

}
export default  MainNav;
