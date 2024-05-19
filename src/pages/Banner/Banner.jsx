import Ellipse1 from '../../assets/img/shapes/Ellipse-01.png';
import Ellipse2 from '../../assets/img/shapes/Ellipse-01.png';
import Vector from '../../assets/img/shapes/Ellipse-01.png';
import plane from '../../assets/img/shapes/Ellipse-01.png';
import location from '../../assets/img/shapes/Ellipse-01.png';
import header from '../../assets/img/shapes/Ellipse-01.png';

const Banner = () => {
    return (
        <section className="banner-area home-01">
            <div className="container custom-container-01">
                <div className="banner-wrapper">
                    <div className="row">
                        <div className="col-xl-7 col-lg-10">
                            <div className="banner-inner">
                                <p className="subtitle">SPECIAL OFFER FIRST CUSTOMER</p>
                                <h1 className="title">Your <span>success</span> journey start with us!</h1>
                                <p>Eduplan Education Can Fulfil Your International Education Dream <br/> As Per Your Best
                                    Fit with world top universities and collages.</p>
                                <div className="header-btn">
                                    <div className="btn-wrap">
                                        <a href="#0" className="btn-common flat-btn btn-active">apply online</a>
                                    </div>
                                    <div className="btn-wrap margin-left-20">
                                        <a href="contact.html" className="btn-common fill-btn">Discover</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="thumbnail">
                                <img src={Ellipse1} className="element-01" alt="Ellipse"/>
                                <img src={Ellipse2} className="element-02" alt="Ellipse"/>
                                <img src={Vector} className="element-03" alt="vector"/>
                                <img src={plane} className="element-04" alt="plane"/>
                                <img src={location} className="element-05" alt="location"/>
                                <img src={header} className="banner-img" alt="Student"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;