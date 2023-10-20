import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Slider = () => {
  return (
    <div className="my-16">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="relative">
          <img src="https://i.ibb.co/xHjgDgq/mercedez-640x426.webp" alt="" />
          <div className="absolute top-1/4 left-[70%]">
            <img
              className="w-1/2 lg:w-1/3 rounded-full"
              src="https://i.ibb.co/DD6xMJ8/discount.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://i.ibb.co/YBRgSBH/toyota-640x426.webp" alt="" />
          <div className="absolute top-1/4 left-[70%]">
            <img
              className="w-1/2 lg:w-1/3 rounded-full"
              src="https://i.ibb.co/DD6xMJ8/discount.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://i.ibb.co/xh5FTPW/bmw3.jpg" alt="" />
          <div className="absolute top-1/4 left-[70%]">
            <img
              className="w-1/2 lg:w-1/3 rounded-full"
              src="https://i.ibb.co/DD6xMJ8/discount.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
