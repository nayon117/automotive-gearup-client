
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'




const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <div>
        <h2 className="title text-center">Testimonials</h2>
        <p className="subtitle mt-3">
        Discover the Stories of Delighted Customers
        </p>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 bg-third py-10 flex flex-col items-center ">
                    <Rating style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly />
                    <BiSolidQuoteLeft className="text-xl mt-4 text-second"></BiSolidQuoteLeft>
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonial;