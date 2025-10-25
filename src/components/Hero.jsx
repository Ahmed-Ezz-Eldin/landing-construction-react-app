import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div
      style={{ background: "var(--color-gradientBg)" }}
      className="mt-[70px] overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 sm:px-0 items-center">
          {/* النص */}
          <motion.div
            className="flex flex-col gap-6 justify-center pt-5"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-[23px] sm:text-[30px] md:text-4xl font-bold text-white leading-relaxed">
              نبني أحلامك بخبرة هندسية وجودة عالية{" "}
            </h1>
            <p className="text-textColor text-base sm:text-lg leading-relaxed">
              شركة إنشاءات هندسية ناشئة تقدم خدمات التصميم والتنفيذ بأعلى معايير
              الجودة والمصداقية.
            </p>
            <motion.button
              className="rainbow w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn">احجز الان</span>
            </motion.button>
          </motion.div>

          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={heroImg}
              alt="hero-img"
              className="w-[80%] mx-auto drop-shadow-2xl"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
