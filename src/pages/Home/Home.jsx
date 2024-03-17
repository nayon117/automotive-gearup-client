import Banner from "./Banner";
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import Testimonial from "./Testimonial";
import TopCar from "./TopCar";
import WhyChoose from "./WhyChoose";
const Home = () => {
  return (
    <div>
      <Banner/>
      <TopCar/>
      <WhyChoose/>
      <Offer/>
      <Testimonial/>
      <Newsletter/>
    </div>
  );
};

export default Home;
