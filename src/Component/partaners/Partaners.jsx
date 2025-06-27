import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import one from '../../assets/partner/partnerOne.webp';
import Two from '../../assets/partner/partnerTwo.webp';
import Three from '../../assets/partner/partnerThree.webp';
import Five from '../../assets/partner/partnerFive.webp';

const brands = [
  { img: one },
  { img: Two },
  { img: Three },
  { img: Five },
  { img: one },
  { img: Two },
  { img: Three },
  { img: Five },
];

const Partaners = () => {
  return (
    <div className="container my-5">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 3, // Mobile
          },
          768: {
            slidesPerView: 4, // Tablet
          },
          992: {
            slidesPerView: 6, // Laptop and above
          },
        }}
        modules={[Pagination, Autoplay]}
        className="brand-swiper"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex partnerCol justify-content-center align-items-center rounded p-4">
              <img
                src={brand.img}
                alt={`brand-${index}`}
                style={{ maxHeight: "80px", width: "100%", objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partaners;
