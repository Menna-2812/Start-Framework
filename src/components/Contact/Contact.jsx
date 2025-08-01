import './Contact.css'
import React, { useEffect } from 'react';
const Contact = () => {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <>
            <section id='contact' className='min-vh-100 d-flex justify-content-center align-content-center mt-3'>
                <div className="container text-center  mt-5">
                    <div className="title px-lg-4 mt-5">
                        <h2 className='text-uppercase fw-bold display-6'>contact section</h2>
                        <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
                            <div id="line" className="me-3"></div>
                            <i className="fa fa-solid fa-star"></i>
                            <div id="line" className="ms-3"></div>
                        </div>
                    </div>
                    <div className="form mx-auto">
                        <div class="input-container">
                            <input
                                id="uName"
                                type="text"
                                className="form-control mt-5 mb-5 border-0 border-bottom"
                                placeholder="User Name"
                            />
                            <label for="uName" class="input-label">
                                User Name
                            </label>
                        </div>

                        <div class="input-container">
                            <input
                                id="uAge"
                                type="number"
                                className="form-control mb-5 border-0 border-bottom"
                                placeholder="User Age"
                            />
                            <label for="uAge" class="input-label">
                                User Age
                            </label>
                        </div>

                        <div class="input-container">
                            <input
                                id="uEmail"
                                type="email"
                                className="form-control mb-5 border-0 border-bottom"
                                placeholder="User Email"
                            />
                            <label for="uEmail" class="input-label">
                                User Email
                            </label>
                        </div>

                        <div class="input-container">
                            <input
                                id="uPass"
                                type="password"
                                className="form-control mb-4 border-0 border-bottom"
                                placeholder="User Password"
                            />
                            <label for="uPass" class="input-label">
                                User Password
                            </label>
                        </div>

                        <button className="px-3 send-btn py-1">Send Message</button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact
