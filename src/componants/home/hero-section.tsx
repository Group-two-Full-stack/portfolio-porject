
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center h-[80vh] overflow-hidden items-center ">
      <div className="w-full flex justify-around items-center">
        <div>
          <div className="flex flex-col gap-10">
        <h1 className="font-bold text-5xl"> Hi, I am John, <br /> Creative Technologist </h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
      </div>
    
       <button className="mt-5 px-3 py-2 bg-[#FF6464] text-white rounded-sm cursor-pointer hover:scale-105 transition-all duration-300">Download Resume  </button>

        </div>
      <div>
    <img className="w-75" src="./img.png" alt="" />
      </div>
      </div>
     
    </div>
  );
};

export default HeroSection;
