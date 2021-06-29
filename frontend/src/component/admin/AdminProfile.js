import React,{useState, useEffect} from "react"
import img from "../../img/user.png"
import axios from "axios";

const AdminProfile = ({adminId, userType}) => {

    console.log(adminId);
    const [admin, setAdmin] = useState([]);
    const[phone, setPhone]= useState("");
    const[email, setEmail]= useState("");
    const[name, setName]= useState("");

    const phoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const emailSetter = (e) => {
        setEmail(e.target.value);
    }
    const nameSetter = (e) => {
        setName(e.target.value);
    }

    useEffect(()=> {
        if(userType === "Admin") {
            axios.get('https://icaf-tool.herokuapp.com/admin/get/' + adminId).then((response) => {
                setAdmin(response.data);
            });
        }
        if(userType === "Editor") {
            axios.get('https://icaf-tool.herokuapp.com/editor/get/' + adminId).then((response) => {
                setAdmin(response.data.editor);
            });
        }
        if(userType === "Reviewer") {
            axios.get('https://icaf-tool.herokuapp.com/Reviewer/get/' + adminId).then((response) => {
                setAdmin(response.data);
            });
        }
        if(userType === "Researcher") {
            axios.get('https://icaf-tool.herokuapp.com/researcher/get/' + adminId).then((response) => {
                setAdmin(response.data);
                console.log(response.data);
            });
        }
        if(userType === "WorkshopPresenter") {
            axios.get('https://icaf-tool.herokuapp.com/workshop/get/' + adminId).then((response) => {
                setAdmin(response.data);
                console.log(adminId)
            });
        }
        if(userType === "Attendee") {
            axios.get('https://icaf-tool.herokuapp.com/attendee/get/' + adminId).then((response) => {
                setAdmin(response.data);
                console.log(admin)
            });
        }

    },[adminId])

    const UpdateProfile = (id)=>{
        if(userType === "Admin") {
            const newAdmin= {
                Name: name,
                Phone:phone,
                Email:email
            };
            axios.put('https://icaf-tool.herokuapp.com/admin/updateOne/'+ id , newAdmin).then(() =>{
                alert("Updated successfully!!!")
            }).catch((err) =>{
            });
        }
        if(userType === "Editor") {
            const newEditor= {
                Name: name,
                Phone:phone,
                Email:email
            };
            axios.put('https://icaf-tool.herokuapp.com/editor/updateOne/'+ admin._id , newEditor).then(() =>{
                alert("Updated successfully!!!")
            }).catch((err) =>{
            });
        }
        if(userType === "Reviewer") {
            const newReviewer= {
                Name: name,
                Phone:phone,
                Email:email
            };
            axios.put('https://icaf-tool.herokuapp.com/Reviewer/updateOne/'+ admin._id , newReviewer).then(() =>{
                alert("Updated successfully!!!")
            }).catch((err) =>{
            });
        }
        if(userType === "Researcher") {
            const newResearcher= {
                Name: name,
                Phone:phone,
                Email:email
            };
            axios.put('https://icaf-tool.herokuapp.com/researcher/updateOne/'+ admin._id , newResearcher).then(() =>{
                alert("Updated successfully!!!")
            }).catch((err) =>{
            });
        }
        if(userType === "WorkshopPresenter") {
            const newWorkshopPresenter= {
                Name: name,
                Phone:phone,
                Email:email
            };
            axios.put('https://icaf-tool.herokuapp.com/workshop/updateOne/'+ admin._id , newWorkshopPresenter).then(() =>{
                alert("Updated successfully!!!")
            }).catch((err) =>{
            });
        }
        if(userType === "Attendee") {
            const newAttendee= {
                Name: name,
                Phone:phone,
                Email:email
            };
            axios.put('https://icaf-tool.herokuapp.com/attendee/updateOne/'+ admin._id , newAttendee).then(() =>{
                alert("Updated successfully!!!")
            }).catch((err) =>{
            });
        }

    }

        return (
            <div >
                <main className="page">
                    <section className="clean-block about-us">
                        <div className="row justify-content-center">
                                <div className=" adminProfileCard card clean-card text-center">
                                    <img className="card-img-top d-block" src={img}/>
                                    <div className="card-body info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Name</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <input className="form-control" type="text" placeholder={admin.Name} onChange={nameSetter}></input>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Email</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <input className="form-control" type="text" placeholder={admin.Email} onChange={emailSetter} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="labels"><strong>Phone</strong></p>
                                                    </div>
                                                    <div className="col">
                                                        <input className="form-control" type="text" placeholder={admin.Phone} onChange={phoneSetter}/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-warning d-block w-100 regButton" type="submit"
                                                                    onClick={()=>UpdateProfile(admin._id)}>Update Profile
                                                            </button>
                                                        </div></div>
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
