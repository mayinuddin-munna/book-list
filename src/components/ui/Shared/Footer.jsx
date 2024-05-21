import newsletter from "../../../assets/img/icon/newslater.png";
import bell from "../../../assets/img/icon/bell.png";
import location from "../../../assets/img/icon/location-02.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area style-01">
      <div className="footer-top">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="footer-widget widget widget_subscribe">
                <div className="subscibe-wrapper">
                  <div className="content-wrap">
                    <div className="icon">
                      <img src={newsletter} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Subscribe our newsletter</h4>
                      <p>
                        Enter your mail address to get our updates, offer and
                        study abroad related all updates
                      </p>
                    </div>
                  </div>
                  <div className="subscribe-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fName"
                        placeholder="Enter your Email..."
                        className="form-control"
                        required=""
                        aria-required="true"
                      />
                      <div className="btn-wrap">
                        <Link
                          href="service-single.html"
                          className="subscribe-btn"
                        >
                          <img src={bell} alt="" />
                          subscribe
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Important Links</h4>
                  <ul>
                    <li>
                      <Link to="/">Terms and conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Disclaimer and copyright</Link>
                    </li>
                    <li>
                      <Link to="/">Cookie policy</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy policy</Link>
                    </li>
                    <li>
                      <Link to="/">Equality and diversity</Link>
                    </li>
                    <li>
                      <Link to="/">Complaints procedure</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Site Highlight</h4>
                  <ul>
                    <li>
                      <Link to="/">Student videos</Link>
                    </li>
                    <li>
                      <Link to="/">Photo gallery</Link>
                    </li>
                    <li>
                      <Link to="/">TSC prospectus</Link>
                    </li>
                    <li>
                      <Link to="/">Student newsletter</Link>
                    </li>
                    <li>
                      <Link to="/">Student portal</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Help Center</h4>
                  <ul>
                    <li>
                      <Link to="/">Courses</Link>
                    </li>
                    <li>
                      <Link to="/">How to apply for admission</Link>
                    </li>
                    <li>
                      <Link to="/">Admission Documents</Link>
                    </li>
                    <li>
                      <Link to="/">Frequently asked questions</Link>
                    </li>
                    <li>
                      <Link to="/">Student accommodation</Link>
                    </li>
                    <li>
                      <Link to="/">Student Jobs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Services</h4>
                  <ul>
                    <li>
                      <Link to="/">Counselling</Link>
                    </li>
                    <li>
                      <Link to="/">Test Preparation</Link>
                    </li>
                    <li>
                      <Link to="/">Admission</Link>
                    </li>
                    <li>
                      <Link to="/">Education Loan</Link>
                    </li>
                    <li>
                      <Link to="/">Visa Processing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Location</h4>
                  <ul className="contact_info_list">
                    <li className="single-info-item">
                      <div className="icon">
                        <img src={location} alt="" />
                      </div>
                      <div className="details">Adabor, Dhaka Bangladesh</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-inner">
                <p>
                  © 2024 Education consultancy. All rights reserved | Developed
                  By <span>Alternative Recruitment Limited</span>
                </p>
                <div className="footer-social-area">
                  <ul className="social-icon-02">
                    <li>
                      <Link href="#0">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#0">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#0">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
