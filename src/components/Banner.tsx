import React from "react";
import { ReactComponent as WorldCup } from "../assets/cup.svg";

const Banner = () => {
  return (
    <div className="inner-shadow items-center px-12 py-8 flex gap-4 bg-[#CDE53D] border-2 border-[#9EB031] relative">
      <div className="absolute top-0 w-[66.11px] h-[71px] bg-[#071D55] right-8 flex items-center justify-center text-[#F2C94C]">
        $1
      </div>
      <WorldCup />
      <h5 className="font-bold text-lg text-[#071D55] drop-shadow-2xl shadow-2xl text-shadow-white">
        Go Pro Upgrade Now
      </h5>
    </div>
  );
};

export default Banner;
