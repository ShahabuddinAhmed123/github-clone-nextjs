import Image from 'next/image';
import React from 'react';

const Carousel: React.FC = () => {
  const images: string[] = [
    "/american-airlines-logo.svg",
    "/duolingo-logo.svg",
    "/ey-logo.svg",
    "/figma-logo.svg",
    "/ford-logo.svg",
    "/infosys-logo.svg",
    "/mercado-logo.svg",
    "/mercedes-logo.svg",
    "/newyorktimes-logo.svg",
    "/philips-logo.svg",
    "/sap-logo.svg",
    "/shopify-logo.svg",
    "/societe-generale-logo.svg",
    "/spotify-logo.svg",
    "/vodafone-logo.svg",
  ];

  return (
    <div className="relative flex items-center justify-center bg-[#0b0f1e]">
      <div className="slider w-full h-[140px] pt-8 pb-12 shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 w-52 h-full bg-gradient-to-r from-[#0b0f1e] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-52 h-full bg-gradient-to-l from-[#0b0f1e] to-transparent z-10"></div>
        
        <div
          className="flex w-[5500px] max-md:h-[40px] animate-scroll gap-10"
          style={{ animation: "scroll 40s linear infinite" }}
        >
          {[...images, ...images].map((src: string, index: number) => (
            <div key={index} className="w-full h-[60px] gap-5 flex items-center max-md:h-[45px]">
              <Image width={5000} style={{ height: "50px" }} height={10} src={src} alt="slide" className=" h-[60px]" />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-350px * 7)); }
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;