import React from "react";
import SecTitle from "./SecTitle";
import { projects } from "../utils/projects";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="py-20 bg-cardBg">
      <SecTitle title="أعمالنا" />

      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              {/* الصورة */}
              <motion.img
                src={project.img}
                alt={project.title}
                fetchPriority="low"
                decoding="async"
                loading="lazy"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* الـ Overlay - يظهر ويختفي بسلاسة */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-center items-center text-center p-6"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-xl font-bold text-orange mb-2"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-gray-200 text-sm"
                >
                  {project.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Portfolio;
