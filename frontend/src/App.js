import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "App.css";
// import "../src/styles/Researcher/index.css"
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
import getAdmin from "./component/admin/getAdmin";
import ManageAdmins from "./component/admin/ManageAdmins";
import ManageReviewers from "./component/admin/ManageReviewers";
import ManageEditors from "./component/admin/ManageEditors";
import AdminLogin from "./component/Login/AdminLogin";
import Payment from "./component/user/Payment"
import ReserchPapersHome from "./component/ViewPapers/ReserchPapersHome";
import EditRPaper from "./component/ViewPapers/EditRPaper";

import Conference from "./component/Conference/Conference";
import Keyprofile from "./component/Keynotes/Keynotes-profile";
import ConferenceDashboard from "./component/Conference/ConferenceDashboard";
import AttendeeReg from "./component/User/AttendeeReg";
import ResearcherPro from "./component/User/ResearcherPro";
import ResearcherUpdate from "./component/User/ResearcherUpdate";
import ResearcherStatus from "./component/User/ResearcherStatus";
import WorkshopPro from "./component/User/WorkshopPro";
import AttendeePro from "./component/User/AttendeePro";
import AttendeeUpdate from "./component/User/AttendeeUpdate";
import WorkshopUpdate from "./component/User/WorkshopUpdate";


const App = () => {
   const [text, setText] = useState("Hello world");
   const[adminId, setAdminId] = useState('60b0ea663a50a542d8e0fae0');
   const[reviewerId, setReviewerId] = useState('60b1cd482605f1120c24915b');
    const [selectedImg, setSelectedImg] = useState(null);
   const[loggedUser, setLoggedUser]  = useState('')
        return (

            <div>
                <Router>
                <div className="App" />
                <MainNav text={text} setText={setText}>
                </MainNav>

                    <Route path="/admin" render={props => <AdminHome loggedUser={loggedUser}/>} />
                    <Route path="/adminProfile" render={props => <AdminProfile /> }/>
                    <Route path="/keynotes" component={Keynotes}/>
                    <Route path="/Keynotes-profile" component={Keyprofile} />
                    <Route path="/login" render={props => <AdminLogin loggedUser={loggedUser} setLoggedUser={setLoggedUser} />}/>
                    <Route path="/Conference" component={Conference}/>
                    <Route path="/adminRegister" component={AdminRegister}/>
                    <Route path="/test" component={getAdmin}></Route>
                    <Route path="/reviewer" render={props => <Reviewerhome loggedUser={loggedUser}/>} />
                    <Route path="/ReviewerRegister" component={ReviewerRegister}/>
                    <Route path="/ReviewerUpdate" component={ReviewerUpdate}/>
                    <Route path="/Editor" component={EditorProfile}/>
                    <Route path="/user" component={UserMainReg}/>
                    <Route path="/Researcher" component={ResearcherReg}/>
                    <Route path="/Workshop" component={WorkshopReg}/>
                    <Route path="/ManageAdmins"render={props => <ManageAdmins setAdminId={setAdminId} adminId={adminId}/>}/>
                    <Route path="/ManageReviewers"render={props => <ManageReviewers setAdminId={setAdminId} adminId={adminId}/>}/>
                    <Route path="/ManageEditors"render={props => <ManageEditors setAdminId={setAdminId} adminId={adminId}/>}/>
                    <Route path="/Payment" component={Payment}/>
                    <Route path="/allResearchPapers" component={ReserchPapersHome}/>
                    <Route path="/editRP/:id" component={EditRPaper}/>

                    <Route path="/Attendee" component={AttendeeReg}/>
                    <Route path="/UserProfile" component={ResearcherPro}/>
                    <Route path="/ResearcherUpdate" component={ResearcherUpdate}/>
                    <Route path="/ResearcherStatus" component={ResearcherStatus}/>
                    <Route path="/WorkshopProfile" component={WorkshopPro}/>
                    <Route path="/AttendeeProfile" component={AttendeePro}/>
                    <Route path="/AttendeeUpdate" component={AttendeeUpdate}/>
                    <Route path="/WorkshopUpdate" component={WorkshopUpdate}/>

                </Router>
            </div>
        );
}
 export default App;

