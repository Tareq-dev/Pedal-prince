import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./BestProducts.css";


const BestProduct = () => {
  return (
    <div className="py-5">
    <h1 className="text-center text-3xl mt-8 mb-8">Featured Products</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://www.thebikefactory.co.uk/content/products/trek-trek-2021-trek-rail-9-8-xt-solid-charcoal-to-root-beer-ano-decal_14503.jpg"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">Velocy 143</h1>
       <p className='text-sky-600'>$ 400</p>
       </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://c1.wallpaperflare.com/preview/89/350/418/mountain-bike-mtb-electric-bike.jpg"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">Chomug KPG</h1>
       <p className='text-sky-600'>$ 358</p>
       </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://previews.123rf.com/images/kvsan/kvsan1610/kvsan161000728/64373066-%EC%82%B0%EC%95%85-%EC%9E%90%EC%A0%84%EA%B1%B0-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-3d-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EA%B2%A9%EB%A6%AC.jpg"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">Phonix BC</h1>
       <p className='text-sky-600'>$ 320</p>
       </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://qph.fs.quoracdn.net/main-qimg-b81b589ce848df051e139919ca8967d1-lq"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">Alloy 360</h1>
       <p className='text-sky-600'>$ 558</p>
       </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://static.vecteezy.com/system/resources/previews/000/824/435/large_2x/blue-mountain-bike-isolated-over-white-background-photo.jpg"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">ChrisTine xx</h1>
       <p className='text-sky-600'>$ 442</p>
       </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://ae01.alicdn.com/kf/Hb77a709ce4264e7dbeb44ec63975ccf94/26er-Full-Carbon-SN04-Fat-Bike-3S-Spoke-Trispoke-Wheels-90mm-Wide-Fat-Bike-Wheel-Clincher.jpg_Q90.jpg_.webp"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">Maxxier N50</h1>
       <p className='text-sky-600'>$ 540</p>
       </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://singletrackworld.com/wp-content/blogs.dir/15/files/2020/01/stw-2020-01-20-Ultra-drvie-white-Left-front-angle-960x835.jpg"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">Thomson GTs</h1>
       <p className='text-sky-600'>$ 550</p>
       </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-2">
         <img
         src="https://ontrackbikes.com/wp-content/uploads/2020/12/46ABDDDE-8F6C-4C60-A356-992F151C368D-scaled-e1610116591775.jpeg"
         alt="Trek"
       />
       <div>
       <h1 className="mt-2 text-xl">Rare 71</h1>
       <p className='text-sky-600'>$ 478</p>
       </div>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestProduct;
