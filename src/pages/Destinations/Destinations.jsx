import canda from '../../assets/img/sections/destination/canda.png';
import usa from '../../assets/img/sections/destination/usa.png';
import australia from '../../assets/img/sections/destination/australia.png';
import span from '../../assets/img/sections/destination/span.png';
import franch from '../../assets/img/sections/destination/franch.png';
import sweden from '../../assets/img/sections/destination/swideen.png';
import italy from '../../assets/img/sections/destination/italy.png';

const Destinations = () => {
    return (
        <section className="margin-top-110 section-bottom-space">
            <div className="destination-section">
                <img src="assets/img/shapes/mountant.png"
                    className="shape-01 wow animate__animated animate__delay-1s animate__fadeInUp" alt="mountant"/>
                <div className="plane-wrap">
                    <img src="assets/img/shapes/plane.png" className="shape-02" alt="mountant"/>
                </div>
                <div className="container custom-container-01">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="theme-section-title desktop-center text-center">
                                <h4 className="title">Top Destinations</h4>
                                <p>We have quality partners in variety of destinations around the globe.</p>
                            </div>
                        </div>
                    </div>
                    <div className="destination-items-wrap">
                        <div className="destination-single-item">
                            <div className="thumbnail">
                                <img src={canda} alt=""/>
                            </div>
                            <h6 className="name">Canada</h6>
                        </div>
                        <div className="destination-single-item">
                            <div className="thumbnail">
                                <img src={usa} alt=""/>
                            </div>
                            <h6 className="name">America</h6>
                        </div>
                        <div className="destination-single-item">
                            <div className="thumbnail">
                                <img src={australia} alt=""/>
                            </div>
                            <h6 className="name">London</h6>
                        </div>
                        <div className="destination-single-item">
                            <div className="thumbnail">
                                <img src={span} alt=""/>
                            </div>
                            <h6 className="name">Spain</h6>
                        </div>
                        <div className="destination-single-item">
                            <div className="thumbnail">
                                <img src={franch} alt=""/>
                            </div>
                            <h6 className="name">French</h6>
                        </div>
                        <div className="destination-single-item">
                            <div className="thumbnail">
                                <img src={sweden} alt=""/>
                            </div>
                            <h6 className="name">Sweden</h6>
                        </div>
                        <div className="destination-single-item">
                            <div className="thumbnail">
                                <img src={italy} alt=""/>
                            </div>
                            <h6 className="name">Italy</h6>
                        </div>
                    </div>
                    <div className="btn-wrap desktop-center margin-top-40 text-center">
                        <a href="contact.html" className="btn-common fill-btn style-01">apply online</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destinations;