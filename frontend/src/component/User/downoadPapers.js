import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import  "../../App.css"


const downloadPapers = ()=>{

    return (
        <div className="">

            <a href={"https://firebasestorage.googleapis.com/v0/b/ninja-firegram-a5001.appspot.com/o/research-paper-format-template.doc?alt=media&token=d35fe31c-0c6e-4acb-ade4-58f90faf9ee0"}
               className={"btn btn-danger btn-sm"}>
                Download Research Paper Template form here
            </a>
            <br></br>

            <a href={"https://firebasestorage.googleapis.com/v0/b/ninja-firegram-a5001.appspot.com/o/conference_paper_template.doc?alt=media&token=550fafe0-ba09-4b8b-b4ae-c5612e97afa0"}
               className={"btn btn-danger btn-sm"}>
                Download Conference Paper Template form here
            </a>

            <br></br>

            <a href={"https://firebasestorage.googleapis.com/v0/b/ninja-firegram-a5001.appspot.com/o/workshop_powerpoint_template.pptx?alt=media&token=b1d9062d-acd4-4253-a06e-655c2c8b8765"}
               className={"btn btn-danger btn-sm"}>
                Download Workshop Powerpoint Template form here
            </a>
        </div>
    );
}
export default downloadPapers;