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
import getAdmin from "./component/admin/getAdmin";

const App = () => {
   const [text, setText] = useState("Hello world");
   const [adminId, setAdminId] = useState ('Hiii');
 //  console.log(adminId);
        return (

            <div>
                <Router>
                <div className="App" />
                <MainNav text={text} setText={setText}>
                </MainNav>

                    <Route path="/admin" render={props => <AdminHome setAdminId={setAdminId} />} />
                    <Route path="/adminProfile" render={props => <AdminProfile AdminId={adminId} /> }/>
                    <Route path="/keynotes" component={Keynotes}/>
                    <Route path="/adminRegister" component={AdminRegister}/>
                    <Route path="/test" component={getAdmin}></Route>
                    <Route path="/reviewer" component={Reviewerhome}/>
                    <Route path="/ReviewerRegister" component={ReviewerRegister}/>
                    <Route path="/ReviewerUpdate" component={ReviewerUpdate}/>
                    <Route path="/Editor" component={EditorProfile}/>

                </Router>
            </div>
        );
}
 export default App;

