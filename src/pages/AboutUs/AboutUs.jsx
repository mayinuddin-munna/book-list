import ChoseUs from "../ChoseUs/ChoseUs";
import Counter from "../Counter/Counter";
import Testimonial from "../Testimonial/Testimonial";
// import Team from "../Team/Team";

const AboutUs = () => {
  return (
    <>
      <section className="about-section-area section-bottom-space">
        <div className="container custom-container-01">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">About us</h3>

                <p className="paragraph">
                  Eduplan student consultancy is one of the renowned
                  international education consultancy firms which assisting
                  overseas students
                </p>
                <p className="paragraph">
                  The head office of Eduplan is located in India which helps all
                  Indian students to get admission into top-ranked universities
                  from the United Kingdom, USA, Australia, Canada,Germany and
                  Sweden. At the same time, we have a very strong relationship
                  with our partner Malaysian, Cyprus and Chinese Universities.
                </p>

                <div className="icon-box-with-text-wrap">
                  <ul className="ul icon-box-with-text style-01">
                    <li className="single-icon-box-with-text">
                      <div className="icon-wrap color-01">
                        <img
                          src="assets/img/icon/icon-and-text/key.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <p className="text">
                          Get life-time free access with one time payment in our
                          courses plan. Easy & simple!
                        </p>
                      </div>
                    </li>
                    <li className="single-icon-box-with-text style-02">
                      <div className="icon-wrap color-02">
                        <img
                          src="assets/img/icon/icon-and-text/board.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <p className="text">
                          We find the expert tuotor with huge teaching
                          experience
                        </p>
                      </div>
                    </li>
                    <li className="single-icon-box-with-text style-03">
                      <div className="icon-wrap color-03">
                        <img
                          src="assets/img/icon/icon-and-text/monitor.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <p className="text">
                          We present worldclass courses with practical learning
                          tasks that make students more confident.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="btn-wrap">
                  <a href="#" className="btn-common btn-new">
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="thumbnail ">
                <div className="right-frame">
                  <img src="assets/img/about/01.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Team/> */}
      <Counter/>
      <ChoseUs/>
      <Testimonial/>
    </>
  );
};

export default AboutUs;
