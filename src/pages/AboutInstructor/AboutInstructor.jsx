import in01 from "../../assets/img/team/style-02/01.png";

const AboutInstructor = () => {
  return (
    <>
      <section className="about-section-area-wrapper section-bottom-space">
        <div className="container custom-container-01">
          <div className="row align-items-center row-reverse">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">About Instructor</h3>

                <p className="paragraph">
                  Having over 20 years of experience in the computer science and
                  information technology fields. Taught many courses at the
                  University level to thousands of students.
                  <br />
                  Have been training students and employees on various
                  programming languages like, C++ , VC++ , JAVA technologies and
                  Web Development. Running a Youtube Channel on “Algorithms” ,
                  which has help many university students in their academics.
                </p>

                <div className="check-point-wrap">
                  <p className="details-title">
                    Clients and publications include:
                  </p>

                  <ul className="ul check-point-list style-01 v-02">
                    <li className="single-check-point">
                      <span className="icon-wrap">
                        <i className="fa-solid fa-check icon"></i>
                      </span>
                      <span className="content">
                        <span className="text">
                          Media: GQ, Details, Esquire, High Society & Selectism,
                          Complex Media, Hypebeast Magazine
                        </span>
                      </span>
                    </li>

                    <li className="single-check-point">
                      <span className="icon-wrap">
                        <i className="fa-solid fa-check icon"></i>
                      </span>
                      <span className="content">
                        <span className="text">
                          Fashion: Giorgio Armani, Public School NY, The
                          Arrivals, Raleigh, En Noir, Ovadia & Sons, Alternative
                          Apparel
                        </span>
                      </span>
                    </li>

                    <li className="single-check-point">
                      <span className="icon-wrap">
                        <i className="fa-solid fa-check icon"></i>
                      </span>
                      <span className="content">
                        <span className="text">
                          Client: Saks Fifth Avenue, Bloomingdales, Barney's NY,
                          Carson Street Clothiers
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-lg-6 col-md-7 col-xl-4">
              <div className="single-instructor-details-wrap">
                <div className="thumb">
                  <img src={in01} alt="image" />
                </div>

                <div className="content">
                  <div className="badge-box">
                    <span className="badges">Top Instructor</span>
                  </div>

                  <h4 className="title">Brooklyn Simmons</h4>
                  <p className="paragraph">
                    Head of Google Map Development at{" "}
                    <span className="ex">Google</span>{" "}
                  </p>

                  <div className="student-review">
                    <div className="student-wrap">
                      <span className="number">25896</span>
                      <span className="text">Total Students</span>
                    </div>
                    <div className="review-wrap">
                      <span className="number">4.5</span>
                      <span className="text">78542 reviews</span>
                    </div>
                  </div>

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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInstructor;
