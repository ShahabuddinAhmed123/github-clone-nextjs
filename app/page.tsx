"use client";

import localFont from "next/font/local";
import Video from "next-video";
import MainVideo from "../videos/codevideo.mp4.json";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionTwo from "@/components/SectionTwo";

const monaLight = localFont({
  src: "./fonts/MonaSans-Regular.otf",
});
const monaSemibold = localFont({
  src: "/fonts/MonaSans-SemiBold.otf",
});

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const target = useRef<HTMLDivElement | null>(null);
  
  const videoDiv = useParallax({
    speed: 10,
    // targetElement: target.current, 
  });

  const handleVisibleButton = () => {
    setShowNav(window.scrollY < 550);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <>
      <div
        ref={target}
        className={`${monaLight.className} text-white min-h-screen w-full flex flex-col items-center justify-center relative`}
      >
        {showNav && (
          <div className="w-[970px] h-[80vh] flex justify-center fixed z-0">
            <div className="w-full h-auto flex flex-col items-center gap-8 px-6 text-center mt-20">
              <h1 className={`text-6xl ${monaSemibold.className}`}>
                Build and ship software on a single, collaborative platform
              </h1>
              <p className="text-lg">
                Join the world’s most widely adopted AI-powered developer platform.
              </p>
              <div className="w-[670px] h-14 flex gap-5">
                <div className="w-[475px] p-1 h-14 flex items-center gap-2 bg-white rounded-md">
                  <input
                    className="w-[260px] h-full px-4 py-3 text-black outline-blue-500 rounded-md placeholder:text-[#777]"
                    placeholder="Enter your email"
                    type="text"
                  />
                  <button className="w-[200px] h-full bg-green-700 rounded-md hover:bg-green-800 transition-all duration-300">
                    Sign up for GitHub
                  </button>
                </div>
                <button className="w-[204px] rounded-md border-2 bg-[#1a1c44] hover:bg-[#2c2f61] transition-all duration-300">
                  Try GitHub Copilot
                </button>
              </div>
            </div>
          </div>
        )}
        <div
          ref={videoDiv.ref} 
          id="parallax"
          className="w-[1246px] h-fit absolute top-[85vh] bg-[#655e96] p-6 rounded-t-3xl border border-[#8c93fb] shadow-2xl shadow-[#8c93fb] flex justify-center items-center"
        >
          <Video
            src={MainVideo}
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full h-[68vh] bg-transparent z-50"></div>
      <HeroCarousel />
      <SectionTwo />
    </>
  );
}
