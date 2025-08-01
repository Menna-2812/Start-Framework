import { useEffect } from 'react';
import { useState } from 'react';
import './Portfolio.css'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

const Portfolio = () => {

    useEffect(() => {
        document.title = "Portfolio";
    }, []);

    const [activeImg, setActiveImg] = useState(null);

    const openImg = (imgSrc) => {
        setActiveImg(imgSrc);
    }

    const closePopup = () => {
        setActiveImg(null);
    };

    return (
        <>
            <section id='portfolio' className='min-vh-100 d-flex justify-content-center align-content-center mt-3'>
                <div className="container text-center  mt-5">
                    <div className="title px-lg-4 mt-5">
                        <h2 className='text-uppercase fw-bold display-6'>portfolio component</h2>
                        <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
                            <div id="line" className="me-3"></div>
                            <i className="fa fa-solid fa-star"></i>
                            <div id="line" className="ms-3"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 py-4 px-4 rounded-3">
                            <div className="folio-img-wrapper position-relative" onClick={() => openImg(port1)}>
                                <img className="folio-img img-fluid rounded-3" src={port1} alt="" />
                                <div className="overlay rounded">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-4 px-4 rounded-3">
                            <div className="folio-img-wrapper position-relative" onClick={() => openImg(port2)}>
                                <img className="folio-img img-fluid rounded-3" src={port2} alt="" />
                                <div className="overlay rounded">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-4 px-4 rounded-3">
                            <div className="folio-img-wrapper position-relative" onClick={() => openImg(port3)}>
                                <img className="folio-img img-fluid rounded-3" src={port3} alt="" />
                                <div className="overlay rounded">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-4 px-4 rounded-3">
                            <div className="folio-img-wrapper position-relative" onClick={() => openImg(port1)}>
                                <img className="folio-img img-fluid rounded-3" src={port1} alt="" />
                                <div className="overlay rounded">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-4 px-4 rounded-3">
                            <div className="folio-img-wrapper position-relative" onClick={() => openImg(port2)}>
                                <img className="folio-img img-fluid rounded-3" src={port2} alt="" />
                                <div className="overlay rounded">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-4 px-4 rounded-3">
                            <div className="folio-img-wrapper position-relative" onClick={() => openImg(port3)}>
                                <img className="folio-img img-fluid rounded-3" src={port3} alt="" />
                                <div className="overlay rounded">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {activeImg &&
                    <div className="popup-container" onClick={closePopup}>
                        <div className="popup-content">
                            <img
                                src={activeImg}
                                alt="Full View"
                                className="img-fluid rounded-3 w-100"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                }
            </section>
        </>
    )
}

export default Portfolio
