import React from 'react'
import "../../styles/Navbar/EditorSideNav.css"

const EditorSideNav =() =>{
    return (
        <div>

            <div id="sidebarEd" className="activeEd active">

                <ul>
                    <h4>Editor Profile</h4>
                    <li><a className="here" href="#"></a></li>
                    <li><a href="#">Lorem 1</a></li>
                    <li><a href="#">Lorem 2</a></li>
                    <li><a href="#">Lorem 3</a></li>
                    <li><a href="#">Lorem 4</a></li>

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
export default EditorSideNav;
