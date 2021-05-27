import React, {Component} from "react"
import '../../styles/Admin/sidebar.css'

export default class AdminSideNav extends Component {

    render() {
        return (
            <div>
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Admin Panel</h3>
                        </div>
                        <ul className="list-unstyled components">
                            <li>
                                <a href="/admin">Home</a>
                                <a href="#">Conference Details</a>
                            </li>
                            <li>
                                <a href="/adminProfile">Profile</a>
                            </li>
                        </ul>
                    </nav>
            </div>

    );
    }
    }
