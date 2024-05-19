const ChoseUs = () => {
  return (
    <section className="chose-area-wrapper section-bottom-space">
      <div className="chose-area-inner bg-color-01">
        <div
          className="bg-image background-image"
        //   style="background-image: url(assets/img/chose-us/01.jpg);"
        ></div>
        <div className="container custom-container-01">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="img-box"></div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrap">
                <div className="section-title-wrapper">
                  <h4 className="section-title">Why chose us</h4>
                  <p className="description color-02">
                    87% of people learning for professional development report
                    career benefits
                  </p>
                </div>

                <div className="icon-box-with-text-wrap">
                  <ul className="ul icon-box-with-text style-02">
                    <li className="single-icon-box-with-text">
                      <div className="icon-wrap">
                        <img
                          src="assets/img/icon/icon-and-text/02/01.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Our Vision</h4>
                        <p className="paragraph">
                          Our vision is to be the leading student consultancy
                          and recruiting agency of the world by satisfying our
                          clients’ in all aspects.
                        </p>
                      </div>
                    </li>
                    <li className="single-icon-box-with-text style-02">
                      <div className="icon-wrap">
                        <img
                          src="assets/img/icon/icon-and-text/02/02.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Our Mission</h4>
                        <p className="paragraph">
                          BSB mission is to achieve excellence in business
                          through excellent services and new scopes for
                          world-class education by realizing dreams of our
                          clients within their capacities.
                        </p>
                      </div>
                    </li>
                    <li className="single-icon-box-with-text style-03">
                      <div className="icon-wrap">
                        <img
                          src="assets/img/icon/icon-and-text/02/03.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Our Goal</h4>
                        <p className="paragraph">
                          Create opportunities of abroad higher study and
                          improve significantly family & position and national
                          development and to contribute to achieve Bangladesh as
                          a middle income country.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoseUs;
