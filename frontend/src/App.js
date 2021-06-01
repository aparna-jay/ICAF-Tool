import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "App.css";
import "bootstrap.min.css";
import MainNav from "./component/navbar/MainNav";
import AdminHome from "./component/admin/AdminHome";
import AdminProfile from "./component/admin/AdminProfile";
import Keynotes from "./component/Keynotes/Keynotes";
import AdminRegister from "./component/admin/AdminRegister";
import EditorProfile from "./component/Editor/EditorProfile";

const App = () => {
   const [text, setText] = useState("Hello world");

        return (

            <div>
                <Router>
                <div className="App" />
                <MainNav text={text} setText={setText}>
                </MainNav>

                    <Route path="/admin" component={AdminHome}/>
                    <Route path="/adminProfile" component={AdminProfile}/>
                    <Route path="/keynotes" component={Keynotes}/>
                    <Route path="/adminRegister" component={AdminRegister}/>
                    <Route path="/Editor" component={EditorProfile}/>

                </Router>
            </div>
        );
}
 export default App;

