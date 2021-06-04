import React, {useState, useEffect} from "react"
import axios from "axios";
import '../../styles/Attendee/Contact-Form-Clean.css'

const AttendeeReg=()=>{
    return(
        <div>
            <div className="contact-clean">
                <form method="post">
                    <h2 className="text-center">Attendee Registration</h2>
                    <div className="col"><label>Enter Name</label><input className="form-control" type="text"/></div>
                    <div className="form-group">
                        <div className="col"><label>Enter Email</label><input className="form-control" type="text"/>
                        </div>
                        <div className="col"><label>Enter Phone</label><input className="form-control" type="text"/>
                        </div>
                        <div className="col"><label>Enter Password</label><input className="form-control" type="text"/>
                        </div>
                        <div className="col"><label>Enter Amount(RS.)</label><input className="form-control"
                                                                                    type="text"/></div>
                        <button className="btn btn-primary" type="submit">&nbsp;Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AttendeeReg;