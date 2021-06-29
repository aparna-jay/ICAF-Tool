import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import '../../../frontend/src/styles/Admin/adminRegister.css'
import AdminSideNav from "../../../frontend/src/component/navbar/AdminSideNav";

const ReviewerRegister = ()=>{
    const history = useHistory();

    const[Name , setName] = useState("");
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
        history.push('/ManageReviewers')
        axios.post('http://localhost:8070/Reviewer/add' , newReviewer).then(() =>{
            alert("Registered successfully!!!");
        }).catch((err) =>{
            alert(err);
        })
    }

    return(
        // <div className="col-9">
        //
        //     <form className ="bg-danger">
        //         <br />
        //         <div className="col-md-auto">
        //             <h1 className="text-light bg-dark">Reviewer Registry Form</h1>
        //             <br />
        //             <label htmlFor="exampleInputName" className="form-label">Ful name</label>
        //             <input
        //                 type="text"
        //                 className="form-control"
        //                 id="exampleInputFullname"
        //                 onChange={nameSetter} />
        //         </div>
        //         <div className="col-md-auto">
        //             <label htmlFor="exampleInputDesignation" className="form-label">Designation</label>
        //             <input
        //                 type="text"
        //                 className="form-control"
        //                 onChange={DesignationSetter} />
        //         </div>
        //         <div className="col-md-auto">
        //             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        //             <input
        //                 type="email"
        //                 className="form-control"
        //                 id="exampleInputEmail1"
        //                 aria-describedby="emailHelp"
        //                 onChange={emailSetter}/>
        //         </div>
        //         <div className="col-md-auto">
        //             <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
        //             <input
        //                 type="number"
        //                 className="form-control"
        //                 id="exampleInputPhone"
        //                 onChange={phoneSetter} />
        //         </div>
        //         <div className="col-md-auto">
        //             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        //             <input
        //                 type="password"
        //                 className="form-control"
        //                 id="exampleInputPassword1"
        //                 onChange={passwordSetter}/>
        //         </div>
        //         <br />
        //         <button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}>Submit</button>
        //         <br /><br />
        //     </form>
        // </div>
        <div>

            <section className="register-photo">
                <div className="row">
                    <div className="col-md-6 col-xl-1" >
                        <AdminSideNav />
                    </div>
                    <div className="col-md-6 col-xl-9">

                        <div className="form-container">
                            <div className="image-holder image"></div>
                            <form>
                                <h2 className="text-center"><strong>Add Reviewer</strong></h2>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Name" onChange={nameSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Designation" onChange={DesignationSetter}/></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="email" placeholder="Email" onChange={emailSetter}  /></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="text" placeholder="Phone" onChange={phoneSetter} /></div>
                                <div className="form-group mb-3">
                                    <input className="form-control" type="password" placeholder="Password" onChange={passwordSetter}/></div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default ReviewerRegister;