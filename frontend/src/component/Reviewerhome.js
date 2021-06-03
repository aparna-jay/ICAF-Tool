import React, {useState,useEffect} from "react";
import axios from "axios";

const Reviewerhome = ()=>{
 const id = "60b1cd482605f1120c24915b"
    const [Reviewers , SetReviwers] = useState( []);


    //get all Reviewers
    useEffect(()=>{
        function getReviwers(){
            axios.get("http://localhost:8070/reviewer/get/"+id).then((res)=>{

                SetReviwers(res.data);
                // setName(res.data.name);
                console.log(res.data);
            }).catch((err)=>{
               alert(err.message);
            })
        }
        getReviwers();
    },[]);


        return(

            <div>

                <div className={"container "}>

                    <form className={"container bg-danger"}>
                        <br />

                        <div className="row g-2">
                            <div className="col-md">
                                <div className="form-floating">
                                    <label htmlFor="floatingInputGrid">Full Name</label>
                                    <input type="email" className="form-control" id="floatingInputGrid"
                                           placeholder="" value= {Reviewers.Name} />
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-floating">
                                    <label htmlFor="floatingInputGrid">Email address</label>
                                    <input type="email" className="form-control" id="floatingInputGrid"
                                           placeholder=""  value= {Reviewers.Email}/>

                                </div>
                            </div>
                        </div>
                        <div className="row g-2">
                            <div className="col-md">
                                <div className="form-floating">
                                    <label htmlFor="floatingInputGrid">Phone Number</label>
                                    <input type="email" className="form-control" id="floatingInputGrid"
                                           placeholder=""  value= {Reviewers.Phone}/>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating">
                                    <label htmlFor="floatingInputGrid">Designation</label>
                                    <input type="email" className="form-control" id="floatingInputGrid"
                                           placeholder="" value= {Reviewers.Designation} />

                                </div>
                            </div>
                        </div>
                        <br />

                        <a href={"/ReviewerUpdate"} type="button" className="btn btn-primary btn-lg ">Update Profile</a>
                        <br /><br />

                    </form>
                    <br />
                    <div>
                        <button type="button" className="btn btn-primary btn-lg "> View review paper</button>
                        <button type="button" className="btn btn-primary btn-lg "> View Work Shop</button>
                    </div>
                </div>


            </div>
        );
}
export default Reviewerhome;
