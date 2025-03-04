"use client";

import localFont from "next/font/local";
import { useParallax } from "react-scroll-parallax";
import { JSX, useEffect, useRef, useState } from "react";
import SectionTwo from "@/components/SectionTwo";
import { Play } from "lucide-react";
import { Pause } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import heroAccordion from "../constants/HeroAccordion";
import Image from "next/image";
import SliderComponent from "./libs/LogoSlider";

type CategoryType = keyof typeof heroAccordion.categories;

const monaLight = localFont({ src: "/fonts/MonaSans-Regular.otf" });
const monaSemibold = localFont({ src: "/fonts/MonaSans-SemiBold.otf" });

export default function Home(): JSX.Element {
  const target = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefDesktop = useRef<HTMLVideoElement | null>(null);
  const videoRefResponsive = useRef<HTMLVideoElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Code");
  const [scrollY, setScrollY] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  const videoDiv = useParallax<HTMLDivElement>({
    speed: 5,
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRefDesktop.current?.pause();
      videoRefResponsive.current?.pause();
    } else {
      videoRefDesktop.current?.play();
      videoRefResponsive.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  const opacity = Math.max(1 - scrollY / 600, 0);
  const scale = Math.max(1 - scrollY / 5000, 0.8);

  return (
    <>
      <div
        ref={target}
        className={`${monaLight.className} text-white min-h-[80vh] w-full flex flex-col z-0 items-center justify-center relative max-sm:h-[60vh]`}
      >
        <motion.div
          className="w-[970px] h-[80vh] max-md:h-[50vh] flex justify-center md:fixed z-0 max-sm:h-full max-md:w-full"
          style={screenWidth > 768 ? { opacity, scale } : {}}
          transition={{ duration: 2.5 }}
        >
          <div className="w-full relative h-auto flex flex-col items-center gap-8 px-6 text-center mt-20 max-md:mt-0 max-md:gap-6 max-sm:w-full  max-sm:my-auto">
            <div className="shadowww absolute top-[58vh] z-0 max-md:hidden">
            <div className="shadow3Background">
              <div className="shadow3Div">
                <p>Todrick</p>
              </div>
            </div>
          </div>
            <div className="">
              <Image
                src="/particles.png"
                width={512}
                height={200}
                className=" absolute top-1/3 left-1/2 z-0 transform translate-x-[-50%] max-md:hidden"
                alt="hii"
              />
            </div>
            <h1
              className={`text-6xl ${monaSemibold.className} max-[1012px]:text-5xl max-[1012px]:w-[680px] max-md:text-4xl max-sm:w-full`}
            >
              Build and ship software on a single, collaborative platform
            </h1>
            <p className="text-lg">
              Join the world’s most widely adopted AI-powered developer
              platform.
            </p>
            <div className="w-[670px] h-14 flex gap-5 max-md:flex-col max-md:h-auto max-md:w-full max-md:items-center max-md:gap-4">
              <div className="w-[475px] p-1 h-14 flex items-center gap-2 bg-white rounded-md max-sm:w-full max-sm:flex-col max-sm:h-auto">
                <input
                  className="w-[260px] h-full px-4 py-3 text-black outline-blue-500 rounded-md placeholder:text-[#777] max-sm:w-full max-sm:h-[46px]"
                  placeholder="Enter your email"
                  type="text"
                />
                <button className="w-[200px] h-full bg-green-700 rounded-md hover:bg-green-800 transition-all duration-300 max-sm:h-11 max-sm:w-full">
                  Sign up for GitHub
                </button>
              </div>
              <button className="w-[204px] rounded-md border-2 bg-[#1a1c44] hover:bg-[#2c2f61] transition-all duration-300 max-md:h-[56px] max-sm:w-full">
                Try GitHub Copilot
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className=" w-full h-auto border-b border-gray-700 z-50">
        <AnimatePresence mode="popLayout">
          {Object.entries(heroAccordion.categories[activeCategory])
            .filter(([key]) => key !== "id")
            .map(([key, item], index) => (
              <div
                key={index}
                className="w-[1204px] mx-auto bg-[#756eb6a6] h-[682px] pt-6 px-6 rounded-t-3xl border-t border-x border-[#8c93fb] shadow-[-8px_-23px_98px_2px_#8c93fb] flex justify-center items-center
                max-[1280px]:w-[97%] max-[1280px]:h-fit max-md:w-[512px] max-md:h-[543px] max-sm:w-[96%] max-sm:h-auto max-md:px-3 max-md:pt-3 max-sm:mr-0 max-sm:ml-auto max-sm:pr-0 max-sm:rounded-r-none"
              >
                <div
                  ref={videoDiv.ref}
                
                  className="w-full h-full relative max-md:h-[530px] "
                >
                  {activeCategory === "Code" && key === "video" ? (
                    <div>
                      <video
                        onClick={() => handlePlayPause()}
                        ref={videoRefDesktop}
                        src={item}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full rounded-t-2xl max-md:h-[530px] object-left object-cover max-sm:rounded-r-none"
                      />
                      <div
                        className=" fixed bottom-5 right-5 h-11 w-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-all duration-300 bg-[#ffffff2e]"
                        onClick={() => handlePlayPause()}
                      >
                        {!isPlaying ? <Play /> : <Pause />}
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item}
                      alt="images"
                      fill
                      className=" rounded-t-2xl object-left object-cover max-sm:rounded-r-none"
                    />
                  )}
                </div>
              </div>
            ))}
        </AnimatePresence>
        <div className="text-white h-[260px] flex-col w-full flex pt-8 px-6 items-center z-50 bg-[#0b0f1e]">
          <div className="w-full flex items-center justify-center h-[58px]">
            <div className="flex gap-0 relative w-[682px] h-full rounded-full border max-md:hidden items-center justify-center max-md:w-auto max-md:flex-wrap max-[700px]:h-auto">
              {Object.keys(heroAccordion.categories).map(
                (category, index: number) => (
                  <button
                    key={index}
                    className="w-[130px]  h-10 rounded-full"
                    onClick={() => setActiveCategory(category as CategoryType)}
                  >
                    {category}
                  </button>
                )
              )}
              <motion.div
                className="absolute w-[130px] cursor-pointer h-10 rounded-full border border-gray-400"
                layoutId="activeCategory"
                animate={{
                  left:
                    Object.keys(heroAccordion.categories).indexOf(
                      activeCategory
                    ) *
                      130 +
                    80,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                style={{
                  top: "14%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div className="w-auto h-auto z-40 md:hidden">
              <select
                name="selectButton"
                className="py-2 px-3 bg-transparent  outline-none text-white border-2 border-gray-600 rounded-full"
                onChange={(e) =>
                  setActiveCategory(e.target.value as CategoryType)
                }
              >
                {Object.keys(heroAccordion.categories).map(
                  (category, index: number) => (
                    <option key={index} className="bg-black px-2 ">
                      {category}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="mt-6 text-[#8B949e] text-center max-md:mx-10">
            <p>
              Build code quickly and more securely with GitHub Copilot embedded
              throughout your workflows.
            </p>
          </div>
        </div>
        <SliderComponent />
      </div>
      <SectionTwo />
    </>
  );
}
