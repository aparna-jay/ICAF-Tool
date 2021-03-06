import React from "react";

const WorkshopAll = () => {
    return (
        <div className={"container"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-uppercase section-heading">Conference Tracks</h2>
                        <h3 className="text-muted section-subheading">Upcoming Workshops</h3>
                    </div>
                    <figure className="snip1527">
                        <div className="image">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg"
                                 alt="pr-sample23"/>
                        </div>
                        <figcaption>
                            <div className="date"><span className="day">01</span></div>
                            <h3>Data science and data driven approaches. </h3>
                            <ul>
                                <li>Data Mining</li>
                                <li> Data driven approaches and technologies.</li>
                                <li> Data analytics and visualizations</li>
                                <li> Data science applications</li>
                            </ul>
                            <h5><b>By Mr.Chameera</b></h5>
                        </figcaption>
                    </figure>
                    <figure className="snip1527">
                        <div className="image">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg"
                                 alt="pr-sample24"/>
                        </div>
                        <figcaption>
                            <div className="date"><span className="day">02</span></div>
                            <h3>Distributed Systems and Applications </h3>
                            <ul>
                                <li>Algorithms and applications</li>
                                <li> High performance computing</li>
                                <li> Parallel computing</li>
                                <li> Distributed routing</li>
                                <li> Distributed processingv</li>
                                <br/> <br/>
                            </ul>
                            <h5><b>By Miss.Hansani</b></h5>
                        </figcaption>
                    </figure>
                    <figure className="snip1527">
                        <div className="image">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg"
                                 alt="pr-sample25"/>
                        </div>
                        <figcaption>
                            <div className="date"><span className="day">03</span></div>
                            <h3>Communication </h3>
                            <ul>
                                <li> Cellular networks including 4G, 5G</li>
                                <li> Wireless and mobile networks</li>
                                <li> Network simulations and modelling</li>
                                <li> Routing, switching and protocols.</li>
                                <li> Cooperative communications and networking</li>
                            </ul>
                            <h5><b>By Dr.Pathum</b></h5>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}
export default WorkshopAll
