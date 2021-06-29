import React, {useEffect, useState} from "react";
import "../../styles/Home/Home.css"
import "../../photo.jpg"
import {useParams} from "react-router";
import axios from "axios";

const Home = () => {

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
                                    <h1 className="text-uppercase section-heading">Conferences</h1>
                                    <h2 className="text-muted section-subheading">ICAF 2021</h2>
                                </div>
                            </div>
                            <figure className="snip1527">
                                <div className="image">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg"
                                         alt="pr-sample23"/>
                                </div>
                                <figcaption>
                                    <div className="date"><span className="day">28</span><span className="month">Oct</span></div>
                                    <h3>The World Ended Yesterday</h3>
                                    <p>

                                        You know what we need, Hobbes? We need an attitude. Yeah, you can't be cool if you don't have
                                        an attitude.
                                    </p>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                            <figure className="snip1527">
                                <div className="image">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg" alt="pr-sample24"/>

                                </div>
                                <figcaption>
                                    <div className="date"><span className="day">17</span><span className="month">Nov</span></div>
                                    <h3>An Abstract Post Heading</h3>
                                    <p>

                                        Sometimes the surest sign that intelligent life exists elsewhere in the universe is that none
                                        of it has tried to contact us.
                                    </p>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                            <figure className="snip1527">
                                <div className="image">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg"
                                         alt="pr-sample25"/>
                                </div>
                                <figcaption>
                                    <div className="date"><span className="day">01</span><span className="month">Dec</span></div>
                                    <h3>Down with this sort of thing</h3>
                                    <p>

                                        I don't need to compromise my principles, because they don't have the slightest bearing on
                                        what happens to me anyway.
                                    </p>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                        </div>
                    </section>
                    <section className="bg-light" id="portfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="text-uppercase section-heading">Portfolio</h2>
                                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet
                                        consectetur.</h3>
                                </div>
                            </div>
                            <section className="card-section-imagia">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <div className="card-container-imagia">
                                                <div className="card-imagia">
                                                    <div className="front-imagia">
                                                        <div className="cover-imagia"><img alt=""
                                                                                           src="https://unsplash.it/720/500?image=1067"/>
                                                        </div>
                                                        <div className="user-imagia"><img className="img-circle" alt=""
                                                                                          src="https://unsplash.it/120/120?image=64"/>
                                                        </div>
                                                        <div className="content-imagia">
                                                            <h3 className="name-imagia">John Doe</h3>
                                                            <p className="subtitle-imagia">Subtitle </p>
                                                            <p className="text-center"><em>Tantum autem cuique tribuendum, primum
                                                                quantum ipse efficere possis, deinde etiam quantum ille quem diligas
                                                                atque adiuves.</em></p>
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
                                        <div className="col-sm-6 col-md-4">
                                            <div className="card-container-imagia">
                                                <div className="card-imagia">
                                                    <div className="front-imagia">
                                                        <div className="cover-imagia cover-gradient"></div>
                                                        <div className="user-imagia"><img className="img-circle" alt=""
                                                                                          src="https://unsplash.it/120/120?image=64"/>
                                                        </div>
                                                        <div className="content-imagia">
                                                            <h3 className="name-imagia">John Doe</h3>
                                                            <p className="subtitle-imagia">Subtitle </p>
                                                            <p className="text-center"><em>Tantum autem cuique tribuendum, primum
                                                                quantum ipse efficere possis, deinde etiam quantum ille quem diligas
                                                                atque adiuves. </em></p>
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
                                        <div className="col-sm-6 col-md-4">
                                            <div className="card-container-imagia">
                                                <div className="card-imagia">
                                                    <div className="front-imagia">
                                                        <div className="cover-imagia"><img alt=""
                                                                                           src="https://unsplash.it/720/500?image=1067"/>
                                                        </div>
                                                        <div className="user-imagia"><img className="img-circle" alt=""
                                                                                          src="https://unsplash.it/120/120?image=64"/>
                                                        </div>
                                                        <div className="content-imagia">
                                                            <h3 className="name-imagia">John Doe</h3>
                                                            <p className="subtitle-imagia">Subtitle </p>
                                                            <p className="text-center"><em>Tantum autem cuique tribuendum, primum
                                                                quantum ipse efficere possis, deinde etiam quantum ille quem diligas
                                                                atque adiuves. </em></p>
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