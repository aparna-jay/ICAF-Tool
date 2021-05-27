import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "App.css";
import "bootstrap.min.css";
import MainNav from "./component/navbar/MainNav";
import AdminHome from "./component/admin/AdminHome";
import AdminProfile from "./component/admin/AdminProfile";
import Keynotes from "./component/Keynotes/Keynotes";

export default class App extends Component{
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                    <MainNav/>
                    <Route path="/admin" component={AdminHome}/>
                    <Route path="/adminProfile" component={AdminProfile}/>
                    <Route path="/keynotes" component={Keynotes}/>
                    </div>
                </Router>
            </div>
        );
    }
}

