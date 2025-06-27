import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// ✅ Only import required Swiper CSS
import "swiper/css/pagination";
import './Testimonial.css'
import testimonialData from "./TestimonialData";

const Testimonials = () => {
  return (
    <section className="py-5" style={{ background: "#fff" }}>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="card p-4 h-100 border-0 shadow-sm"
                style={{ background: "#fff5ef", cursor: "grab" }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <p className="text-muted small mb-0">{item.position}</p>
                  </div>
                </div>
                <p className="text-secondary mt-2 small">“{item.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
