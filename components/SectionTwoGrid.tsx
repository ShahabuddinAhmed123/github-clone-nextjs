import localFont from "next/font/local";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import duoLingo from "@/public/logo-duolingo-14477f9e54a6.svg"
import gartnerImg from "@/public/logo-gartner-aa8c2e452b64.svg"
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });

const SectionTwoGrid = () => {

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
              start: "top 75%",
              end: "top 30%",
            },
          }
        );
      });
    }, { scope: container });

  return (
    <div className="w-full h-[560px] border-y border-gray-800 bg-[#0d1117] max-lg:h-full" ref={container}>
      <div className="w-[1250px] mx-auto h-full flex gap-0 max-[1280px]:w-full max-md:flex-col">
        <div className="w-[730px] border-l h-full border-gray-800 max-md:w-full max-md:border-none">
          <div className="w-full h-auto py-16 pl-12 pr-10 flex flex-col gap-5 reveal max-[1012px]:pt-8 max-[1012px]:px-6">
            <p className={`text-2xl text-[#8b949e]  ${monaSemibold.className} max-[1012px]:text-xl`}>
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

        <div className="flex flex-col w-[519px] max-md:w-full ">
          <div className="w-full py-16 px-12 flex flex-col gap-4 border-x border-gray-800 border-b reveal max-[1012px]:px-6 max-md:border-t max-md:border-x-0">
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
          <div className="w-full py-16 px-12 flex flex-col gap-4 border-x border-gray-800 reveal max-[1012px]:px-6 ">
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
