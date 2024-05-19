import { Link } from "react-router-dom";
import logo from "../../../assets/img/Logos/logo-black.svg";
import search from "../../../assets/img/icon/search-icon.png";

const Header = () => {
  return (
    <div className="nav-area-wrapper-relative">
      <nav className="navbar navbar-area navbar-expand-lg navigation-style-02">
        <div className="container custom-container custom-container-01">
          <div className="responsive-menu">
            <div className="logo-wrapper">
              <Link to="/" className="logo">
                <img src={logo} alt="" />
              </Link>
            </div>
            <button
              className="navbar-toggler navbar-bs-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#themeim_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="themeim_main_menu">
            <ul className="navbar-nav">
              <li className="menu-item-has-children current-menu-item">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="service">Service</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="instructors">Instructors</Link>
                  </li>
                  <li>
                    <Link to="about-instructor">About Instructor</Link>
                  </li>
                  <li>
                    <Link to="country-details">Country Details</Link>
                  </li>
                  <li>
                    <Link to="course-details">Course Details</Link>
                  </li>
                  <li>
                    <Link to="apply-online">Apply Online</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-content">
            <div className="icon-part">
              <ul>
                <li id="search">
                  <Link to="#">
                    <img src={search} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
