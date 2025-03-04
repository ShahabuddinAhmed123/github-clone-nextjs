import Slider from "react-infinite-logo-slider";
import React from "react";

const SliderComponent: React.FC = () => {
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
    <div className="bg-[#0b0f1e] relative w-full overflow-hidden h-[140px] flex items-center">
    <Slider  blurBorders blurBorderColor="#0b0f1e" duration={100} pauseOnHover={true}>
      {[...images, ...images].map((src, index) => (
        <Slider.Slide key={index}>
          <img src={src} alt="logo" className="w-full h-20 max-sm:h-16 py-4 px-6" />
        </Slider.Slide>
      ))}
    </Slider>
    <div className="absolute top-0 -right-1 w-52 h-full bg-gradient-to-l from-[#0b0f1e] to-transparent z-10"></div>
    </div>
  );
};

export default SliderComponent;
