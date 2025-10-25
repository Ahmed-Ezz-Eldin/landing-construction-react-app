import React from "react";
import SecTitle from "./SecTitle";
import { reasons } from "../utils/about";

const About = () => {
  return (
    <section
      className="py-20"
      style={{ background: "var(--color-gradientBg)" }}
    >
      <SecTitle title="لماذا نحن" />
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 mt-12">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-cardBg border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-darkBlue/90 hover:scale-[1.03]"
            >
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 border border-primary shadow-md">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-textColor text-sm leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
