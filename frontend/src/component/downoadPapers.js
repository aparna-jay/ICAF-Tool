import React from "react"
import '../styles/Researcher/carou.css';

const downloadPapers = () => {

    return (
        <div>
            <div class="carousel slide" data-bs-ride="carousel" id="carousel-1">
                <div class="carousel-inner ci">
                    <div class="carousel-item active">
                        <div
                            class="bg-white border rounded border-light pulse animated hero-technology carousel-hero jumbotron py-5 px-4">
                            <p></p><br></br>
                            <a href={"https://firebasestorage.googleapis.com/v0/b/ninja-firegram-a5001.appspot.com/o/research-paper-format-template.doc?alt=media&token=d35fe31c-0c6e-4acb-ade4-58f90faf9ee0"}
                               className={"btn btn-danger btn-sm"}>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Download Research Paper Template form
                                here&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</a><br/><br/>
                            <a href={"https://firebasestorage.googleapis.com/v0/b/ninja-firegram-a5001.appspot.com/o/conference_paper_template.doc?alt=media&token=550fafe0-ba09-4b8b-b4ae-c5612e97afa0"}
                               className={"btn btn-danger btn-sm"}>
                                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Download Conference Paper Template form
                                here&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</a><br/><br/>
                            <a href={"https://firebasestorage.googleapis.com/v0/b/ninja-firegram-a5001.appspot.com/o/workshop_powerpoint_template.pptx?alt=media&token=b1d9062d-acd4-4253-a06e-655c2c8b8765"}
                               className={"btn btn-danger btn-sm"}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download Workshop Powerpoint Template form
                                here&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default downloadPapers;
