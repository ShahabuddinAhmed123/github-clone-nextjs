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
      <div className="h-36 w-full"></div>

      <img
        className="w-32 mx-auto reveal"
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDRudDV1Y3Q3M2MxbHhwdGNoejNjcjg1MW8wbzQ4MTRsNzNoM2lpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ou60s0z0v7JzSWGn8C/giphy.gif"
        alt="hii"
      />
      <div className="w-[1280px] h-auto mx-auto reveal">
        <p
          className={`text-[#8b949e] font-semibold text-5xl w-[1000px] mx-auto text-center ${monaSemibold.className}`}
        >
          <span className="text-white">From startups to enterprises,</span>{" "}
          GitHub scales with teams of any size in any industry.
        </p>
      </div>
      <div className="w-full h-14"></div>

      <div className="w-full h-[58px] flex items-center justify-center">
        <div className="relative w-[424px] border border-gray-600 flex items-center justify-center text-white font-semibold h-[56px] rounded-full">
          {Object.keys(accordionData.categories).map(
            (category, index: number) => (
              <button
                key={index}
                className="relative w-[140px] h-10 rounded-full z-10 cursor-pointer"
                onClick={() => setActiveCategory(category as CategoryType)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}

          <motion.div
            className="absolute w-[130px] cursor-pointer h-10 rounded-full border border-gray-400"
            layoutId="activeCategory"
            animate={{
              left:
                Object.keys(accordionData.categories).indexOf(activeCategory) *
                  140 +
                60,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            style={{
              top: "14%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>

      <div className="w-full h-14"></div>

      <div className="w-full h-[461px] border-y border-gray-800 flex justify-center items-center reveal">
        <div className="grid grid-cols-3 w-[1280px] h-full border-l border-gray-800">
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
                className="reveal h-full relative transition-all ease-in-out duration-500 border-r cursor-pointer border-gray-800 flex flex-col z-50 justify-between py-10 px-12"
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="z-50"
                />
                <Image
                  className={
                    hoveredIndex === index
                      ? "absolute top-0 left-0 transition-all duration-500 opacity-75"
                      : "hidden transition-all duration-500 opacity-0 "
                  }
                  src={item.backImage}
                  alt={item.title}
                  width={425}
                  height={4}
                />
                <div
                  className={`flex flex-col gap-3 transition-all duration-500 z-50 ${
                    hoveredIndex === index ? "" : "-mb-10"
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
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
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
