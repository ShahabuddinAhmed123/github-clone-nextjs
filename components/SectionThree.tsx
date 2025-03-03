import localFont from "next/font/local";
import { IoIosArrowForward } from "react-icons/io";
import sectionThreeImage from "@/public/section-three-imageOne.webp";
import SectionThreeGrid from "./SectionThreeGrid";
import Image from "next/image";
  import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });

const SectionThree = () => {
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
            start: "top 80%",
            end: "top 30%",
          },
        }
      );
    });
  }, { scope: container });

  return (
    <div className="w-full h-auto bg-[#0d1117]" ref={container}>
      <div className="h-36"></div>
      <div className="h-auto w-[1280px] mx-auto max-[1280px]:w-full">
        <div className="h-full w-full flex flex-col items-center justify-center gap-5 text-white relative">
          <div className="">
          <Image
            src="/particles.png"
            width={512}
            height={200}
            className=" absolute top-0 left-1/2 z-0 transform translate-x-[-50%]"
            alt="hii"
          />
          </div>

          <div className="shadow absolute z-0">
            <div className="shadowBackground">
              <div className="shadowDiv">
                <p>Todrick</p>
              </div>
            </div>
          </div>
          <div
            className={`reveal text-5xl w-[650px] text-center max-[1012px]:text-4xl max-[1012px]:w-[80%] max-[768px]:w-5/6 max-[768px]:text-3xl ${monaSemibold.className}`}
          >
            <h1>Built-in application security where found means fixed</h1>
          </div>
          <span className="reveal text-2xl w-[713px] text-center text-[#ffffffd9] z-20 max-[1012px]:text-lg max-[1012px]:w-3/5 max-[768px]:w-5/6">
            Use AI to find and fix vulnerabilities—freeing your teams to ship
            more secure software faster.
          </span>
        </div>
      </div>
      <div className="h-20 w-full"></div>

      <div className="w-[1280px] mx-auto border-t border-x border-gray-500 rounded-t-3xl h-auto py-20 px-16 flex gap-5 items-center bg-gradient-to-t from-[#26374b] via-transparent to-transparent
       max-[1280px]:w-[93%] max-[1012px]:w-full max-[1012px]:rounded-none max-[1012px]:border-x-0 max-[1012px]:py-16 max-[1012px]:pr-0 max-[1012px]:pl-6 max-[768px]:flex-col-reverse ">
        <div className="w-[48%] h-full pr-28 flex flex-col gap-5 max-[1280px]:pr-12 max-[1012px]:pr-8 max-[1012px]:w-[42%] max-[768px]:w-full">
          <p
            className={`${monaSemibold.className} text-2xl text-[#8b949e] font-semibold reveal max-[1012px]:text-xl`}
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

        <div className="w-[50%] p-2 rounded-3xl backdrop-blur-sm border z-20 border-gray-500 reveal max-[1012px]:pr-0 max-[1012px]:rounded-r-none max-[1012px]:border-r-0 max-[1012px]:w-[57%] max-[768px]:w-full">
          <Image
            src={sectionThreeImage}
            alt="section three image"
            className="rounded-2xl max-[1012px]:rounded-r-none"
          />
        </div>
      </div>
      <SectionThreeGrid />
    </div>
  );
};

export default SectionThree;
