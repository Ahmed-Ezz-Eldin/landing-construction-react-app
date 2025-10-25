import SecTitle from "./SecTitle";
import { services } from "../utils/services.jsx";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="bg-secBg py-20">
      <SecTitle title="خدماتنا" />
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-3 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, 
              }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon()}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
