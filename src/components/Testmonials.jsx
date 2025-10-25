import React, { useRef } from "react";
import { testimonials } from "../utils/testmonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import SecTitle from "./SecTitle";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-secBg text-white py-20 relative">
      <SecTitle title="آراء عملائنا" />

      <div className="max-w-6xl mx-auto mt-12 px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          speed={800}
          dir="rtl"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-cardBg/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-8 mx-2 text-center transition-all duration-300 hover:bg-darkBlue/90 hover:scale-105">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-orange object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-textColor text-sm leading-relaxed mb-4">
                  {item.text}
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < item.rating ? "text-orange" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* أزرار التنقل */}
        <div className="flex  justify-center gap-6 mt-10">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex bg-primary text-white cursor-pointer p-3 rounded-full hover:bg-orange transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <FaChevronRight size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex bg-primary text-white cursor-pointer p-3 rounded-full hover:bg-orange transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <FaChevronLeft size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
