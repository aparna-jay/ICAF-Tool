import React, {useState, useEffect} from 'react'
import '../../styles/Editor/EditorProfile.css'
import ConferenceDashboardSideNav from "../navbar/ConferenceDashboardSideNav";
import axios from "axios";
import {useHistory} from "react-router-dom";

const EditorProfile = () => {

    const [Editor, setEditor] = useState([]);
    const history = useHistory();

    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    //get logged Editor
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);

        function getEditor() {
            axios.get("https://icaf-tool.herokuapp.com/editor/get/" + loggedInUser).then((res) => {
                setEditor(res.data.editor);
                console.log("data")
                console.log(res.data.editor);
            }).catch((err) => {
            })
        }

        getEditor();
    }, []);

    //delete logged Editor
    function deleteEditor() {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.delete('https://icaf-tool.herokuapp.com/editor/delete/' + loggedInUser).then(() => {
            localStorage.clear();
            history.push('/login');
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-2">
                    <div>
                        <ConferenceDashboardSideNav/>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-auto">
                    <section className="frm">
                        <form className="card" id="c">
                            <h2 className="visually-hidden">Editor Profile</h2>
                            <div className="illustration">
                                <i className="icon ion-ios-locked-outline"></i>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Name </label>
                                <input className="form-control"
                                       type="text"
                                       name="Name"
                                       placeholder="Name"
                                       value={Editor.Name}/>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Designation </label>
                                <input className="form-control"
                                       type="text"
                                       name="Designation"
                                       placeholder="Designation"
                                       value={Editor.Designation}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Email </label>
                                <input className="form-control"
                                       type="email"
                                       name="Email"
                                       placeholder="Email"
                                       value={Editor.Email}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Phone </label>
                                <input className="form-control"
                                       type="text"
                                       name="Phone"
                                       placeholder="Phone"
                                       value={Editor.Phone}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="name-input-field">Password </label>
                                <input className="form-control"
                                       type="text"
                                       name="Password"
                                       placeholder="text"
                                       value={Editor.Password}
                                />
                            </div>
                            <div className="mb-3">
                                <a href={"/EditorUpdate"} className="btn btn-warning form-btn" type="reset">Update
                                    Profile</a>
                                <button onClick={Logout} className="btn btn-success form-btn" type="submit">Logout
                                </button>
                                <button className="btn btn-danger form-btn" type="reset" onClick={() => {
                                    if (window.confirm("Are you sure you want to delete your Profile?")) {
                                        deleteEditor()
                                    }
                                    ;
                                }}>Delete Profile
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}
export default EditorProfile;
