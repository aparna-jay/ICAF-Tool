import React,{useState, useEffect} from "react"
import img from "../../img.jpg"
import axios from "axios";

const AdminProfile = ({adminId}) => {
    console.log(adminId);
    const [admin, setAdmin] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8070/admin/get/' + adminId).then((response) => {
            setAdmin(response.data);
            console.log(admin)
        });
    },[adminId])
        return (
            <div >

                <main className="page">
                    <section className="clean-block about-us">
                        <div className="row justify-content-center">

                                <div className="card clean-card text-center">
                                    <img className="card-img-top w-100 d-block" src={img}/>
                                    <div className="card-body info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Name</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <input className="labels" placeholder={admin.Name}></input>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Email</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">{admin.Email}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Phone</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="labels">{admin.Phone}</p>
                                                    </div>
                                                </div>
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
        );

}
export default AdminProfile;
