import React from "react";

const SecTitle = ({ title }) => {
  return (
    <div className="text-center relative mb-12">
      <h2 className=" text-white relative inline-block after:content-[''] after:block after:w-[80%] after:h-[3px] after:bg-textColor  after:mx-auto after:mt-3 after:rounded-full ">
        {title}
      </h2>

      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-3px]  w-2 h-2 bg-[#FCA311] rounded-full animate-slide-dot"></span>
    </div>
  );
};

export default SecTitle;
