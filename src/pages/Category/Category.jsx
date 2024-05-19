import forestay from '../../assets/img/sections/discipline/forestay.png'
import science from '../../assets/img/sections/discipline/science.png'
import art from '../../assets/img/sections/discipline/art.png'
import business from '../../assets/img/sections/discipline/business.png'
import pc from '../../assets/img/sections/discipline/pc.png'
import book from '../../assets/img/sections/discipline/book.png'
import click from '../../assets/img/sections/discipline/click.png'
import frenchFry from '../../assets/img/sections/discipline/french-fry.png'
import newsPaper from '../../assets/img/sections/discipline/news-paper.png'
import firstAidKit from '../../assets/img/sections/discipline/first-aid-kit.png'
import law from '../../assets/img/sections/discipline/law.png'
import environment from '../../assets/img/sections/discipline/environment.png'
import humanity from '../../assets/img/sections/discipline/humanity.png'
import recycle from '../../assets/img/sections/discipline/recycle.png'


const Category = () => {
    return (
        <section className="category-section-area">
            <div className="container custom-container-01">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrapper d-flex justify-content-between">
                            <div className="theme-section-title">
                                <span className="subtitle">CATEGORIES</span>
                                <h4 className="title">Popular Discipline & Collage</h4>
                            </div>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a href="#" className="nav-link active" data-bs-toggle="pill"
                                        data-bs-target="#discipline">Discipline</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" data-bs-toggle="pill"
                                        data-bs-target="#collage">Collage</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="discipline">
                        <div className="destination-items-wrap">
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={forestay} alt=""/>
                                </div>
                                <h6 className="name">Agriculture & <br/> Foresty</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={science} alt=""/>
                                </div>
                                <h6 className="name">science <br/> & professional</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={art} alt=""/>
                                </div>
                                <h6 className="name">Art, Design & <br/> Culture</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={business} alt=""/>
                                </div>
                                <h6 className="name">Business & <br/> Management</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={pc} alt=""/> {/* todo */}
                                </div>
                                <h6 className="name">Computer <br/> Science & IT</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={book} alt=""/>
                                </div>
                                <h6 className="name">Education & <br/> Training</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={click} alt=""/>
                                </div>
                                <h6 className="name">Engineering & <br/> Technology</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={frenchFry} alt=""/>
                                </div>
                                <h6 className="name">Hospitality & <br/> Sports</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={newsPaper} alt=""/>
                                </div>
                                <h6 className="name">Journalism & <br/> Media</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={firstAidKit} alt=""/>
                                </div>
                                <h6 className="name">Medicine & <br/> Health</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={law} alt=""/>
                                </div>
                                <h6 className="name">Law</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={environment} alt=""/>
                                </div>
                                <h6 className="name">Social Science</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={humanity} alt=""/>
                                </div>
                                <h6 className="name">Humanities</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={recycle} alt=""/>
                                </div>
                                <h6 className="name">Enviromental <br/> Studies</h6>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="collage">
                        <div className="destination-items-wrap">
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={frenchFry} alt=""/>
                                </div>
                                <h6 className="name">Hopitality & <br/> Sports</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={newsPaper} alt=""/>
                                </div>
                                <h6 className="name">Journalism & <br/> Media</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={firstAidKit} alt=""/>
                                </div>
                                <h6 className="name">Medicine & <br/> Health</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={law} alt=""/>
                                </div>
                                <h6 className="name">Law</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src="assets/img/sections/desipline/enverment.png" alt=""/>
                                </div>
                                <h6 className="name">Social Science</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={humanity} alt=""/>
                                </div>
                                <h6 className="name">Humanities</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={recycle} alt=""/>
                                </div>
                                <h6 className="name">Enviromental <br/> Studies</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={forestay} alt=""/>
                                </div>
                                <h6 className="name">Agriculture & <br/> Foresty</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={science} alt=""/>
                                </div>
                                <h6 className="name">science <br/> & professional</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={art} alt=""/>
                                </div>
                                <h6 className="name">Art, Design & <br/> Culture</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={business} alt=""/>
                                </div>
                                <h6 className="name">Business & <br/> Management</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={pc} alt=""/>
                                </div>
                                <h6 className="name">Computer <br/> Science & IT</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={book} alt=""/>
                                </div>
                                <h6 className="name">Education & <br/> Training</h6>
                            </div>
                            <div className="destination-single-item style-01">
                                <div className="thumbnail">
                                    <img src={click} alt=""/>
                                </div>
                                <h6 className="name">Engeneering & <br/> Technology</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;