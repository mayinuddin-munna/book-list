import { Link } from "react-router-dom";
import blog1 from "../../assets/img/h-blog/01.png";
import calender from "../../assets/img/icon/calender.png";

const News = () => {
  return (
    <section className="news-section-area margin-top-110">
      <div className="container custom-container-01">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="theme-section-title desktop-center text-center">
              <span className="subtitle">EDU-PLAN UPDATES</span>
              <h4 className="title">Edu-plan Latest Blog</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="blog-grid-item">
              <div className="thumbnail">
                <img src={blog1} alt="" className="border-radius-20" />
              </div>
              <div className="content">
                <ul className="post-categories">
                  <li>
                    <img src={calender} alt="" />
                    19th Jan 2022
                  </li>
                  <li>12 noon to 4 pm</li>
                </ul>
                <h4 className="title">Overseas Education Fair Maravedi 2024</h4>
                <div className="btn-wrap">
                  <Link to="/" className="more-btn">
                    Read More <i className="fa-solid fa-angle-right icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-grid-item">
              <div className="thumbnail">
                <img src={blog1} alt="" />
              </div>
              <div className="content">
                <ul className="post-categories">
                  <li>
                    <img src={calender} alt="" />
                    19th Jan 2022
                  </li>
                  <li>12 noon to 4 pm</li>
                </ul>
                <h4 className="title">Overseas Education Fair Amravati 2023</h4>
                <div className="btn-wrap">
                  <Link to="/" className="more-btn">
                    Read More <i className="fa-solid fa-angle-right icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-grid-item">
              <div className="thumbnail">
                <img src={blog1} alt="" />
              </div>
              <div className="content">
                <ul className="post-categories">
                  <li>
                    <img src={calender} alt="" />
                    19th Jan 2022
                  </li>
                  <li>12 noon to 4 pm</li>
                </ul>
                <h4 className="title">Overseas Education Fair Maravedi 2024</h4>
                <div className="btn-wrap">
                  <Link to="/" className="more-btn">
                    Read More <i className="fa-solid fa-angle-right icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
