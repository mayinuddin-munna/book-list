import newsletter from "../../../assets/img/icon/newslater.png";
import bell from "../../../assets/img/icon/bell.png";
import location from "../../../assets/img/icon/location-02.png";

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
                        <a href="service-single.html" className="subscribe-btn">
                          <img src={bell} alt="" />
                          subscribe
                        </a>
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
                      <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer and copyright</a>
                    </li>
                    <li>
                      <a href="#">Cookie policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Equality and diversity</a>
                    </li>
                    <li>
                      <a href="#">Complaints procedure</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Site Highlight</h4>
                  <ul>
                    <li>
                      <a href="#">Student videos</a>
                    </li>
                    <li>
                      <a href="#">Photo gallery</a>
                    </li>
                    <li>
                      <a href="#">TSC prospectus</a>
                    </li>
                    <li>
                      <a href="#">Student newsletter</a>
                    </li>
                    <li>
                      <a href="#">Student portal</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Help Center</h4>
                  <ul>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">How to apply for admission</a>
                    </li>
                    <li>
                      <a href="#">Admission Documents</a>
                    </li>
                    <li>
                      <a href="#">Frequently asked questions</a>
                    </li>
                    <li>
                      <a href="#">Student accommodation</a>
                    </li>
                    <li>
                      <a href="#">Student Jobs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">Services</h4>
                  <ul>
                    <li>
                      <a href="#">Counselling</a>
                    </li>
                    <li>
                      <a href="#">Test Preparation</a>
                    </li>
                    <li>
                      <a href="#">Admission</a>
                    </li>
                    <li>
                      <a href="#">Education Loan</a>
                    </li>
                    <li>
                      <a href="#">Visa Processing</a>
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
                      <a href="#0">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
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
