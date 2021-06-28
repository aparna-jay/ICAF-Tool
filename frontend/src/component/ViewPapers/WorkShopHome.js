import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import  "../../App.css"

const WorkShopHome = ()=>{
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(`http://localhost:8070/workshop/`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    console.log(users)

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8070/workshop/delete/${id}`, {
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
        <div className="">
            {users?.map((user) => (
                <div className="blog-card" key={user._id}>
                    <label className="form-control btn-success"> File uploaded by {user.Name}</label>
                    <embed  src={user.avatar} alt="pdf" width={"100%"} height={150} /><br /><br />
                    <a href={user.avatar} className={"btn btn-danger btn-sm"}>VIEW PAPER</a>
                    <div className="p-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/EditWorkShopStatus/${user._id}`}
                                  className={"btn btn-dark"}
                                  style={{ textDecoration: "none" }}>
                                Edit
                            </Link>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(user._id)}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default WorkShopHome;