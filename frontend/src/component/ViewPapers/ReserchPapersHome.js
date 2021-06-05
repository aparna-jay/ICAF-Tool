import React, {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ReserchPapersHome = ()=>{
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(`http://localhost:8070/researcher`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8070/researcher/${id}`, {
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
        <div className="row">
            {users?.map((user) => (
                <div className="col-md-3 card me-3 mt-2 p-0" key={user._id}>
                    <iframe  le src={user.avatar} alt="pdf" width={"100%"} height={200} />
                    <div className="p-2">
                        <h3>{user.name}</h3>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/editRP/${user._id}`} style={{ textDecoration: "none" }}>
                                Edit
                            </Link>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(user._id)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ReserchPapersHome;