import flag1 from '../../assets/img/flag/01.png'
import flag2 from '../../assets/img/flag/02.png'
import flag3 from '../../assets/img/flag/03.png'
import flag4 from '../../assets/img/flag/04.png'
import flag5 from '../../assets/img/flag/05.png'
import flag7 from '../../assets/img/flag/07.png'

const ApplyOnline = () => {
  return (
    <section className="apply-form-area-wrapper">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-12">
            <div className="apply-form-inner">
              <div className="row justify-content-between">
                <div className="col-lg-12">
                  <div className="contact-form">
                    <form className="form">
                      <div className="part">
                        <h5 className="title">Primary Information</h5>
                        <div className="form-element">
                          <div className="row">
                            <div className="col-md-4 col-lg-4">
                              <i className="fa-solid fa-user"></i>
                              <input
                                type="text"
                                placeholder="Full name"
                                required=""
                              />
                            </div>
                            <div className="col-md-4 col-lg-4">
                              <i className="fa-solid fa-envelope-open"></i>
                              <input
                                type="email"
                                placeholder="Email address"
                                required=""
                              />
                            </div>
                            <div className="col-md-4 col-lg-4">
                              <i className="fa-solid fa-phone"></i>
                              <input
                                type="tel"
                                placeholder="Phone number"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-element">
                          <div className="row">
                            <div className="col-md-4 col-lg-4">
                              <i className="fa-sharp fa-solid fa-earth-americas"></i>
                              <select name="" id="">
                                <option disabled selected hidden>
                                  Nationality
                                </option>
                                <option value="Canada">Canada</option>
                                <option value="America">America</option>
                                <option value="London">London</option>
                              </select>
                            </div>
                            <div className="col-md-4 col-lg-4">
                              <i className="fa-solid fa-calendar-days"></i>
                              <div className="ui calendar date picker">
                                <div className="ui input left">
                                  <input
                                    type="text"
                                    placeholder="Date of birth"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                              <i className="fa-solid fa-user"></i>
                              <select name="" id="">
                                <option disabled selected hidden>
                                  Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="part">
                        <h5 className="title">
                          Select prefered study destination{" "}
                          <span className="sub">(Select Multiple)</span>
                        </h5>
                        <ul className="ul selection-list">
                          <li>
                            <input type="radio" name="country" />
                            <div className="thumb">
                              <img src={flag1} alt="" />
                            </div>
                            <div className="content">
                              <h5 className="title">Canada</h5>
                            </div>
                          </li>
                          <li>
                            <input type="radio" name="country" />
                            <div className="thumb">
                              <img src={flag2} alt="" />
                            </div>

                            <div className="content">
                              <h5 className="title">America</h5>
                            </div>
                          </li>
                          <li>
                            <input type="radio" name="country" />
                            <div className="thumb">
                              <img src={flag3} alt="" />
                            </div>

                            <div className="content">
                              <h5 className="title">London</h5>
                            </div>
                          </li>
                          <li>
                            <input type="radio" name="country" />
                            <div className="thumb">
                              <img src={flag4} alt="" />
                            </div>

                            <div className="content">
                              <h5 className="title">Spain</h5>
                            </div>
                          </li>
                          <li>
                            <input type="radio" name="country" />
                            <div className="thumb">
                              <img src={flag5} alt="" />
                            </div>
                            <div className="content">
                              <h5 className="title">French</h5>
                            </div>
                          </li>
                          <li>
                            <input type="radio" name="country" />
                            <div className="thumb">
                              <img src={flag7} alt="" />
                            </div>

                            <div className="content">
                              <h5 className="title">Italy</h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="part">
                        <h5 className="title">Admission preference</h5>
                        <div className="form-element">
                          <div className="row">
                            <div className="col-md-4 col-lg-4">
                              <i className="fa-sharp fa-solid fa-earth-americas"></i>
                              <select name="" id="">
                                <option disabled selected hidden>
                                  {" "}
                                  Study level
                                </option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">
                                  Intermediate
                                </option>
                                <option value="advance">Advance</option>
                              </select>
                            </div>

                            <div className="col-md-4 col-lg-4">
                              <i className="fa-solid fa-user"></i>
                              <select name="" id="">
                                <option disabled selected hidden>
                                  Subject
                                </option>
                                <option value="english">English</option>
                                <option value="bangla">Bangla</option>
                              </select>
                            </div>

                            <div className="col-md-4 col-lg-4">
                              <i className="fa-solid fa-calendar-days"></i>
                              <div className="ui calendar datepicker">
                                <div className="ui input left">
                                  <input type="text" placeholder="Start date" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-submit text-right">
                          <button
                            type="submit"
                            className="btn-common btn-active"
                          >
                            submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyOnline;
