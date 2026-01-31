import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-28 pb-20">
  
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
      
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-[#21243D] font-bold text-4xl md:text-5xl leading-tight">
            Hi, I am John,<br />
            Creative Technologist
          </h1>

          <p className="text-[#21243D] mt-8 mb-10 text-base leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>

          <button className="bg-[#FF6464] text-white px-7 py-3 rounded-md text-base font-medium hover:opacity-90 transition">
            Download Resume
          </button>
        </div>

     
        <div className="relative flex-shrink-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden relative z-10">
            <img
              src="./Ellipse 1.jpg"
              alt="John Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -right-6 -bottom-4 w-56 h-56 md:w-64 md:h-64 bg-[#EDF7FA] rounded-full -z-0"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
