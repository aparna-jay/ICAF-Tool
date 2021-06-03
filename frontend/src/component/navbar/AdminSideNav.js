import React  from "react"
import "../../styles/Admin/sidebar.css"

const AdminSideNav = () => {
        return (
            <div>
                    <nav id="sidebar" >
                        <div className="sidebar-header">
                            <h3>Admin Panel</h3>
                        </div>
                        <ul className="list-unstyled components">
                            <li>
                                <a href="/admin">Home</a>
                                <a href="/ManageAdmins">Manage Admins</a>
                                <a href="/ManageReviewers">Manage Reviewers</a>
                                <a href="/ManageEditors">Manage Editors</a>

                                <a href="#">Conference Details</a>
                            </li>
                            <li>
                                <a href="/adminProfile">Profile</a>
                            </li>
                            <li>
                                <a href="/adminRegister">Register</a>
                            </li>
                        </ul>
                    </nav>
            </div>

    );

    }
export default AdminSideNav;