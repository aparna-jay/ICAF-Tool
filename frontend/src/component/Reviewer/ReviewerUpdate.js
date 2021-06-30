import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";


const ReviewerUpdate = ()=>{

    let his = useHistory();

    const [Reviewers , setReviewer] = useState( []);

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
    },[Reviewers]);

    // let his = useHistory();
    //
    // //get spesific users data
    // const id = "60b1cd482605f1120c24915b"
    // const [Reviewers , SetReviwers] = useState( []);
    //
    // //get all Reviewers
    // useEffect(()=>{
    //     function getReviwers(){
    //         axios.get("http://localhost:8070/reviewer/get/"+id).then((res)=>{
    //
    //             SetReviwers(res.data);
    //             // setName(res.data.name);
    //             console.log(res.data);
    //         }).catch((err)=>{
    //             alert(err.message);
    //         })
    //     }
    //     getReviwers();
    // },[]);


    const[Name , setName] = useState('');
    const[Email, setEmail]= useState("");
    const[Phone, setPhone]= useState("");
    const[Designation, setDesignation]= useState("");
    const[Password, setPassword]= useState("");
    const nameSetter = (e) => {
        setName(e.target.value);
    }
    const emailSetter = (e) => {
        setEmail(e.target.value);
    }
    const phoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const passwordSetter = (e) => {
        setPassword(e.target.value);
    }
    const DesignationSetter = (e) => {
        setDesignation(e.target.value);
    }

    const onSubmit = () => {
        const newReviewer= {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password:Password,
            Designation:Designation
        };
        his.push('/reviewer');
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.put('http://localhost:8070/Reviewer/updateOne/'+ loggedInUser , newReviewer).then(() =>{

            alert("Updated successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    return(
        <div>

            <div className="">
                <form className="col-lg-6 card text-left">
                    <br/>
                    <div className="col-md-auto ">
                        <h1 className="text-center">Reviewer Update Form</h1>
                        <br/>
                        <label htmlFor="exampleInputName" className="form-label"><b>Full name</b></label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputFullname"
                            placeholder={Reviewers.Name}
                            onChange={nameSetter}/>
                    </div>
                    <div className="col-md-auto">
                        <label htmlFor="exampleInputDesignation" className="form-label"><b>Designation</b></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={Reviewers.Designation}
                            onChange={DesignationSetter}/>
                    </div>
                    <div className="col-md-auto">
                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                            placeholder={Reviewers.Email}
                            onChange={emailSetter}/>
                    </div>
                    <div className="col-md-auto">
                        <label htmlFor="exampleInputPhone" className="form-label"><b>Phone</b></label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder={Reviewers.Phone}
                            onChange={phoneSetter}/>
                    </div>
                    <div className="col-md-auto">
                        <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
                        <input type="password"
                               className="form-control"
                               id="exampleInputPassword1"
                               placeholder={Reviewers.Password}
                               onChange={passwordSetter}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-warning btn-lg" onClick={onSubmit} ><b>Update changes</b></button>
                    <br/><br/>
                </form>
            </div>

        </div>
    );
}
export default ReviewerUpdate
