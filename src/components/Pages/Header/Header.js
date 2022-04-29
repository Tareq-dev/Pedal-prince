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
        <div className="absolute bottom-20 left-0 h-100 w-100">
          <h1 className="text-7xl font-serif font-extrabold text-white">
            Hello world!
          </h1>
          <div className="flex justify-center">
            <p className="text-white swiper-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              veniam beatae unde officia pariatur animi rem tempore suscipit
              laboriosam, cupiditate ullam! Blanditiis deserunt voluptate
              perspiciatis?
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
        <div className="absolute bottom-20 left-0 h-100 w-100">
          <h1 className="text-7xl font-serif font-extrabold text-white">
            Hello world!
          </h1>
          <div className="flex justify-center">
            <p className="text-white swiper-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              veniam beatae unde officia pariatur animi rem tempore suscipit
              laboriosam, cupiditate ullam! Blanditiis deserunt voluptate
              perspiciatis?
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
        <div className="absolute bottom-20 left-0 h-100 w-100">
          <h1 className="text-7xl font-serif font-extrabold text-white">
            Hello world!
          </h1>
          <div className="flex justify-center">
            <p className="text-white swiper-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              veniam beatae unde officia pariatur animi rem tempore suscipit
              laboriosam, cupiditate ullam! Blanditiis deserunt voluptate
              perspiciatis?
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
