import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "App.css";
import "../src/styles/Researcher/index.css"
import "bootstrap.min.css";
import Home from "./component/Home/Home";
import MainNav from "./component/navbar/MainNav";
import AdminHome from "./component/admin/AdminHome";
import AdminProfile from "./component/admin/AdminProfile";
import Reviewerhome from "./component/Reviewerhome";
import Keynotes from "./component/Keynotes/Keynotes";
import AdminRegister from "./component/admin/AdminRegister";
import ReviewerRegister from "./component/ReviewerRegister";
import ReviewerUpdate from "./component/ReviewerUpdate";

import EditorProfile from "./component/Editor/EditorProfile";
import EditorRegister from "./component/Editor/EditorRegister";
import EditorUpdate from "./component/Editor/EditorUpdate";
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
import ViewOneConference from "./component/Conference/ViewOneConference";
import UpdateConference from "./component/Conference/UpdateConference";
import AttendeeReg from "./component/User/AttendeeReg";
import ResearcherPro from "./component/User/ResearcherPro";
import ResearcherUpdate from "./component/User/ResearcherUpdate";
import ResearcherStatus from "./component/User/ResearcherStatus";
import WorkshopPro from "./component/User/WorkshopPro";
import AttendeePro from "./component/User/AttendeePro";
import AttendeeUpdate from "./component/User/AttendeeUpdate";
import WorkshopUpdate from "./component/User/WorkshopUpdate";
import WorkShopHome from "./component/ViewPapers/WorkShopHome";
import EditWorkShopStatus from "./component/ViewPapers/EditWorkShopStatus";
import WorkshopStatus from "./component/User/WorkshopStatus";
import ManageConferences from "./component/admin/ManageConferences";
import ManageUsers from "./component/admin/ManageUsers";
import ViewConference from "./component/admin/ViewConference";
import downloadPapers from "./component/User/downoadPapers";
import Footer from "./component/Footer";
import WorkshopAll from "./component/WorkshopAll";



const App = () => {

   const[reviewerId, setReviewerId] = useState('60b1cd482605f1120c24915b');
   const [selectedImg, setSelectedImg] = useState(null);
   const[conId, setConId] = useState('');
        return (

            <div>
                <Router>
                <div className="App" />
                <MainNav />
                    <Route path="/Home" component={Home}/>
                    <Route path="/admin" render={props => <AdminHome/>} />
                    <Route path="/ManageConference" render={props => <ManageConferences  setConId={setConId} />} />
                    <Route path="/viewConf" render={props =><ViewConference conId={conId} />}/>
                    <Route path="/ManageUsers" component={ManageUsers}/>
                    <Route path="/adminProfile" render={props => <AdminProfile /> }/>
                    <Route path="/keynotes" component={Keynotes}/>
                    <Route path="/Keynotes-profile" component={Keyprofile} />
                    <Route path="/login" render={props => <AdminLogin/>}/>
                    <Route path="/Conference" component={Conference}/>
                    <Route path="/ConferenceDashboard" component={ConferenceDashboard}/>
                    <Route path="/get/:id" component={ViewOneConference}/>
                    <Route path="/update/:id" component={UpdateConference}/>
                    <Route path="/adminRegister" component={AdminRegister}/>
                    <Route path="/test" component={getAdmin}></Route>
                    <Route path="/reviewer" render={props => <Reviewerhome/>} />
                    <Route path="/ReviewerRegister" component={ReviewerRegister}/>
                    <Route path="/ReviewerUpdate" component={ReviewerUpdate}/>
                    <Route path="/EditorProf" render={props => <EditorRegister />} />
                    <Route path="/Editor" component={EditorProfile}/>
                    <Route path="/EditorUpdate" component={EditorUpdate}/>
                    <Route path="/EditorRegister" component={EditorRegister}/>
                    <Route path="/user" component={UserMainReg}/>
                    <Route path="/Researcher" component={ResearcherReg}/>
                    <Route path="/Workshop" component={WorkshopReg}/>
                    <Route path="/ManageAdmins"render={props => <ManageAdmins />}/>
                    <Route path="/ManageReviewers"render={props => <ManageReviewers />}/>
                    <Route path="/ManageEditors"render={props => <ManageEditors />}/>
                    <Route path="/Payment" component={Payment}/>
                    <Route path="/allResearchPapers" component={ReserchPapersHome}/>
                    <Route path="/WorkShopHome" component={WorkShopHome}/>
                    <Route path="/editRP/:id" component={EditRPaper}/>

                    <Route path="/EditWorkShopStatus/:id" component={EditWorkShopStatus}/>
                    <Route path="/Attendee" component={AttendeeReg}/>
                    <Route path="/UserProfile" render={props => <ResearcherPro />} />
                    <Route path="/ResearcherUpdate" component={ResearcherUpdate}/>
                    <Route path="/ResearcherStatus" component={ResearcherStatus}/>
                    <Route path="/WorkshopProfile" component={WorkshopPro}/>
                    <Route path="/AttendeeProfile" component={AttendeePro}/>
                    <Route path="/AttendeeUpdate" component={AttendeeUpdate}/>
                    <Route path="/WorkshopUpdate" component={WorkshopUpdate}/>
                    <Route path="/WorkshopStatus" component={WorkshopStatus}/>
                    <Route path="/downloadPapers" component={downloadPapers}/>
                    <Route path="/WorkShopAll" component={WorkshopAll}/>

                </Router>

                <Footer />
            </div>
        );
}
 export default App;

