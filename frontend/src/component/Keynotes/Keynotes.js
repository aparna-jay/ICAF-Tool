import React from "react"
import '../../styles/Keynotes/Keynotes.css'
import James from "../../James.jpg"
import Jane from "../../Jane.jpg"
import Adam from "../../Adam.jpg"

const Keynotes = () =>{

        return(
            <div>
                <div className="keynotes">
                    <section></section>
                    <section className="team-boxed">
                        <div className="container">
                            <div className="intro">
                                <h2 className="text-center">Keynote Speakers </h2>
                                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo
                                    ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
                                </p>
                            </div>
                            <div className="row people">
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box"><img className="rounded-circle" src={James}/>
                                        <h3 className="name">Ben Johnson</h3>
                                        <p className="title">Musician</p>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                            rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                            est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
                                            massa.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="fa fa-facebook-official"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box"><img className="rounded-circle" src={Jane}/>
                                        <h3 className="name">Emily Clark</h3>
                                        <p className="title">Artist</p>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                            rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                            est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
                                            massa.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="fa fa-facebook-official"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a></div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box"><img className="rounded-circle" src={Adam}/>
                                        <h3 className="name">Carl Kent</h3>
                                        <p className="title">Stylist</p>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                            rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                            est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
                                            massa.
                                        </p>
                                        <div className="social">
                                            <a href="#"><i className="fa fa-facebook-official"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        );
}

export default Keynotes;