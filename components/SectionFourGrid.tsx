import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import localFont from "next/font/local";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });
export default function SectionFourGrid() {
  const container = useRef(null);
  
    useGSAP(() => {
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
              start: "top 85%",
              end: "top 30%",
            },
          }
        );
      });
    }, { scope: container });

  return (
    <div className="w-full h-auto border-y border-gray-800" ref={container}>
      <div className="w-[1280px] h-auto grid grid-cols-2 mx-auto border-x border-gray-800">
        <div className="reveal py-16 pl-12 pr-8 flex flex-col gap-5 border-r border-gray-800">
          <p
            className={` text-[#8b949e] font-semibold text-2xl pr-8 ${monaSemibold.className}`}
          >
            <span className="text-white">Your workflows, your way.</span> Plan
            effectively with an adaptable spreadsheet that syncs with your work.
          </p>
          <div className="flex items-center text-lg gap-1 text-[#55a8d1] font-semibold mb-6">
            <a href="#" className="underline-animation mb-1">
              Jump into GitHub Projects
            </a>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="reveal py-16 px-12 flex flex-col gap-7">
          <p className=" text-green-500 text-2xl ">
            {" "}
            <BiSolidQuoteLeft />
          </p>
          <p className={`text-white font-semibold text-2xl  ${monaSemibold.className}`}>
            It helps us onboard new software engineers and get them productive
            right away. We have all our source code, issues, and pull requests
            in one place... GitHub is a complete platform that frees us from
            menial tasks and enables us to do our best work.
          </p>
          <div className="text-base text-white">
          <p className={` ${monaSemibold.className}`}>Fabian Faulhaber</p>
          <p className="font-light">Application manager at Mercedes-Benz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
