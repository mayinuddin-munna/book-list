import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Destinations from "../Destinations/Destinations";
import Faq from "../Faq/Faq";
import Features from "../Features/Features";
import Feedback from "../Feedback/Feedback";
import News from "../News/News";
import Steps from "../Steps/Steps";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Feedback />
      <Destinations />
      <About />
      <Category />
      <Steps />
      <News />
      <Faq />
    </>
  );
};

export default Home;
