import localFont from "next/font/local";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import duoLingo from "@/public/logo-duolingo-14477f9e54a6.svg"
import gartnerImg from "@/public/logo-gartner-aa8c2e452b64.svg"
import Image from "next/image";

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });

const SectionTwoGrid = () => {
  return (
    <div className="w-full h-[560px] border-y border-gray-800 bg-[#0b0f1e]">
      <div className="w-[1250px] mx-auto h-full flex gap-0">
        <div className="w-[730px] border-x h-full border-gray-800">
          <div className="w-full h-auto py-16 pl-12 pr-10 flex flex-col gap-5">
            <p className={`text-2xl text-[#8b949e]  ${monaSemibold.className}`}>
              <span className="text-white">Work 55% faster.</span> Increase
              productivity with AI-powered coding assistance, including code
              completion, chat, and more.
            </p>
            <div className="flex text-lg items-center gap-1 text-[#55a8d1] font-semibold">
            <a href="#" className=" underline-animation ">Explore GitHub Copilot</a>
            <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[519px]">
          <div className="w-full py-16 px-12 flex flex-col gap-4 border-r border-gray-800 border-b">
            <Image
            alt="duoLingo image" 
            src={duoLingo}
            />
            <p className="text-lg text-[#8b949e] font-semibold mb-1">Duolingo boosts developer speed by 25% with GitHub Copilot</p>
            <div className="flex text-lg items-center gap-1 text-[#55a8d1] font-semibold">
            <a href="#" className=" underline-animation mb-1">Read customer story</a>
            <IoIosArrowForward />
            </div>
          </div>
          <div className="w-full py-16 px-12 flex flex-col gap-4 border-r border-gray-800">
          <Image
          alt="duolingo image"
            src={gartnerImg}
            />
            <p className="text-lg text-[#8b949e] font-semibold mb-1">2024 Gartner® Magic Quadrant™ for AI Code Assistants</p>
            <div className="flex text-lg items-center gap-1 text-[#55a8d1] font-semibold">
            <a href="#" className=" underline-animation mb-1">Read report</a>
            <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwoGrid;
