import React, { useRef } from "react";
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
gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const container = useRef<HTMLDivElement | null>(null);

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
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: container });
  

  return (
    <>
    <div className="w-full h-auto pt-32 bg-[#0d1117] text-[#ffffffd9] relative flex flex-col gap-0" ref={container}>
      <div className="w-[770px] mx-auto h-auto flex flex-col gap-5 text-center">
        <h1 className="text-5xl font-bold reveal">Accelerate performance</h1>
        <p className="text-2xl reveal">
          With GitHub Copilot embedded throughout the platform, you can simplify
          your toolchain, automate tasks, and improve the developer experience
        </p>
      </div>
      <img
        src="/particles.png"
        className="absolute top-0 w-[512px] left-1/2 z-10 transform translate-x-[-50%]"
        alt=""
      />
        <div className="shadow mx-auto">
  <div className="triangle-wrapper">
    <div className="triangle">
      <p>Todrick</p>
    </div>
  </div>
</div>
      <div className="w-full h-20"></div>
      <div className="w-[1250px] z-50 backdrop-blur-[1px] rounded-t-3xl border-gray-500 px-24 h-[670px] flex items-center justify-center border-t border-x mx-auto">
        <div className="w-fit h-full flex items-center backdrop-blur-lg">
        <div className="w-fit p-2 mx-auto rounded-3xl bg-[#8c00ff33] reveal">
        <video
        className="w-[452px] rounded-3xl"
          src="https://github.githubassets.com/assets/hero_desktop-4dc318ea1962.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
        ></video>
        </div>
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
