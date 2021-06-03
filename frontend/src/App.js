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
import ManageAdmins from "./component/admin/ManageAdmins";
import ManageReviewers from "./component/admin/ManageReviewers";
import ManageEditors from "./component/admin/ManageEditors";

const App = () => {
   const [text, setText] = useState("Hello world");
   const[adminId, setAdminId] = useState('60b0ea663a50a542d8e0fae0');
   const[reviewerId, setReviewerId] = useState('60b1cd482605f1120c24915b');
        return (

            <div>
                <Router>
                <div className="App" />
                <MainNav text={text} setText={setText}>
                </MainNav>

                    <Route path="/admin" render={props => <AdminHome/>} />
                    <Route path="/adminProfile" render={props => <AdminProfile/> }/>
                    <Route path="/keynotes" component={Keynotes}/>
                    <Route path="/adminRegister" component={AdminRegister}/>
                    <Route path="/test" component={getAdmin}></Route>
                    <Route path="/reviewer" component={Reviewerhome}/>
                    <Route path="/ReviewerRegister" component={ReviewerRegister}/>
                    <Route path="/ReviewerUpdate" component={ReviewerUpdate}/>
                    <Route path="/Editor" component={EditorProfile}/>
                    <Route path="/ManageAdmins"render={props => <ManageAdmins setAdminId={setAdminId} adminId={adminId}/>}/>
                    <Route path="/ManageReviewers"render={props => <ManageReviewers setAdminId={setAdminId} adminId={adminId}/>}/>
                    <Route path="/ManageEditors"render={props => <ManageEditors setAdminId={setAdminId} adminId={adminId}/>}/>

                </Router>
            </div>
        );
}
 export default App;

