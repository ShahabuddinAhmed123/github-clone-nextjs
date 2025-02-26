import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SECTION_THREE_GRID } from "@/constants/SectionThreeGrid"
import localFont from "next/font/local";

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });
interface GridItem {
    spanData: string;
    content: string;
    gridIMage: StaticImageData;
    anchorData: string;
  }

export default function SectionThreeGrid() {
  return (
    <div className="w-full border-t border-gray-800">
      <div className="w-[1280px] mx-auto h-auto ">
        <div className="w-full grid grid-cols-3 gap-0 h-[585px] border-l border-b border-gray-800">
            {SECTION_THREE_GRID.map((item:GridItem, index:number) => (
          <div className={`pt-16 pl-12 border-r border-gray-800 ${monaSemibold.className}`} key={index}>
            <p className="pr-8 mb-6 text-[#8b949e] font-semibold text-lg">
              <span className="text-white">{item.spanData}</span> {item.content}</p>
            <div className="flex items-center gap-1 text-[#55a8d1] font-semibold mb-6">
              <a href="#" className="underline-animation mb-1">{item.anchorData}</a>
              <IoIosArrowForward />
            </div>
            <Image
            src={item.gridIMage}
            alt="grid images"
            />
          </div>
            ))}
        </div>
        <div className="w-full h-auto flex gap-0 border-x border-b border-gray-800">
            <div className="py-24 px-12 w-1/2 border-r border-gray-800 flex flex-col justify-center">
            <h1 className={`text-[40px] text-white ${monaSemibold.className}`}>7x faster</h1>
            <p className="text-lg text-[#8b949e] font-semibold">vulnerability fixes with GitHub.</p>
            </div>
            <div className="py-24 px-12 w-1/2">
            <h1 className={`text-[40px] text-white ${monaSemibold.className}`}>90% coverage</h1>
            <p className="text-lg text-[#79c0ff] w-[383px]">of alert types in all supported languages with Copilot Autofix</p>
            </div>
        </div>
      </div>
    </div>
  );
}
