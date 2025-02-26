import localFont from "next/font/local";
import { IoIosArrowForward } from "react-icons/io";
import sectionThreeImage from "@/public/section-three-imageOne.webp";
import SectionThreeGrid from "./SectionThreeGrid";
import Image from "next/image";

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });

const SectionThree = () => {
  return (
    <div className="w-full h-auto bg-[#0b0f1e]">
      <div className="h-36"></div>
      <div className="h-auto w-[1280px] mx-auto">
        <div className="h-full w-full flex flex-col items-center justify-center gap-5 text-white relative">
          <img
            src="/particles.png"
            className="absolute top-0 w-[512px] left-1/2 z-10 transform translate-x-[-50%]"
            alt=""
          />

          <div className="shadow absolute z-0">
            <div className="shadowBackground">
              <div className="shadowDiv">
                <p>Todrick</p>
              </div>
            </div>
          </div>
          <div
            className={`text-5xl w-[650px] text-center ${monaSemibold.className}`}
          >
            <h1>Built-in application security where found means fixed</h1>
          </div>
          <span className="text-2xl w-[713px] text-center text-[#ffffffd9] z-50">
            Use AI to find and fix vulnerabilities—freeing your teams to ship
            more secure software faster.
          </span>
        </div>
      </div>
      <div className="h-20 w-full"></div>
      <div className="w-[1280px] mx-auto border-t border-x border-gray-500 rounded-t-3xl h-auto py-20 px-16 flex gap-3 items-center bg-gradient-to-t from-[#26374b] via-transparent to-transparent">
        <div className="w-[48%] h-full pr-28 flex flex-col gap-5">
          <p
            className={`${monaSemibold.className} text-2xl text-[#8b949e] font-semibold`}
          >
            <span className="text-white">Apply fixes in seconds.</span> Spend
            less time fixing vulnerabilities and more time building features
            with Copilot Autofix.
          </p>
          <div className="flex text-lg items-center gap-1 text-[#55a8d1] font-semibold">
            <a href="#" className="underline-animation mb-1">
              Explore GitHub Advanced Security
            </a>
            <IoIosArrowForward />
          </div>
        </div>

        <div className="w-[50%] p-2 rounded-3xl backdrop-blur-sm border z-50 border-gray-500">
          <Image
            src={sectionThreeImage}
            alt="section three image"
            className="rounded-2xl"
          />
        </div>
      </div>
      <SectionThreeGrid />
    </div>
  );
};

export default SectionThree;
