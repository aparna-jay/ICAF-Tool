import React from 'react'
import "../../styles/Navbar/EditorSideNav.css"

const EditorSideNav =() =>{
    return (
        <div>

            <div id="sidebar" className="active">

                <ul>
                    <h4>Editor Profile</h4>
                    <li><a className="here" href="#"></a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Dashboard</a></li>

                </ul>
            </div>


        </div>
    );
}
export default EditorSideNav;