import React from "react";
import { avatar } from "../assets";

const Header = () => {
  return (
    <div className="flex gap-4 bg-[#3556AB] h-[123px]  px-12 py-8">
      <img className="h-16 w-16 rounded-full" src={avatar} alt="avatar" />
      <div className="space-y-2">
        <h5 className="font-medium text-base  text-white text-shadow">Hello, Jhon</h5>
        <p className="text-[25px] italic font-thin text-white text-shadow">
          What are your plans for today?
        </p>
      </div>
    </div>
  );
};

export default Header;
