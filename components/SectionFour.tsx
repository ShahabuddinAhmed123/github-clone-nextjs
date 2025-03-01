import localFont from "next/font/local";
import React, { useRef } from "react";
import SectionFourGrid from "./SectionFourGrid";
import SectionFourAccordion from "@/app/libs/SectionFourAccordion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });

export default function SectionFour() {
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
    <div className="w-full h-auto bg-[#0d1117]" ref={container}>
      <div className="w-full h-36"></div>
      {/* <div className="w-32 mx-auto reveal">
        <Image
          fill
          className="object-cover"
          src="https://media.giphy.com/media/9f8mk4P3X2Nvch1z2o/giphy.gif?cid=ecf05e47fmg243zatnypc1q728ifeq630wcmw3van96kocj4&ep=v1_stickers_related&rid=giphy.gif&ct=s"
          alt="hi"
        />
      </div> */}
      <div className="h-auto w-[1280px] mx-auto">
        <div className="h-full w-full flex flex-col items-center justify-center gap-5 text-white relative">
          <div className="shadoww absolute z-0">
            <div className="shadow2Background">
              <div className="shadow2Div">
                <p>Todrick</p>
              </div>
            </div>
          </div>
          <div className="">
          <Image
            src="/particles.png"
            alt="hii"
            width={512}
            height={200}
            className="object-cover absolute top-0 left-1/2 z-0 transform translate-x-[-50%]"
          />
          </div>

          <div
            className={`text-5xl text-center reveal ${monaSemibold.className}`}
          >
            <h1>Work togetcher, achieve more</h1>
          </div>
          <span className="reveal text-2xl w-[700px] text-center text-[#ffffffd9] z-20">
            Collaborate with your teams, use management tools that sync with
            your projects, and code from anywhere—all on a single, integrated
            platform.
          </span>
        </div>
      </div>
      <div className="h-20 w-full"></div>
      <div className="w-[1280px] h-auto pt-16 px-24 mx-auto z-50 border-x border-t border-gray-500 rounded-t-3xl bg-gradient-to-t from-[#2f4358] via-transparent to-transparent">
        <div className="reveal w-full h-full rounded-t-3xl px-2 pt-2 border border-gray-600 z-50 backdrop-blur-lg bg-[#8f8e8e65]">
          <Image
            src="/section-four-hero-image.webp"
            alt="image"
            className="rounded-t-2xl"
            height={100}
            width={1086}
          />
        </div>
      </div>
      <SectionFourGrid />
      <SectionFourAccordion />
    </div>
  );
}
