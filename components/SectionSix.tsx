import localFont from "next/font/local";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
// import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });
const monaLightFont = localFont({ src: "../app/fonts/MonaSans-Light.otf" });

export default function SectionSix() {
  const container = useRef(null);
  
  useGSAP(
    () => {
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
              start: "top 80%",
              end: "top 30%",
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full h-auto bg-[#0d1117] relative" ref={container}>
      <div className="h-12 w-full max-lg:hidden"></div>
      <div className="h-auto w-[1280px] flex items-center justify-center mx-auto gap-4 max-[1280px]:w-full max-lg:flex-col max-lg:gap-0">
        <div className="flex text-lg py-6 items-center gap-1 text-[#55a8d1] font-semibold max-lg:border-b max-lg:border-gray-800 max-lg:w-full max-lg:px-6 max-lg:justify-center">
          <a href="#" className="underline-animation mb-1">
            Explore customer stories
          </a>
          <IoIosArrowForward />
        </div>
        <hr className="transform rotate-90 w-8 border border-gray-700 max-lg:hidden" />
        <div className="flex text-lg py-6 items-center gap-1 text-[#55a8d1] font-semibold max-lg:border-b max-lg:border-gray-800 max-lg:w-full max-lg:px-6 max-lg:justify-center">
          <a href="#" className="underline-animation mb-1">
            View all solutions
          </a>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="w-full py-24 h-auto flex flex-col items-center justify-center max-lg:py-16 max-md:py-12">
        {/* <div className="w-[1280px] reveal h-auto" > 
          <Image width={1280} height={400} className="cover" src="/download.png" alt="hiii" />
        </div> */}
        <div className="w-[1280px] h-auto px-12 max-[1280px]:w-full">
          <div className="w-[1020px] flex flex-col gap-5 items-center text-center mx-auto h-auto max-[1080px]:w-full">
            <h2 className={`reveal text-white text-7xl max-lg:text-5xl ${monaSemibold.className}`}>
              Millions of developers and businesses call GitHub home
            </h2>
            <p
              className={`reveal text-[#8b949e] text-lg ${monaLightFont.className} font-semibold max-w-[680px] `}
            >
              Whether you’re scaling your development process or just learning
              how to code, GitHub is where you belong. Join the world’s most
              widely adopted AI-powered developer platform to build the
              technologies that redefine what’s possible.
            </p>
            <div className="reveal h-14 flex gap-5 mt-4 max-md:flex-col max-md:h-auto max-md:w-full max-md:items-center max-md:gap-4">
              <div className=" w-[475px] p-1 h-14 flex items-center gap-2 bg-white rounded-md max-sm:w-full max-sm:flex-col max-sm:h-auto">
                <input
                  className="w-[260px] h-full px-4 py-3 text-black outline-blue-500 rounded-md placeholder:text-[#555555] placeholder:font-semibold max-sm:w-full max-sm:h-[46px]"
                  placeholder="Enter your email"
                  type="text"
                />
                <button className=" w-[200px] h-full bg-green-600 text-white font-semibold rounded-md hover:bg-green-800 transition-all duration-300 max-sm:h-11 max-sm:w-full">
                  Sign up for GitHub
                </button>
              </div>
              <button className=" w-[204px] rounded-md border-2 text-white font-semibold hover:bg-gray-800 transition-all duration-300 max-md:h-[56px] max-sm:w-full">
                Try GitHub Copilot
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-center px-10 max-sm:px-4">
        <ul className="w-[1280px] py-20 h-auto flex flex-col gap-6 list-decimal text-sm pl-4">
          <li className=" reveal text-blue-500 font-semibold cursor-pointer hover:underline">
            Survey: The AI wave continues to grow on software development teams,
            2024.
          </li>
          <li className="reveal text-[#8b949e]">
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