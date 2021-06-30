import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../../App.css"

const ReserchPapersHome = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(`http://localhost:8070/researcher/`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    console.log(users)

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8070/researcher/delete/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                const updatedUsers = users.filter((user) => user._id !== id);
                setUsers(updatedUsers);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="homeRP">
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                rel='stylesheet' type='text/css'/>
            <a className="btn btn-default" href={"/reviewer"}>
                <em className="fa fa-arrow-left"> back</em>
            </a>
            <br/>
            {users?.map((user) => (
                <div className="blog-card" key={user._id}>
                    <label className=" "><b> File uploaded by {user.Name}</b></label>
                    <embed src={user.avatar}
                           alt="pdf" width={"100%"}
                           height={150}/>
                    <br/><br/>

                    <div className="p-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <a href={user.avatar}
                               className={"btn btn-success btn-sm"}>
                                VIEW PAPER
                            </a>
                            <Link to={`/editRP/${user._id}`}
                                  className={"btn btn-warning"}
                                  style={{textDecoration: "none"}}>
                                Update Status
                            </Link>
                            <a className="btn btn-danger"><em
                                className="fa fa-trash" onClick={() => {
                                if (window.confirm("Are you sure you want to delete this?")) {
                                    handleDelete(user._id)
                                }
                                ;
                            }}/></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ReserchPapersHome;