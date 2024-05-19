import React from 'react';

const Contact = () => {
    return (
        <section className="contact-form-area-wrapper section-bottom-space">
                <div className="container custom-container-01">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="apply-form-inner">
                                <div className="row justify-content-between">
                                    <div className="col-lg-5">
                                        <div className="contact-address">
                                            <h3 className="title">Get in touch</h3>

                                            <ul className="ul contact-address-list">
                                                <li className="single-address-item">
                                                    <span className="icon-wrap color-01">
                                                        <i className="fa-sharp fa-solid fa-location-dot icon"></i>
                                                    </span>
                                                    <span className="text">2972 Westheimer Rd. Santa Ana, Illinoi
                                                        85486, Dhaka</span>
                                                </li>
                                                <li className="single-address-item">
                                                    <span className="icon-wrap color-02">
                                                        <i className="fa-solid fa-phone icon"></i>
                                                    </span>
                                                    <span className="text">(270) 555-0117 <br/>
                                                        (270) 589-7395</span>
                                                </li>
                                                <li className="single-address-item">
                                                    <span className="icon-wrap color-03">
                                                        <i className="fa-solid fa-envelope-open icon"></i>
                                                    </span>
                                                    <span className="text">nathan.roberts@example.com <br/>
                                                        headoffice@example.com</span>
                                                </li>
                                            </ul>

                                            <ul className="ul social-media-list style-01 color-02">
                                                <li className="single-social-item">
                                                    <a href="#" tabindex="-1">
                                                        <i className="fa-brands fa-instagram icon"></i>
                                                    </a>
                                                </li>
                                                <li className="single-social-item">
                                                    <a href="#" tabindex="-1">
                                                        <i className="fa-brands fa-facebook-f icon"></i>
                                                    </a>
                                                </li>
                                                <li className="single-social-item">
                                                    <a href="#" tabindex="-1">
                                                        <i className="fa-brands fa-youtube icon"></i>
                                                    </a>
                                                </li>
                                                <li className="single-social-item">
                                                    <a href="#" tabindex="-1">
                                                        <i className="fa-brands fa-linkedin-in icon"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="contact-form">
                                            <form className="form">
                                                <div className="part">
                                                    <h5 className="title">Primary Information</h5>
                                                    <div className="form-element">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <i className="fa-solid fa-user"></i>
                                                                <input type="text" placeholder="Full name" required=""/>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <i className="fa-solid fa-envelope-open"></i>
                                                                <input type="email" placeholder="Email address"
                                                                    required=""/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="form-element">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <i className="fa-solid fa-phone"></i>
                                                                <input type="tel" placeholder="Phone number"
                                                                    required=""/>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <i className="fa-solid fa-user"></i>
                                                                <input type="text" placeholder="Full name" required=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-element">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <textarea className="textarea"
                                                                    placeholder="Write description..."
                                                                    rows="10"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-submit text-right">
                                                    <button type="submit" className="btn-common btn-active">submit Message
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Contact;