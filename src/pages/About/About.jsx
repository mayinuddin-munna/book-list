const About = () => {
  return (
    <section className="about-section-area section-top-space about-home-02">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="theme-section-title">
              <span className="subtitle">ABOUT US & EXPERIENCE</span>
              <h4 className="title">
                Moving beyond product innovation to gain a competitive advantage
                <svg
                  className="title-shape style-01"
                  width="355"
                  height="15"
                  viewBox="0 0 355 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362"
                    stroke="#764AF1"
                    stroke-width="3"
                    stroke-linecap="square"
                  />
                  <path
                    className="path"
                    d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13"
                    stroke="#764AF1"
                    stroke-width="3"
                    stroke-linecap="square"
                  />
                  <path
                    className="path"
                    d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985"
                    stroke="#FFC44E"
                    stroke-width="3"
                    stroke-linecap="square"
                  />
                </svg>
              </h4>
            </div>
            <div className="about-content-wrap">
              <p>
                Ouya Education, which is based in Victoria, British Columbia,
                Canada, frequently deals with issues of employment (recruitment
                and retention) for temporary foreign workers (TFW), as well as
                temporary and permanent residency applications and other general
                immigration matters with Canadian federal departments (IRCC and
                CBSA).
              </p>
              <p>
                Education also provides educational consulting services for
                student- clients who want to study in Canada, and require help
                with the application process.
              </p>
              <span className="core">Core strength</span>
            </div>
            <div className="counter-section-inner style-a">
              <div className="single-counterup color-01">
                <div className="content-wrap">
                  <div className="odo-area">
                    <h3 className="odometer odo-title" data-odometer-final="15">
                      0
                    </h3>
                  </div>
                  <div className="content">
                    <h6 className="subtitle">Years Experience</h6>
                  </div>
                </div>
              </div>
              <div className="single-counterup color-02">
                <div className="content-wrap">
                  <div className="odo-area">
                    <h3
                      className="odometer odo-title style-01"
                      data-odometer-final="875"
                    >
                      0
                    </h3>
                  </div>
                  <div className="content">
                    <h6 className="subtitle">VISA Approved</h6>
                  </div>
                </div>
              </div>
              <div className="single-counterup color-03">
                <div className="content-wrap">
                  <div className="odo-area">
                    <h3
                      className="odometer odo-title style-02"
                      data-odometer-final="96"
                    >
                      0
                    </h3>
                    <h3 className="title">%</h3>
                  </div>
                  <div className="content">
                    <h6 className="subtitle">Admission success</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-wrap">
              <a href="#" className="btn-common fill-btn">
                Get Free Consultation
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="thumbnail">
              <img
                src="assets/img/sections/about/student-in-library.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
