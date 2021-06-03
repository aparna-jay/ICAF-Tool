import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "App.css";
import "bootstrap.min.css";
import MainNav from "./component/navbar/MainNav";
import AdminHome from "./component/admin/AdminHome";
import AdminProfile from "./component/admin/AdminProfile";
import Reviewerhome from "./component/Reviewerhome";
import Keynotes from "./component/Keynotes/Keynotes";
import AdminRegister from "./component/admin/AdminRegister";
import ReviewerRegister from "./component/ReviewerRegister";
import ReviewerUpdate from "./component/ReviewerUpdate";

import EditorProfile from "./component/Editor/EditorProfile";
import UserMainReg from "./component/User/UserMainReg";
import ResearcherReg from "./component/User/ResearcherReg";
import 'regenerator-runtime/runtime'
import WorkshopReg from "./component/User/WorkshopReg";

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
                    <Route path="/reviewer" component={Reviewerhome}/>
                    <Route path="/ReviewerRegister" component={ReviewerRegister}/>
                    <Route path="/ReviewerUpdate" component={ReviewerUpdate}/>
                    <Route path="/Editor" component={EditorProfile}/>
                    <Route path="/user" component={UserMainReg}/>
                    <Route path="/Researcher" component={ResearcherReg}/>
                    <Route path="/Workshop" component={WorkshopReg}/>

                </Router>
            </div>
        );
}
 export default App;

