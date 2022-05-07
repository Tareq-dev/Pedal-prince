import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Header.css";

const Header = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="w-100 relative"
          src="https://cdn.shopify.com/s/files/1/0052/2783/9586/files/terro_palm_WEB_700x.jpg?v=1630547958"
          alt=""
        />
        <div className="absolute bottom-20 h-100 w-100">
          <h1 className="md:text-5xl font-serif font-extrabold text-white">
            LET US HELP YOU PICK
          </h1>
          <div className="flex justify-center">
            <p className="text-white swiper-para">
              Our cycle guide can help you narrow your search.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-100 relative"
          src="https://cdn.shopify.com/s/files/1/0052/2783/9586/files/chromag-2022-apparel-slider_1200x.jpg?v=1650556932"
          alt=""
        />
        <div className="absolute bottom-20 h-100 w-100">
          <h1 className="md:text-5xl font-serif font-extrabold text-white">
            Welcome to Ride!
          </h1>
          <div className="flex justify-center">
            <p className="text-white swiper-para">
            Cycling is one of the best exercises. You can cycle across scenic landscapes, enjoy the sceneries, and also become fit.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="w-100 relative"
          src="https://cdn.shopify.com/s/files/1/0052/2783/9586/files/chromag-rift-pinkbike-slider_1200x.jpg?v=1646255260"
          alt=""
        />
        <div className="absolute bottom-20  h-100 w-100">
          <h1 className="md:text-5xl font-serif font-extrabold text-white">
            Cycling vs Benefits!
          </h1>
          <div className="flex justify-center">
            <p className="text-white swiper-para">
            when you choose cycling over other workouts to stay healthy, you also give yourself various other benefits. 
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
