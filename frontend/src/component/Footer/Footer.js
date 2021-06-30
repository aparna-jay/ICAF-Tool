import React from "react";

const Footer = ()=>{
    return(
        <div>
            <footer id="footerpad">
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                    rel='stylesheet' type='text/css' />
                <div className="container">
                    <br /><br />
                    <div className="row">
                        <div className="col-md-6 col-lg-8 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i
                                    className="fa fa-circle fa-stack-2x"></i><i
                                    className="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i
                                    className="fa fa-circle fa-stack-2x"></i><i
                                    className="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a></li>
                                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i
                                    className="fa fa-circle fa-stack-2x"></i><i
                                    className="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a></li>
                                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i
                                    className="fa fa-circle fa-stack-2x"></i><i
                                    className="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a></li>
                            </ul>
                            <p className="copyright text-muted text-center">ICAF 2021 | Web Design by
                                Runtime Terror</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
