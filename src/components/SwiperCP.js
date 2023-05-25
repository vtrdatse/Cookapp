import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsSearch } from "react-icons/bs";

const SwiperCP = ({ data }) => {
  return (
    <div className="swiper-cp-container">
      <h3>{data.title}</h3>
      <div style={{ padding: "30px 10%" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={BsSearch}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="SwiperSlide-container">
                <img src={slide.img} />
                <div>
                  <h3>
                    <b>{slide.text}</b>
                  </h3>
                  <span>{slide.desc}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCP;
