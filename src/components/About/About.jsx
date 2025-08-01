import './About.css'
import React, { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <>
            <section
                id="about"
                className="d-flex justify-content-center align-items-center text-white"
            >
                <div className="container px-lg-4 mt-4">
                    <div className="title">
                        <h2 className="text-center display-6 fw-bold">ABOUT COMPONENT</h2>

                        <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
                            <div id="line" className="bg-white me-3"></div>
                            <i className="fa fa-solid fa-star"></i>
                            <div id="line" className="bg-white ms-3"></div>
                        </div>
                    </div>

                    <div className="row mt-5 px-5">
                        <div className="col-md-6">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The
                                download includes the complete source files including HTML, CSS,
                                and JavaScript as well as<br /> optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The
                                download includes the complete source files including HTML, CSS,
                                and JavaScript as well as <br /> optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
