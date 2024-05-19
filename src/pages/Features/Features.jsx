import shapes from "../../assets/img/shapes/graduation.png";
import idea from "../../assets/img/icon/idea.png";
import conversation from "../../assets/img/icon/conversation.png";
import emergency from "../../assets/img/icon/emergency.png";

const Features = () => {
  return (
    <section className="features-section margin-top-100">
      <img src={shapes} className="shape" alt="graduation cap" />
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <img src={idea} alt="" />
              </div>
              <div className="content">
                <h4 className="title">One Stop Study Solution</h4>
                <p>
                  Get a full view so you know where to save. Track spending,
                  deta keep tab subscription lorem ipsum text
                </p>
              </div>
              <div className="btn-wrap">
                <a href="#0" className="more-btn">
                  Learn More <i className="fa-solid fa-angle-right icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <img src={conversation} alt="" />
              </div>
              <div className="content">
                <h4 className="title">One To One Discussion</h4>
                <p>
                  Get a full view so you know where to save. Track spending,
                  deta keep tab subscription lorem ipsum text
                </p>
              </div>
              <div className="btn-wrap">
                <a href="#0" className="more-btn">
                  Learn More <i className="fa-solid fa-angle-right icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <img src={emergency} alt="" />
              </div>
              <div className="content">
                <h4 className="title">End To End Support</h4>
                <p>
                  Get a full view so you know where to save. Track spending,
                  deta keep tab subscription lorem ipsum text
                </p>
              </div>
              <div className="btn-wrap">
                <a href="#0" className="more-btn">
                  Learn More <i className="fa-solid fa-angle-right icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
