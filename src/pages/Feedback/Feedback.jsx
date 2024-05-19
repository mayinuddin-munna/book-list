import student1 from "../../assets/img/sections/students/student-01.png";
import student2 from "../../assets/img/sections/students/student-01.png";
import student3 from "../../assets/img/sections/students/student-01.png";
import student4 from "../../assets/img/sections/students/student-01.png";

const Feedback = () => {
  return (
    <section className="feedback-section margin-top-110">
      <div className="container custom-container-01">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="theme-section-title desktop-center text-center">
              <span className="subtitle">FEEDBACKS</span>
              <h4 className="title">
                Our students shared their <br /> visa success stories
                <svg
                  className="title-shape"
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
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="image-box-item">
              <div className="thumbnail">
                <img src={student1} alt="" />
                <a
                  className="video-play-btn mfp-iframe"
                  href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                >
                  <svg
                    width="14"
                    height="25"
                    viewBox="0 0 14 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <div className="content">
                  <h6 className="title">Annette Black</h6>
                  <p>University of Alberta ~ Canada</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="image-box-item">
              <div className="thumbnail">
                <img src={student2} alt="" />
                <a
                  className="video-play-btn mfp-iframe"
                  href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                >
                  <svg
                    width="14"
                    height="25"
                    viewBox="0 0 14 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <div className="content">
                  <h6 className="title">Robert Fox</h6>
                  <p>University of Alberta ~ Canada</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="image-box-item">
              <div className="thumbnail">
                <img src={student3} alt="" />
                <a
                  className="video-play-btn mfp-iframe"
                  href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                >
                  <svg
                    width="14"
                    height="25"
                    viewBox="0 0 14 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <div className="content">
                  <h6 className="title">Leslie Alexander</h6>
                  <p>University of Alberta ~ Canada</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="image-box-item">
              <div className="thumbnail">
                <img src={student4} alt="" />
                <a
                  className="video-play-btn mfp-iframe"
                  href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                >
                  <svg
                    width="14"
                    height="25"
                    viewBox="0 0 14 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <div className="content">
                  <h6 className="title">Kristin Watson</h6>
                  <p>University of Alberta ~ Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
