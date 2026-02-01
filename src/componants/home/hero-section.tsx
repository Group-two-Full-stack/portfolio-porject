import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center h-[80vh] overflow-hidden items-center">
      <div className="w-full flex justify-around items-center gap-24">
        <div>
          <div className="flex flex-col gap-10 font-black">
            <h1 className="font-bold text-5xl">
              Hi, I am John, <br /> Creative Technologist
            </h1>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
              sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </div>

          <button className="mt-5 px-3  text-white">
            Download Resume
          </button>
        </div>
        

<div className="w-64 h-64 rounded-full overflow-hidden">
  <img
    src="./Ellipse 1.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </div>
  );
};

export default HeroSection;
