import React, {useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const Reviewerhome = ({loggedUser})=>{

    // console.log(loggedUser);
    // const id = loggedUser
    const [Reviewers , setReviewer] = useState( []);

    const history = useHistory();
    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    //get logged Reviewer
    useEffect(()=>{
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        function getReviewer(){
            axios.get("http://localhost:8070/reviewer/get/"+ loggedInUser).then((res)=>{
                setReviewer(res.data);
                console.log(res.data);
            }).catch((err)=>{
            })
        }
        getReviewer();
    },[]);

    function deleteReviewer(){
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.delete('http://localhost:8070/reviewer/delete/' + loggedInUser).then(()=>{
            localStorage.clear();
            history.push('/login');
        }).catch((err)=>{
            alert(err);
        })
    }


    // console.log(loggedUser);
    // const id = loggedUser;
    // const [Reviewers , SetReviwers] = useState( []);
    //
    //
    // //get all Reviewers
    // useEffect(()=>{
    //     function getReviwers(){
    //         axios.get("http://localhost:8070/reviewer/get/"+id).then((res)=>{
    //             SetReviwers(res.data);
    //             // setName(res.data.name);
    //             console.log(res.data);
    //         }).catch((err)=>{
    //         })
    //     }
    //     getReviwers();
    // },[loggedUser]);


        return(
            <div className={"container"}>
                <button onClick={Logout} className="btn btn-success form-btn btn-del" type="submit">Logout</button><br/>
                <div className={"container "}>

                    <form className={"container bg-danger"}>
                        <br />
                        <div className="row g-2">
                            <div className="col-md">
                                <div className="form-floating">
                                    <label  className="form-control btn-danger" >Full Name</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputGrid"
                                        placeholder=""
                                        value= {Reviewers.Name} />
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating">
                                    <label className="form-control btn-danger">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputGrid"
                                        placeholder=""
                                        value= {Reviewers.Email}/>
                                </div>
                            </div>
                        </div>
                        <div className="row g-2">
                            <div className="col-md">
                                <div className="form-floating">
                                    <label className="form-control btn-danger">Phone Number</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputGrid"
                                        placeholder=""
                                        value= {Reviewers.Phone}/>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating">
                                    <label className="form-control btn-danger">Designation</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputGrid"
                                        placeholder=""
                                        value= {Reviewers.Designation} />
                                </div>
                            </div>
                        </div>
                        <br />
                        <a href={"/ReviewerUpdate"} type="button" className="btn btn-primary btn-lg ">Update Profile</a>


                        <br /><br />
                    </form>
                    <br />
                    <div>
                        <a type="button" className="btn btn-primary btn-lg " href={"/allResearchPapers"} > View review paper</a>
                        <a type="button" className="btn btn-primary btn-lg " href={"/WorkShopHome"} > View Work Shop</a>
                        <button className="btn btn-danger form-btn btn-del " type="reset" onClick={()=>{if(window.confirm("Are you sure you want to delete your Profile?")){deleteReviewer()};}}>Delete Profile</button>
                    </div>
                </div>
            </div>
        );
}
export default Reviewerhome;
