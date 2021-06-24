import React, {useEffect, useState} from "react"
import '../../styles/Admin/table.css'
import AdminSideNav from "../navbar/AdminSideNav";
import img from "../../img/user.png";
import axios from "axios";

const AdminHome = () => {
    const [admin , setAdmin] = useState( []);


    //get logged admin
    useEffect(()=>{
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        function getAdmin(){
            axios.get("http://localhost:8070/admin/get/"+ loggedInUser).then((res)=>{
                setAdmin(res.data);
                console.log(res.data);
            }).catch((err)=>{
            })
        }
        getAdmin();
    },[]);



    return (
        <div>
            <section>
                <div className="row ">
                    <div className="col-md-6 col-xl-4" >
                        <AdminSideNav />
                    </div>
                    <div className="col-md-6 col-xl-3" >
                        <center><h1>Welcome {admin.Name}</h1></center>
                        <br />
                    <main className="page">
                        <section className="clean-block about-us">
                            <div className="row justify-content-center">

                                <div className="card clean-card text-center">
                                    <img className="card-img-top d-block" src={img}/>
                                    <div className="card-body info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Name</strong></p>

                                                        <input className="form-control" type="text" placeholder={admin.Name} />
                                                    </div>

                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Email</strong></p>

                                                        <input className="form-control" type="email" placeholder={admin.Email} />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Phone</strong></p>

                                                        <input className="form-control" type="text" placeholder={admin.Phone} />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <a className="btn btn-success" role="button" href="#">
                                                            <i className="fas fa-pencil-alt"></i>&nbsp;Update</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </main>
                    </div>
                </div>
            </section>
            <br /> <br />
        </div>
    );
}
export default AdminHome;
