import React, {useState, useEffect} from "react"
import axios from "axios";
import '../../styles/Researcher/carou.css';

const UserMainReg=()=>{


    return(
        <div>

         <div class="carousel slide" data-bs-ride="carousel" id="carousel-1">

             <div class="carousel-inner">
                <div class="carousel-item active">
                     <div class="bg-light border rounded border-light pulse animated hero-technology carousel-hero jumbotron py-5 px-4">
                         <h1 class="hero-title">User Registration</h1>

                    <a class="btn btn-primary hero-button plat" role="button" href="/Researcher" >&nbsp; &nbsp; &nbsp;Sign-Up As Researcher&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</a><br/><br/>
                    <a class="btn btn-primary hero-button plat" role="button" href="Attendee" >&nbsp; &nbsp; &nbsp; &nbsp;Sign-Up As&nbsp; Attendee&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</a><br/><br/>
                     <a class="btn btn-primary hero-button plat" role="button" href="/Workshop" >Sign-Up As Workshop Presenter</a><br/><br/>

                     <a className="btn btn-primary hero-button plat" role="button" href="/Payment">Payments</a>

         </div>
             </div>
                 </div>
         </div>
    </div>
    );
}

export default UserMainReg;