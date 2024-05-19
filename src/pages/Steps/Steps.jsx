import step1 from "../../assets/img/icon/step-01.png";
import step2 from "../../assets/img/icon/step-02.png";
import step3 from "../../assets/img/icon/step-03.png";
import step4 from "../../assets/img/icon/step-04.png";
import step5 from "../../assets/img/icon/step-05.png";

const Steps = () => {
  return (
    <section className="destination-section style-01 margin-top-110 instruction">
      <div className="container custom-container-01">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="theme-section-title desktop-center text-center">
              <span className="subtitle">STEPS</span>
              <h4 className="title">Steps to Get your Destination</h4>
            </div>
          </div>
        </div>
        <div className="destination-items-wrap">
          <div className="destination-single-item style-02">
            <div className="thumbnail">
              <img src={step1} alt="" />
            </div>
            <h6 className="name">
              Identify course <br /> country & collage
            </h6>
          </div>
          <div className="destination-single-item style-02">
            <div className="thumbnail">
              <img src={step2} alt="" />
            </div>
            <h6 className="name">
              science <br /> & professional
            </h6>
          </div>
          <div className="destination-single-item style-02">
            <div className="thumbnail">
              <img src={step3} alt="" />
            </div>
            <h6 className="name">
              Art, Design & <br /> Culture
            </h6>
          </div>
          <div className="destination-single-item style-02">
            <div className="thumbnail">
              <img src={step4} alt="" />
            </div>
            <h6 className="name">
              Business & <br /> Management
            </h6>
          </div>
          <div className="destination-single-item style-02">
            <div className="thumbnail">
              <img src={step5} alt="" />
            </div>
            <h6 className="name">
              Computer <br /> Science & IT
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
