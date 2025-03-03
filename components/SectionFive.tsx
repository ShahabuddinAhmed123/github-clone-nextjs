import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import accordionData from "../constants/SectionFiveAccordion";
import Image from "next/image";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import { IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type CategoryType = keyof typeof accordionData.categories;
const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });

export default function SectionFive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("By industry");
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
              start: "top 85%",
              end: "top 30%",
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <div className="sectioFive w-full h-auto bg-[#0d1117]" ref={container}>
      <div className="h-36 w-full max-[1012px]:h-24"></div>

      <img
        className="w-32 mx-auto reveal max-md:w-28"
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDRudDV1Y3Q3M2MxbHhwdGNoejNjcjg1MW8wbzQ4MTRsNzNoM2lpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ou60s0z0v7JzSWGn8C/giphy.gif"
        alt="hii"
      />
      <div className="w-[1280px] h-auto mx-auto reveal max-[1280px]:w-full">
        <p
          className={`text-[#8b949e] font-semibold text-5xl w-[1000px] mx-auto text-center max-[1012px]:w-[80%] max-[1012px]:text-4xl max-md:text-3xl ${monaSemibold.className}`}
        >
          <span className="text-white">From startups to enterprises,</span>{" "}
          GitHub scales with teams of any size in any industry.
        </p>
      </div>
      <div className="w-full h-14 max-[1012px]:h-8"></div>

      <div className="w-full h-[58px] flex items-center justify-center">
        <div className="relative w-[424px] border border-gray-600 flex items-center justify-center text-white font-semibold h-[56px] rounded-full max-[1012px]:w-[382px] max-md:w-auto max-md:flex-wrap max-[700px]:h-auto">
          {Object.keys(accordionData.categories).map(
            (category, index: number) => (
              <button
                key={index}
                className="relative w-[140px] h-10 rounded-full z-10 cursor-pointer max-[1012px]:w-[121px]"
                onClick={() => setActiveCategory(category as CategoryType)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}

          <motion.div
            className="absolute w-[130px] cursor-pointer h-10 rounded-full border border-gray-400 max-[1012px]:w-[121px]"
            layoutId="activeCategory"
            animate={{
              left:
                Object.keys(accordionData.categories).indexOf(activeCategory) *
                  140 +
                80,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            style={{
              top: "14%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>

      <div className="w-full h-14 max-[1012px]:h-8"></div>

      <div className="w-full h-[461px] border-y border-gray-800 flex justify-center items-center reveal max-[1012px]:h-auto">
        <div className="grid grid-cols-3 w-[1280px] h-full border-l border-gray-800 max-[1012px]:grid-cols-1 max-[1012px]:w-[75%] max-md:w-full">
          <AnimatePresence mode="popLayout">
            {accordionData.categories[activeCategory].map((item, index) => (
              <motion.div
                key={item.title}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="reveal h-full relative transition-all ease-in-out duration-500 border-r cursor-pointer border-gray-800 flex flex-col z-50 justify-between py-10 px-12 max-[1012px]:p-6 max-[1012px]:gap-10
                 max-[1012px]:border-b "
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="z-50 max-[1012px]:mb-16"
                />
                <Image
                  className={
                    hoveredIndex === index
                      ? "absolute top-0 left-0 transition-all duration-500 opacity-75 max-[1012px]:hidden"
                      : "hidden transition-all duration-500 opacity-0 "
                  }
                  src={item.backImage}
                  alt={item.title}
                  width={425}
                  height={4}
                />
                <div
                  className={`flex flex-col gap-3 transition-all duration-500 z-50 ${
                    hoveredIndex === index ? "max-[1012px]:mb-0" : "-mb-10 max-[1012px]:mb-0 max-md:-mb-10"
                  }`}
                >
                  <span className="text-[#8b949e] font-semibold">
                    {item.category}
                  </span>
                  <p
                    className={`text-2xl font-bold text-white ${monaSemibold.className}`}
                  >
                    {item.description}
                  </p>
                  <div
                    className={`flex text-lg items-center gap-1 text-[#55a8d1] font-semibold transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100 " : "opacity-0 max-[1012px]:opacity-100 max-md:opacity-0"
                    }`}
                  >
                    <a href="#" className="underline-animation mb-1">
                      {item.anchorTag}
                    </a>
                    <IoIosArrowForward />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
