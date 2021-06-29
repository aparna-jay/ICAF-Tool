import React, {useEffect, useState} from "react";
import "../../styles/Keynotes/Keynotes.css";
import axios from "axios";

const Keynotes = () => {

    const [Keynotes, setKeynotes] = useState([]);

    useEffect(() => {
        loadKeynotes();
    }, [Keynotes]);

    const loadKeynotes = async () => {
        await axios
            .get('https://icaf-tool.herokuapp.com/KeyNoteSpeakers/')
            .then((res) => {
                console.log(res.data);
                setKeynotes(res.data);
            })
            .catch((err) => {
                alert(err.response.data);
            });
    };

    return (
        <div>
            <div className="Keynote">
                <section></section>
                <div>
                <section className="team-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Keynote Speakers </h2>
                        </div>
                        <div className="row people">
                            {
                                Keynotes.map(keynotes=>(
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box"><img className="rounded-circle" src={keynotes.avatar}/>
                                    <h3 className="name">{keynotes.Name}</h3>
                                    <p className="title">{keynotes.Designation} </p>
                                    <p className="description">{keynotes.Description}</p>
                                    <div className="social"><a href="#"><i
                                        className="fa fa-facebook-official"></i></a><a href="#"><i
                                        className="fa fa-twitter"></i></a><a href="#"><i
                                        className="fa fa-instagram"></i></a></div>
                                </div>
                            </div>
                                ))}
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
    );
}
export default Keynotes;