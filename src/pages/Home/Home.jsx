import Banner from "./Banner";
import Offer from "./Offer";
import Testimonial from "./Testimonial";
import TopCar from "./TopCar";
import WhyChoose from "./WhyChoose";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCar/>
      <WhyChoose></WhyChoose>
      <Offer></Offer>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
