import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "App.css";
import "bootstrap.min.css";
import MainNav from "./component/navbar/MainNav";
import AdminHome from "./component/admin/AdminHome";
import AdminProfile from "./component/admin/AdminProfile";

const App = () => {
   const [text, setText] = useState("Hello world");

        return (

            <div>
                <MainNav className="App" text={text} setText={setText}>
                </MainNav>
                <Router>

                    <Route path="/admin" component={AdminHome}/>
                    <Route path="/adminProfile" component={AdminProfile}/>
                </Router>
            </div>
        );

}
 export default App;

