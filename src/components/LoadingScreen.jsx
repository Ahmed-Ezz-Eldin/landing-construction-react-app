import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-secBg flex flex-col items-center justify-center z-50">
      {/* Optional logo or brand name */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-orange mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        شركة البناء الحديثة
      </motion.h1>

      {/* Animated loader dots */}
      <div className="flex space-x-2 mt-2">
        <span className="w-3 h-3 bg-orange rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-orange rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-orange rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
