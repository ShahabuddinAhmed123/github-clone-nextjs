import React, { useRef, useState } from "react";
import SectionTwoGrid from "./SectionTwoGrid";
import ImageAccordion from "@/app/libs/ImageAccordion";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import ScrollToTop from "@/app/libs/ScrollToTop";
import Image from "next/image";
import { Play } from 'lucide-react';
import { Pause } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const container = useRef<HTMLDivElement | null>(null);
 const [isPlaying, setIsPlaying] = useState(true);
  const videoRefDesktop = useRef<HTMLVideoElement | null>(null);
  // const videoRefResponsive = useRef<HTMLVideoElement | null>(null);

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
  
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRefDesktop.current?.pause();
      // videoRefResponsive.current?.pause();
    } else {
      videoRefDesktop.current?.play();
      // videoRefResponsive.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    <div className="w-full h-auto pt-32 bg-[#0d1117] text-[#ffffffd9] relative flex flex-col gap-0 max-lg:" ref={container}>
      <div className="w-[770px] mx-auto h-auto flex flex-col gap-5 text-center max-md:w-[80%]">
        <h1 className="text-5xl font-bold reveal max-lg:text-4xl">Accelerate performance</h1>
        <p className="text-2xl reveal max-lg:text-lg">
          With GitHub Copilot embedded throughout the platform, you can simplify
          your toolchain, automate tasks, and improve the developer experience
        </p>
      </div>
      <div className="">
      <Image
        src="/particles.png"
        className="absolute top-0 left-1/2 z-10 transform translate-x-[-50%]"
        alt="gdi"
        width={512}
        height={200}
      />
      </div>
        <div className="shadow mx-auto">
  <div className="triangle-wrapper">
    <div className="triangle">
      <p>Todrick</p>
    </div>
  </div>
</div>
      <div className="w-full h-20 max-lg:h-10"></div>
      <div className="videoDev w-[1250px] z-10 backdrop-blur-[1px] rounded-t-3xl
       border-gray-500 px-24 py-12 bg-gradient-to-t from-[#26374b] via-transparent to-transparent h-[670px]
        flex items-center justify-center border-t border-x mx-auto max-lg:h-auto max-lg:w-full max-lg:rounded-none max-lg:border-x-0 
        max-md:px-0">
        <div className="w-fit h-full p-2 mx-auto rounded-3xl bg-[#8c00ff33] reveal max-md:w-[85%] max-md:mx-0">
        <video
        onClick={() => handlePlayPause()}
          ref={videoRefDesktop}
        className="w-[452px] h-full rounded-3xl max-md:w-full"
          src="https://github.githubassets.com/assets/hero_desktop-4dc318ea1962.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        </div>
        <div className="fixed bottom-5 right-11 h-11 w-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-all duration-300 bg-[#9e9e9e86]"   onClick={() => handlePlayPause()}>
            {
              !isPlaying ? <Play/> : <Pause/>
            }
          </div>
      </div>
    </div>
      <SectionTwoGrid/>
      <ImageAccordion/>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <ScrollToTop/>
    </>
  );
};

export default SectionTwo;
