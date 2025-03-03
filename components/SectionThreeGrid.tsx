import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SECTION_THREE_GRID } from "@/constants/SectionThreeGrid";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });
interface GridItem {
  spanData: string;
  content: string;
  gridIMage: StaticImageData;
  anchorData: string;
  inverse: boolean;
}

export default function SectionThreeGrid() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.utils.toArray(".reveal-left").forEach((element) => {
        gsap.fromTo(
          element as HTMLElement,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element as HTMLElement,
              start: "top 80%",
              end: "top 30%",
            },
          }
        );
      });
      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(
          element as HTMLElement,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element as HTMLElement,
              start: "top 75%",
              end: "top 30%",
            },
          }
        );
      });
    },
    { scope: container }
  );
  return (
    <div className="w-full border-t border-gray-800" ref={container}>
      <div className="w-[1280px] mx-auto h-auto max-[1280px]:w-full ">
        <div className="w-full grid grid-cols-3 gap-0 h-[585px] border-l border-b border-gray-800 max-[1012px]:grid-cols-2 max-[1012px]:h-full max-[768px]:grid-cols-1">
          {SECTION_THREE_GRID.map((item: GridItem, index: number) => (
            <div
              className={`pt-16 pl-12 border-r border-gray-800 reveal-left flex flex-col justify-between max-[1012px]:pl-6 ${
                monaSemibold.className
              } ${
                item.inverse === true ? "max-[1012px]:border-t " : "border-t-0"
              } `}
              key={index}
            >
              <div>
                <p className="pr-8 mb-6 text-[#8b949e] font-semibold text-lg">
                  <span className="text-white">{item.spanData}</span>{" "}
                  {item.content}
                </p>
                <div className="flex items-center gap-1 text-[#55a8d1] font-semibold mb-6">
                  <a href="#" className="underline-animation mb-1">
                    {item.anchorData}
                  </a>
                  <IoIosArrowForward />
                </div>
              </div>
              <Image src={item.gridIMage} alt="grid images" className="" />
            </div>
          ))}
          <div className="w-full h-full flex flex-col gap-0 border-b border-gray-800 min-[1013px]:hidden ">
            <div className="py-16 px-6 w-full h-full border-y border-gray-800 flex flex-col justify-center">
              <h1
                className={`text-3xl text-white  ${monaSemibold.className}`}
              >
                7x faster
              </h1>
              <p className="text-lg text-[#8b949e] font-semibold">
                vulnerability fixes with GitHub.
              </p>
            </div>
            <div className="py-16 px-6 w-full h-full">
              <h1
                className={`text-3xl text-white  ${monaSemibold.className}`}
              >
                90% coverage
              </h1>
              <p className="text-lg text-[#79c0ff] ">
                of alert types in all supported languages with Copilot Autofix
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex gap-0 border-x border-b border-gray-800 max-[1012px]:hidden ">
          <div className="py-24 px-12 w-1/2 border-r border-gray-800 flex flex-col justify-center">
            <h1 className={`text-[40px] text-white  ${monaSemibold.className}`}>
              7x faster
            </h1>
            <p className="text-lg text-[#8b949e] font-semibold">
              vulnerability fixes with GitHub.
            </p>
          </div>
          <div className="py-24 px-12 w-1/2">
            <h1 className={`text-[40px] text-white  ${monaSemibold.className}`}>
              90% coverage
            </h1>
            <p className="text-lg text-[#79c0ff] w-[383px]">
              of alert types in all supported languages with Copilot Autofix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
