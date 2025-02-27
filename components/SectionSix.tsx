import localFont from "next/font/local";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });
const monaLightFont = localFont({ src: "../app/fonts/MonaSans-Light.otf" });

export default function SectionSix() {
  return (
    <div className="w-full h-auto bg-[#0b0f1e]">
      <div className="h-12 w-full"></div>
      <div className="h-auto w-[1280px] flex items-center justify-center mx-auto gap-4">
        <div className="flex text-lg py-6 items-center gap-1 text-[#55a8d1] font-semibold">
          <a href="#" className="underline-animation mb-1">
            Explore customer stories
          </a>
          <IoIosArrowForward />
        </div>
        <hr className="transform rotate-90 w-8 border border-gray-700" />
        <div className="flex text-lg py-6 items-center gap-1 text-[#55a8d1] font-semibold">
          <a href="#" className="underline-animation mb-1">
            View all solutions
          </a>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="w-full py-24 h-auto flex flex-col items-center justify-center">
        <canvas className="w-[1280px]" />
        <div className="w-[1280px] h-auto px-12">
          <div className="w-[1020px] flex flex-col gap-5 items-center text-center mx-auto h-auto">
            <h2 className={`text-white text-7xl ${monaSemibold.className}`}>
              Millions of developers and businesses call GitHub home
            </h2>
            <p
              className={`text-[#8b949e] text-lg ${monaLightFont.className} font-semibold max-w-[680px] `}
            >
              Whether you’re scaling your development process or just learning
              how to code, GitHub is where you belong. Join the world’s most
              widely adopted AI-powered developer platform to build the
              technologies that redefine what’s possible.
            </p>
            <div className=" h-14 flex gap-5 mt-4">
              <div className="w-[475px] p-1 h-14 flex items-center gap-2 bg-white rounded-md">
                <input
                  className="w-[260px] h-full px-4 py-3 text-black outline-blue-500 rounded-md placeholder:text-[#555555] placeholder:font-semibold"
                  placeholder="Enter your email"
                  type="text"
                />
                <button className="w-[200px] h-full bg-green-600 text-white font-semibold rounded-md hover:bg-green-800 transition-all duration-300">
                  Sign up for GitHub
                </button>
              </div>
              <button className="w-[204px] rounded-md border-2 text-white font-semibold hover:bg-gray-800 transition-all duration-300">
                Try GitHub Copilot
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-center">
        <ul className="w-[1280px] py-20 h-auto flex flex-col gap-6 list-decimal text-sm">
          <li className=" text-blue-500 font-semibold cursor-pointer hover:underline">
            Survey: The AI wave continues to grow on software development teams,
            2024.
          </li>
          <li className="text-[#8b949e]">
            This 7X times factor is based on data from the industry’s longest
            running analysis of fix rates Veracode State of Software Security
            2023, which cites the average time to fix 50% of flaws as 198 days
            vs. GitHub’s fix rates of 72% of flaws with in 28 days which is at a
            minimum of 7X faster when compared.
          </li>
        </ul>
      </div>
    </div>
  );
}