import React, {useEffect, useState} from "react";
import "../../styles/Home/Home.css"
import "../../photo.jpg"
import {useParams} from "react-router";
import axios from "axios";

const Home = () => {
    // const Status = "";
    const [Conference, setConference] = useState([]);
    const [Keynotes, setKeynotes] = useState([]);

    useEffect(() => {
        loadConference();
        loadKeynotes();
    }, [Conference,Keynotes]);

    //  let cancel;
    const loadConference = async () => {
        //    setLoading(true);
        try{
            let query = `?Status[in]=Approved`;
            const {data} = await axios({
                method: "GET",
                url: `http://localhost:8070/Conference/sort${query}`,
                //   cancelToken: new axios.CancelToken((c) => cancel = c)
            });
            setConference(data.data.conference);
            //setLoading(false);
            console.log(data.conference);
        }catch (error){
            console.log(error.response.data);
        }
    };

    const loadKeynotes = async () => {

        await axios
            .get('http://localhost:8070/KeyNoteSpeakers/')
            .then((res) => {
                console.log(res.data);
                setKeynotes(res.data);
            })
            .catch((err) => {
                alert(err.response.data);
            });
    };


    return(
        <div>
            <div className="Home">
                <div>
                    <section id="services">
                        <div className="home">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <img className="img" src="src/home.jpg"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center" id="home">
                                    <h1 className="text-uppercase section-heading">International Conferences Application Frameworks - 2021</h1>
                                </div>
                            </div>
                            {
                                Conference.map(conference=>(
                            <figure className="snip1527">
                                <div className="image">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg"
                                         alt="pr-sample23"/>
                                </div>
                                <figcaption>
                                    <div className="date"><span className="day">{conference.Start_date.split("T")[0]}</span></div>
                                    <h3>{conference.Title}
                                    </h3>
                                    <p>
                                        <strong> Description - {conference.Description}</strong>
                                        <br/>
                                        <strong> Organization - {conference.Organization}</strong>
                                        <br/>
                                        <strong> End Date - {conference.End_Date.split("T")[0]}</strong>
                                    </p>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                                ))}

                        </div>
                    </section>
                    <section className="bg-light" id="portfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="text-uppercase section-heading">Keynote Speakers</h2>
                                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet
                                        consectetur.</h3>
                                </div>
                            </div>
                            <section className="card-section-imagia">
                                <div className="container">
                                    <div className="row">
                                        {
                                            Keynotes.map(keynotes=>(
                                        <div className="col-sm-6 col-md-4">
                                            <div className="card-container-imagia">
                                                <div className="card-imagia">
                                                    <div className="front-imagia">
                                                        <div className="cover-imagia"><img alt=""
                                                                                           src={keynotes.avatar}/>
                                                        </div>
                                                        <div className="user-imagia"><img className="img-circle" alt=""
                                                                                          src={keynotes.avatar}/>
                                                        </div>
                                                        <div className="content-imagia">
                                                            <h3 className="name-imagia">{keynotes.Name}</h3>
                                                            <p className="subtitle-imagia">{keynotes.Designation} </p>
                                                            <p className="text-center"><em>{keynotes.Description} </em></p>
                                                            <p className="text-center"><em>{keynotes.Organization} </em></p>
                                                        </div>
                                                        <div className="footer-imagia"><span><i className="fa fa-plus"></i> More info</span>
                                                        </div>
                                                    </div>
                                                    <div className="back-imagia">
                                                        <div className="content-imagia content-back-imagia">
                                                            <div>
                                                                <h3 className="text-center">Lorem Ipsum</h3>
                                                                <p className="text-center">Et hanc quidem praeter oppida multa duae
                                                                    civitates exornant Seleucia opus Seleuci regis, et Claudiopolis
                                                                    quam deduxit coloniam Claudius Caesar. Isaura enim antehac
                                                                    nimium potens, olim subversa ut rebellatrix interneciva aegre
                                                                    vestigia claritudinis pristinae monstrat admodum pauca. </p>
                                                            </div>
                                                        </div>
                                                        <div className="footer-imagia">
                                                            <div className="social-imagia text-center"><a href="#"><i
                                                                className="fa fa-facebook"></i></a><a href="#"><i
                                                                className="fa fa-linkedin"></i></a><a href="#"><i
                                                                className="fa fa-twitter"></i></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default Home;